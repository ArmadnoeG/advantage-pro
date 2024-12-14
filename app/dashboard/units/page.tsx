import { GridUnits } from '@/components/units/grid-units'
import { Suspense } from 'react'

export default function UnitsPage() {
	return (
		<section className='w-full p-4'>
			<Suspense fallback={<div>Loading...</div>}>
				<GridUnits />
			</Suspense>
		</section>
	)
}
