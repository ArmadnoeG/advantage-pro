import { getUnits } from '@/lib/db/actions/read'
import { GridUnitsClient } from './grid-units-client'
import { Suspense } from 'react'
import { GridSkeleton } from './skeleton-units'

export async function GridUnits() {
	const response = await getUnits() // Consulta inicial en el servidor
	const initialUnits = Array.isArray(response) ? response : []
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
