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
							<div
								key={unit.id}
								className='flex flex-col items-center justify-center bg-green-500  w-28 h-8 rounded-md cursor-pointer'
							>
								<h2 className='text-lg from-accent-foreground font-[family-name:var(--font-geist-sans)] pointer-events-none'>
									{unit.name}
								</h2>
							</div>
						))}
					</div>
				))}
			</div>
		</>
	)
}
