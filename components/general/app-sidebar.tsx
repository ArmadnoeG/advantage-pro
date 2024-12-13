import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarGroup
} from '@/components/ui/sidebar'

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<h1 className='text-2xl font-bold font-[family-name:var(--font-geist-sans)] text-center'>
					Dashboard
				</h1>
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
