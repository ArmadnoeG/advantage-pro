import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarGroup
} from '@/components/ui/sidebar'
import { NavUser } from '@/components/general/nav-user'

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<NavUser />
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>hola</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<p className='text-sm text-muted-foreground'>chao</p>
			</SidebarFooter>
		</Sidebar>
	)
}
