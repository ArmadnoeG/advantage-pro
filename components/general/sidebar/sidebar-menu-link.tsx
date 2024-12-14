import { LucideIcon } from 'lucide-react'
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import Link from 'next/link'

interface SidebarMenuItemProps {
	icon: LucideIcon
	label: string
	href: string
}

export function SidebarMenuLink({
	icon: Icon,
	label,
	href
}: SidebarMenuItemProps) {
	return (
		<SidebarMenuItem>
			<Link href={href}>
				<SidebarMenuButton className='flex items-center text-sidebar-foreground'>
					<Icon className='mr-2 size-4' />
					<span className='text-sidebar-foreground font-[family-name:var(--font-roboto-flex)]'>
						{label}
					</span>
				</SidebarMenuButton>
			</Link>
		</SidebarMenuItem>
	)
}
