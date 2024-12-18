import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState, useEffect } from 'react'
import { UNITS_STATUS, UNITS_EVENTS } from '@/lib/configs/utils-units'
import { DBunit } from '@/types/db-types'
import { InputAutocomplete } from '@/components/ui/input-sense'
import { Button } from '@/components/ui/button'
import { updateUnit } from '@/lib/db/actions/update'
import { Siren } from 'lucide-react'
import { useNotificationStore } from '@/stores/useNotificationStore'

export function ButtonBoxInModal({ unit }: { unit: DBunit }) {
	const [selectedStatus, setSelectedStatus] = useState<string>(unit.status)
	const [selectedEvent, setSelectedEvent] = useState<string>(unit.event)
	const [selectedDriver, setSelectedDriver] = useState<string>(
		unit.driver || ''
	)
	const [isChanged, setIsChanged] = useState<boolean>(false)
	const { setNotification } = useNotificationStore()

	// Validar cambios en los valores
	useEffect(() => {
		const hasChanges =
			selectedStatus !== unit.status ||
			selectedEvent !== unit.event ||
			selectedDriver !== (unit.driver || '')
		setIsChanged(hasChanges)
	}, [selectedStatus, selectedEvent, selectedDriver, unit])

	// Condición para habilitar el botón de confirmación
	const canSubmit =
		isChanged &&
		(selectedStatus !== '0-9' || (selectedStatus === '0-9' && selectedDriver))

	// Condición para habilitar el botón de despachar
	const isAvailable =
		(selectedStatus !== '0-9' && selectedEvent !== '6-10') ||
		selectedStatus === '0-9'

	const handleUpdateUnit = async () => {
		if (!isChanged) {
			setNotification({
				message: 'No se detectaron cambios en la unidad.',
				success: false
			})
			return
		}
		if (selectedStatus === '0-9' && !selectedDriver) {
			setNotification({
				message:
					'Debe asignar un conductor si la unidad está disponible (0-9).',
				success: false
			})
			return
		}

		const response = await updateUnit({
			driver: selectedDriver,
			status: selectedStatus,
			event: selectedEvent,
			unit
		})

		setNotification({
			message: response.message,
			success: response.success
		})
	}

	return (
		<>
			<p className='my-2 text-sm text-muted-foreground font-[family-name:var(--font-roboto-flex)]'>
				Condición de la unidad:
			</p>

			<div className='flex flex-col gap-1 items-center justify-center w-full my-3'>
				{/* Selección de estado */}
				<div className='w-full'>
					<ToggleGroup
						type='single'
						value={selectedStatus}
						className='flex gap-2 w-full'
						onValueChange={setSelectedStatus}
					>
						{UNITS_STATUS.map(status => (
							<ToggleGroupItem
								key={status.value}
								className='w-[40%] h-10 border-border border-[1px] font-[family-name:var(--font-roboto-flex)] mb-3'
								value={status.value}
							>
								{status.label}
							</ToggleGroupItem>
						))}
					</ToggleGroup>
				</div>

				{/* Selección de evento */}
				<div className='w-full'>
					<ToggleGroup
						type='single'
						value={selectedEvent}
						className='flex gap-2 w-full'
						onValueChange={setSelectedEvent}
					>
						{UNITS_EVENTS.map(event => (
							<ToggleGroupItem
								key={event.value}
								className='w-[40%] h-10 border-border border-[1px] font-[family-name:var(--font-roboto-flex)]'
								value={event.value}
							>
								{event.label}
							</ToggleGroupItem>
						))}
					</ToggleGroup>
				</div>
			</div>

			{/* Selección de conductor */}
			<p className='text-sm text-muted-foreground font-[family-name:var(--font-roboto-flex)] pb-2'>
				Seleccione un conductor:
			</p>
			<InputAutocomplete
				unit={unit}
				styles={`${
					isAvailable ?
						'opacity-100 pointer-events-auto'
					:	'opacity-50 pointer-events-none'
				} w-full`}
				onSelect={setSelectedDriver}
			/>

			{/* Botones de acciones */}
			<div className='flex gap-2 w-full flex-col border-b-[1px] border-border py-3'>
				<Button
					type='submit'
					className='w-full mt-2'
					onClick={handleUpdateUnit}
					disabled={!canSubmit} // Deshabilitar si no se puede enviar
				>
					Confirmar
				</Button>

				<Button
					variant='destructive'
					className={`${
						unit.status === '0-9' ?
							'opacity-100 pointer-events-auto'
						:	'opacity-50 pointer-events-none'
					} w-full`}
				>
					Despachar unidad <Siren className='text-white size-4' />
				</Button>
			</div>
		</>
	)
}
