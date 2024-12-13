import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/general/app-sidebar'

export default function DashboardLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<SidebarTrigger />
			</main>
		</SidebarProvider>
	)
}
