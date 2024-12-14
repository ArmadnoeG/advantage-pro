'use client'

import {
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarMenuSubItem,
	SidebarMenuSubButton
} from '@/components/ui/sidebar'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/components/ui/collapsible'
import { SidebarMenuLink } from './sidebar-menu-link'
import { HANDLE_UNITS } from '@/lib/configs/navigaition-sidebar'
import { Settings } from 'lucide-react'

export function SubmenuLinks() {
	return (
		<Collapsible defaultOpen>
			<CollapsibleTrigger asChild>
				<SidebarMenuButton>
					<Settings />
					Administrar unidades
				</SidebarMenuButton>
			</CollapsibleTrigger>

			<CollapsibleContent>
				<SidebarMenuSub>
					{HANDLE_UNITS.map(({ icon: Icon, label, href }) => (
						<SidebarMenuSubButton
							href={href}
							className='flex items-center gap-2'
							key={label + 1}
						>
							<Icon className='mr-2 size-4' />
							<span>{label}</span>
						</SidebarMenuSubButton>
					))}
				</SidebarMenuSub>
			</CollapsibleContent>
		</Collapsible>
	)
}
