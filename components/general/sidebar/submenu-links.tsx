'use client'

import {
	SidebarMenuButton,
	SidebarMenuSub,
	SidebarMenuSubButton
} from '@/components/ui/sidebar'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger
} from '@/components/ui/collapsible'
import { HANDLE_UNITS } from '@/lib/configs/navigaition-sidebar'
import { ChevronRight, Settings } from 'lucide-react'

export function SubmenuLinks() {
	return (
		<Collapsible className='group'>
			<CollapsibleTrigger asChild>
				<SidebarMenuButton>
					<Settings className='mr-2' />
					<span className='font-[family-name:var(--font-roboto-flex)]'>
						Administrar unidades
					</span>
					<ChevronRight className='ml-auto transition-transform duration-400 group-data-[state=open]:rotate-90' />
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
							<span className='font-[family-name:var(--font-roboto-flex)]'>
								{label}
							</span>
						</SidebarMenuSubButton>
					))}
				</SidebarMenuSub>
			</CollapsibleContent>
		</Collapsible>
	)
}
