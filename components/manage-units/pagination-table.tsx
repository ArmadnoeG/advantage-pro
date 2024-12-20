'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { createPagination } from '@/utils/createPagination'

export function PaginationTable({ totalPages }: { totalPages: number }) {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()
	const currentPage = Number(searchParams.get('page')) || 1

	const handlePageChange = (page: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', page.toString())
		return replace(`${pathname}?${params.toString()}`)
	}

	return (
		<div className='flex h-8 items-center justify-center gap-2 '>
			<Button
				variant='ghost'
				className=''
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage <= 1}
			>
				<ChevronLeft className='size-4 text-foreground' />
				<span className='text-foreground'>Atras</span>
			</Button>

			{createPagination(totalPages, currentPage, handlePageChange)}

			<Button
				variant='ghost'
				className=''
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage >= totalPages}
			>
				<span className='text-foreground'>Siguiente</span>
				<ChevronRight className='size-4 text-foreground' />
			</Button>
		</div>
	)
}
