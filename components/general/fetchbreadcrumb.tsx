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

export function DynamicBreadcrumb() {
	const pathname = usePathname()

	const pathParts = pathname.split('/').filter(part => part !== '')

	const breadcrumbItems = pathParts.map((part, index) => {
		const href = '/' + pathParts.slice(0, index + 1).join('/')
		const isLast = index === pathParts.length - 1

		return (
			<BreadcrumbItem key={index}>
				{isLast ?
					<BreadcrumbPage>{part}</BreadcrumbPage> // Elemento sin enlace, ya que es el último
				:	<BreadcrumbLink href={href}>{part}</BreadcrumbLink>}
				{index < pathParts.length - 1 && <BreadcrumbSeparator />}
			</BreadcrumbItem>
		)
	})

	return (
		<Breadcrumb>
			<BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
		</Breadcrumb>
	)
}
