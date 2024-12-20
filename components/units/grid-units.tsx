import { getUnits } from '@/lib/services/actions/read'
import { GridUnitsClient } from './grid-units-client'
import { Suspense } from 'react'
import { GridSkeleton } from './skeleton-units'

export async function GridUnits() {
	const { data, success, message } = await getUnits() // Consulta inicial en el servidor
	if (!success) throw new Error(message)

	const initialUnits = Array.isArray(data) ? data : []
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
