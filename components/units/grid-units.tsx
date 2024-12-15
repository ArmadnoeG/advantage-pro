import { getUnits } from '@/lib/db/actions'
import { GridUnitsClient } from './grid-units-client'
import { Suspense } from 'react'
import { GridSkeleton } from './skeleton-units'

export async function GridUnits() {
	const initialUnits = await getUnits() // Consulta inicial en el servidor
	return (
		<>
			<h2
				className='font-[family-name:(var(--font-geist-sans))] text-2xl text-foreground font-bold mb-10 border-b-[1px]
      border-border py-2'
			>
				Unidades
			</h2>
			<Suspense fallback={<GridSkeleton />}>
				<GridUnitsClient initialUnits={initialUnits} />
			</Suspense>
		</>
	)
}
