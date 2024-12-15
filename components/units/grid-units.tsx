'use client'

import { filterUnits } from '@/lib/utils-units'
import { useRealtimeUnits } from '@/hooks/useRealtimeUnits'
import { BoxUnit } from '@/components/units/box-unit'

export function GridUnits() {
	const unitSpecialties = ['B', 'BR', 'R', 'BT', 'Z', 'BM', 'H']
	const units = useRealtimeUnits()

	const filteredUnits = Object.fromEntries(
		unitSpecialties.map(specialty => [specialty, filterUnits(units, specialty)])
	)

	return (
		<>
			<h2
				className='font-[family-name:(var(--font-geist-sans))] text-2xl text-foreground font-bold mb-10 border-b-[1px]
      border-border py-2'
			>
				Unidades
			</h2>

			<div className='grid grid-cols-7 w-full gap-2 '>
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
		</>
	)
}
