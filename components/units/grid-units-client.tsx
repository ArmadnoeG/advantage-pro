'use client'

import { filterUnits } from '@/lib/utils-units'
import { useRealtimeUnits } from '@/hooks/useRealtimeUnits'
import { BoxUnit } from '@/components/units/box-unit'
import { DBunit } from '@/types/db-types'
import { UNITS_TYPES } from '@/lib/utils-units'

export function GridUnitsClient({ initialUnits }: { initialUnits: DBunit[] }) {
	const units = useRealtimeUnits(initialUnits)
	const filteredUnits = Object.fromEntries(
		UNITS_TYPES.map(specialty => [specialty, filterUnits(units, specialty)])
	)

	return (
		<div className='grid grid-cols-8 w-full gap-2 '>
			{Object.entries(filteredUnits).map(([unitType, units]) => (
				<div
					key={unitType}
					className='flex flex-col gap-2 items-center border-x-[1px] border-border p-2'
				>
					<h2 className='text-xl font-semibold text-muted-foreground pb-8'>
						{unitType}
					</h2>
					{units.map(unit => (
						<BoxUnit
							key={unit.id}
							unit={unit}
						/>
					))}
				</div>
			))}
		</div>
	)
}
