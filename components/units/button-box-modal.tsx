import { useUnitForm } from '@/hooks/useUnitForm'
import { ActionButtons } from './units-actions-buttons'
import { UnitStatusToggle } from './unit-status-toggle'
import { UnitEventToggle } from './units-events-toggle'
import { InputAutocomplete } from '@/components/ui/input-sense'
import { DBunit } from '@/types/db-types'
import { Settings2, UserRound } from 'lucide-react'

export function ButtonBoxInModal({ unit }: { unit: DBunit }) {
	const {
		loading,
		formData,
		canSubmit,
		isDriverAvailable,
		handleChange,
		handleUpdateUnit
	} = useUnitForm(unit)

	return (
		<>
			<div className='flex items-center gap-2 w-full'>
				<Settings2 className='text-muted-foreground size-4' />
				<p className='my-2 text-sm text-muted-foreground font-[family-name:var(--font-roboto-flex)]'>
					Condición de la unidad:
				</p>
			</div>

			<div className='flex flex-col gap-1 items-center justify-center w-full my-3'>
				<div className='w-full'>
					<UnitStatusToggle
						value={formData.status}
						onChange={value => handleChange('status', value)}
					/>
				</div>

				<div className='w-full'>
					<UnitEventToggle
						value={formData.event}
						onChange={value => handleChange('event', value)}
					/>
				</div>
			</div>
			<div className='flex items-center gap-2 w-full'>
				<UserRound className='text-muted-foreground size-4' />
				<p className='text-sm text-muted-foreground font-[family-name:var(--font-roboto-flex)] '>
					Seleccione un conductor:
				</p>
			</div>

			<InputAutocomplete
				unit={unit}
				styles={`${isDriverAvailable ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'} w-full mt-1`}
				onSelect={value => handleChange('driver', value)}
			/>

			<ActionButtons
				onUpdate={handleUpdateUnit}
				canSubmit={canSubmit}
				isUnitActive={formData.status === '0-9'}
				loading={loading}
			/>
		</>
	)
}
