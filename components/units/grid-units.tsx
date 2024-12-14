import { getData } from '@/lib/db/actions'

export async function GridUnits() {
	const units = await getData()
	if (!units) return null

	const filterUnits = (unitType: string) => {
		return units.filter(units => units.type === unitType)
	}
	const filteredUnits = {
		B: filterUnits('B'),
		BR: filterUnits('BR'),
		R: filterUnits('R'),
		BT: filterUnits('BT'),
		Z: filterUnits('Z'),
		BM: filterUnits('BM'),
		H: filterUnits('H')
	}

	console.log(Object.entries(filteredUnits))

	return (
		<div className='grid grid-cols-7 w-full gap-4 '>
			{Object.entries(filteredUnits).map(([unitType, units]) => (
				<div
					key={unitType}
					className='flex flex-col gap-2 items-center border-x-[1px] border-accent p-2'
				>
					<h2 className='text-2xl font-bold'>{unitType}</h2>
					{units.map(unit => (
						<div
							key={unit.id}
							className='flex flex-col items-center justify-center bg-green-400 p-2 w-20 h-20 '
						>
							<h2 className='text-2xl font-bold'>{unit.name}</h2>
						</div>
					))}
				</div>
			))}
		</div>
	)
}
