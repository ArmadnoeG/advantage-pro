import { LucideIcon } from 'lucide-react'
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import Link from 'next/link'
import React from 'react'
import { TooltipForIcons } from '@/components/ui/tooltip-for-icons'
import { useSidebar } from '@/components/ui/sidebar'

interface SidebarMenuItemProps {
	icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>
	label: string
	href: string
}

export function SidebarMenuLink({
	icon: Icon,
	label,
	href
}: SidebarMenuItemProps) {
	const { open } = useSidebar()
	console.log(open)

	return (
		<SidebarMenuItem>
			<Link href={href}>
				<SidebarMenuButton className='flex items-center text-sidebar-foreground'>
					<TooltipForIcons
						description={label}
						open={!open}
					>
						<Icon className='mr-2 size-4' />
					</TooltipForIcons>
					<span className='text-sidebar-foreground font-[family-name:var(--font-roboto-flex)]'>
						{label}
					</span>
				</SidebarMenuButton>
			</Link>
		</SidebarMenuItem>
	)
}
