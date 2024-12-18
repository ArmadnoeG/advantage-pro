'use client'

import { usePathname } from 'next/navigation'
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage
} from '@/components/ui/breadcrumb'
import { ChevronRight } from 'lucide-react'

export function DynamicBreadcrumb() {
	const pathname = usePathname()
	const pathParts = pathname.split('/').filter(part => part !== '')

	const breadcrumbItems = pathParts.map((part, index) => {
		const href = '/' + pathParts.slice(0, index + 1).join('/')
		const isLast = index === pathParts.length - 1

		return (
			<BreadcrumbItem key={index}>
				{isLast ?
					<BreadcrumbPage className='font-[family-name:var(--font-roboto-flex)]'>
						{part}
					</BreadcrumbPage>
				:	<>
						<BreadcrumbLink href={href}>{part}</BreadcrumbLink>
						{index < pathParts.length - 1 && (
							<span
								className='mx-2'
								aria-hidden='true'
							>
								<ChevronRight className='text-muted-foreground size-4' />
							</span>
						)}
					</>
				}
			</BreadcrumbItem>
		)
	})

	return (
		<Breadcrumb>
			<BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
		</Breadcrumb>
	)
}
