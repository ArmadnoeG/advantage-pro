import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/general/app-sidebar'
import { DynamicBreadcrumb } from '@/components/general/fetchbreadcrumb'

export default function DashboardLayout({ children }: React.PropsWithChildren) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className='font-[family-name:var(--font-roboto-flex)] w-full'>
				<div className='items-center flex gap-4'>
					<SidebarTrigger />
					<DynamicBreadcrumb />
				</div>

				{children}
			</main>
		</SidebarProvider>
	)
}
