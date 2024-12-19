import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState, useEffect, useMemo } from 'react'
import { UNITS_STATUS, UNITS_EVENTS } from '@/lib/configs/utils-units'
import { DBunit } from '@/types/db-types'
import { InputAutocomplete } from '@/components/ui/input-sense'
import { Button } from '@/components/ui/button'
import { updateUnit } from '@/lib/db/actions/update'
import { Siren } from 'lucide-react'
import { useNotificationStore } from '@/stores/useNotificationStore'

interface Options {
	status: string
	event: string
	driver: string
}

export function ButtonBoxInModal({ unit }: { unit: DBunit }) {
	const { setNotification } = useNotificationStore()

	// Estados locales
	const [formData, setFormData] = useState<Options>({
		status: unit.status,
		event: unit.event,
		driver: unit.driver || ''
	})
	const [isChanged, setIsChanged] = useState(false)

	// Validar cambios
	useEffect(() => {
		setIsChanged(
			formData.status !== unit.status ||
				formData.event !== unit.event ||
				formData.driver !== (unit.driver || '')
		)
	}, [formData, unit])

	// Validar envío del formulario
	const canSubmit = useMemo(() => {
		if (!isChanged) return false
		if (formData.status === '0-9' && !formData.driver) return false
		return true
	}, [isChanged, formData])

	// Condición para habilitar la selección de conductor
	const isDriverAvailable = useMemo(() => {
		return (
			formData.status === '0-9' ||
			(formData.status !== '0-9' && formData.event !== '6-10')
		)
	}, [formData])

	// Manejador de actualizaciones
	const handleUpdateUnit = async () => {
		if (
			(formData.status === '0-9' || formData.status === 'F-S') &&
			formData.event === '6-10'
		) {
			setFormData({ ...formData, driver: '' })
		}
		if (!isChanged) {
			setNotification({
				message: 'No se detectaron cambios en la unidad.',
				success: false
			})
			return
		}
		const response = await updateUnit({
			...formData,
			unit
		})
		setNotification({
			message: response.message,
			success: response.success
		})
	}

	// Actualización del estado del formulario
	const handleChange = (field: keyof typeof formData, value: string) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}))
	}

	return (
		<>
			<p className='my-2 text-sm text-muted-foreground font-[family-name:var(--font-roboto-flex)]'>
				Condición de la unidad:
			</p>

			<div className='flex flex-col gap-1 items-center justify-center w-full my-3'>
				<div className='w-full'>
					<ToggleGroup
						type='single'
						value={formData.status}
						className='flex gap-2 w-full'
						onValueChange={value => handleChange('status', value)}
					>
						{UNITS_STATUS.map(({ value, label }) => (
							<ToggleGroupItem
								key={value}
								value={value}
								className='w-[40%] h-10 border-border border-[1px] font-[family-name:var(--font-roboto-flex)] mb-3'
							>
								{label}
							</ToggleGroupItem>
						))}
					</ToggleGroup>
				</div>

				<div className='w-full'>
					<ToggleGroup
						type='single'
						value={formData.event}
						className='flex gap-2 w-full'
						onValueChange={value => handleChange('event', value)}
					>
						{UNITS_EVENTS.map(({ value, label }) => (
							<ToggleGroupItem
								key={value}
								value={value}
								className='w-[40%] h-10 border-border border-[1px] font-[family-name:var(--font-roboto-flex)]'
							>
								{label}
							</ToggleGroupItem>
						))}
					</ToggleGroup>
				</div>
			</div>

			<p className='text-sm text-muted-foreground font-[family-name:var(--font-roboto-flex)] pb-2'>
				Seleccione un conductor:
			</p>

			<InputAutocomplete
				unit={unit}
				styles={`${
					isDriverAvailable ?
						'opacity-100 pointer-events-auto'
					:	'opacity-50 pointer-events-none'
				} w-full`}
				onSelect={value => handleChange('driver', value)}
			/>

			<div className='flex gap-2 w-full flex-col border-b-[1px] border-border py-3'>
				<Button
					type='submit'
					className='w-full mt-2'
					onClick={handleUpdateUnit}
					disabled={!canSubmit}
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
