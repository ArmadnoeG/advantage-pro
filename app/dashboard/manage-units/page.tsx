import { HeaderManageUnits } from '@/components/manage-units/header'
import { PaginationTable } from '@/components/manage-units/pagination-table'
import { TableUnits } from '@/components/manage-units/table-units'
import { Suspense } from 'react'
import { fetchPagesOfUnits } from '@/lib/db/actions/read'
import { TableUnitsLoadingSkeleton } from '@/components/manage-units/table-units-loading-skeleton'

export default async function PageManageUnits({
	searchParams
}: {
	searchParams?: {
		query: string
		page: string
	}
}) {
	const { totalPages } = await fetchPagesOfUnits(searchParams?.query)
	const query = searchParams?.query

	return (
		<>
			<section className='max-w-[90%] mx-auto'>
				<h1 className='my-4'>Gestion de unidades</h1>
				<div className='flex flex-col mx-auto p-4 w-full gap-4'>
					<HeaderManageUnits />
					<Suspense
						fallback={<TableUnitsLoadingSkeleton />}
						key={searchParams?.query}
					>
						<TableUnits
							query={query}
							page={Number(searchParams?.page)}
						/>
					</Suspense>
					<PaginationTable totalPages={totalPages as number} />
				</div>
			</section>
		</>
	)
}
