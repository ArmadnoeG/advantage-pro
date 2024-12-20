import Link from 'next/link'
export function createPagination(
	totalPages: number,
	currentPage: number,
	handlePageChange: (page: number) => void
) {
	const pages = []

	if (totalPages <= 3) {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i)
		}
	} else {
		pages.push(1)
		if (currentPage > 3) {
			pages.push('...')
		}
		if (currentPage > 2 && currentPage < totalPages - 1) {
			pages.push(currentPage - 1)
			pages.push(currentPage)
			pages.push(currentPage + 1)
		} else if (currentPage <= 3) {
			for (let i = 2; i <= 3; i++) {
				pages.push(i)
			}
		} else if (currentPage >= totalPages - 2) {
			for (let i = totalPages - 2; i < totalPages; i++) {
				pages.push(i)
			}
		}
		if (currentPage < totalPages - 2) {
			pages.push('...')
		}
		pages.push(totalPages)
	}

	return pages.map((page, index) => {
		if (page === '...') {
			return (
				<span
					key={index}
					className='px-3 py-1'
				>
					{page}
				</span>
			)
		}
		return (
			<Link
				key={index}
				className={`${page === currentPage ? 'bg-primary text-white' : 'border-primary hover:bg-accent'} px-3 py-1 rounded-lg border-[1px]`}
				onClick={() => typeof page === 'number' && handlePageChange(page)}
				href={`?page=${page}`}
			>
				{page}
			</Link>
		)
	})
}
