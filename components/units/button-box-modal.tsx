import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useState } from 'react'
import { UNITS_STATUS, UNITS_EVENTS } from '@/lib/configs/utils-units'
import { DBunit } from '@/types/db-types'
import { InputAutocomplete } from '@/components/ui/input-sense'
import { Button } from '@/components/ui/button'
import { updateUnit } from '@/lib/db/actions'

export function ButtonBoxInModal({ unit }: { unit: DBunit }) {
	const [selectedStatus, setSelectedStatus] = useState<string>(unit.status)
	const [selectedEvent, setSelectedEvent] = useState<string>(unit.event)
	const [selectedDriver, setSelectedDriver] = useState<string>('')

	console.log(selectedDriver)

	const isAvailable =
		(selectedStatus === '0-8' && selectedEvent !== '6-10') ||
		selectedStatus === '0-9'

	return (
		<>
			<p className='my-2 text-sm text-muted-foreground font-[family-name:var(--font-roboto-flex)]'>
				Condición de la unidad:
			</p>

			<div className='flex flex-col gap-2 items-center justify-center w-full my-3 border-border border-b-[1px]'>
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
								className=' w-[40%] h-10 border-border border-[1px] font-[family-name:var(--font-roboto-flex)] mb-3'
								value={event.value}
							>
								{event.label}
							</ToggleGroupItem>
						))}
					</ToggleGroup>
				</div>
			</div>
			<InputAutocomplete
				unit={unit}
				styles={`${isAvailable ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'} w-full`}
				onSelect={setSelectedDriver}
			/>

			<Button
				type='submit'
				className='w-full mt-2'
				onClick={() =>
					updateUnit({
						driver: selectedDriver,
						status: selectedStatus,
						event: selectedEvent,
						unit
					})
				}
			>
				Confirmar
			</Button>
		</>
	)
}
