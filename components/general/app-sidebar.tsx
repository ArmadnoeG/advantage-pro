'use client'

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader
} from '@/components/ui/sidebar'
import { NavUser } from '@/components/general/nav-user'
import { ModeToggle } from '@/components/general/theme-toggle'
import { UnitsMenu } from '@/components/general/sidebar/units-menu'
import { SubmenuLinks } from '@/components/general/sidebar/submenu-links'

export function AppSidebar() {
	return (
		<Sidebar
			collapsible='icon'
			className='font-[family-name:var(--font-roboto-flex)]'
		>
			<SidebarHeader>
				<NavUser />
			</SidebarHeader>

			<SidebarContent>
				<UnitsMenu />
			</SidebarContent>

			<SidebarFooter>
				<div className='flex justify-end'>
					<ModeToggle />
				</div>
			</SidebarFooter>
		</Sidebar>
	)
}
