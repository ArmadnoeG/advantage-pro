'use client'

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu
} from '@/components/ui/sidebar'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/components/ui/collapsible'
import { CheckCircle2Icon, ChevronDown } from 'lucide-react'
import { SidebarMenuLink } from './sidebar-menu-link'
import { SubmenuLinks } from './submenu-links'

export function UnitsMenu() {
	return (
		<SidebarGroup>
			<Collapsible
				className='group/collapsible'
				defaultOpen
			>
				<CollapsibleTrigger className='flex items-center justify-between hover:bg-sidebar-accent w-full rounded-md'>
					<SidebarGroupLabel className='font-[family-name:var(--font-roboto-flex)]'>
						Unidades
					</SidebarGroupLabel>
					<ChevronDown className='size-5 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenu>
						<SidebarMenuLink
							icon={CheckCircle2Icon}
							label='Disponibilidad'
							href='dashboard/units'
						/>
						<SubmenuLinks />
					</SidebarMenu>
				</CollapsibleContent>
			</Collapsible>
		</SidebarGroup>
	)
}
