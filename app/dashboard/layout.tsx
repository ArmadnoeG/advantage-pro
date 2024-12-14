import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/general/app-sidebar'
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage
} from '@/components/ui/breadcrumb'
import { DynamicBreadcrumb } from '@/components/general/fetchbreadcrumb'

export default function DashboardLayout({ children }: React.PropsWithChildren) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main>
				<div className='items-center flex gap-4'>
					<SidebarTrigger />
					<DynamicBreadcrumb />
				</div>

				{children}
			</main>
		</SidebarProvider>
	)
}
