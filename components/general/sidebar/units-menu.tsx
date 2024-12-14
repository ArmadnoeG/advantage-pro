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
import { ChevronDown } from 'lucide-react'
import { SidebarMenuLink } from './sidebar-menu-link'
import { SubmenuLinks } from './submenu-links'
import { UNITS } from '@/lib/configs/navigaition-sidebar'

export function UnitsMenu() {
	return (
		<SidebarGroup>
			<Collapsible
				className='group/collapsible'
				defaultOpen
			>
				<CollapsibleTrigger className='flex items-center justify-between hover:bg-sidebar-accent w-full rounded-md'>
					<SidebarGroupLabel>Unidades</SidebarGroupLabel>
					<ChevronDown className='size-5 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenu>
						{UNITS.map(({ icon: Icon, label, href }) => (
							<SidebarMenuLink
								key={label + 1}
								icon={Icon}
								label={label}
								href={href}
							/>
						))}
						<SubmenuLinks />
					</SidebarMenu>
				</CollapsibleContent>
			</Collapsible>
		</SidebarGroup>
	)
}
