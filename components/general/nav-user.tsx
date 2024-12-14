import { useSidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Fragment } from 'react'
import { MENU_ITEMS } from '@/lib/configs/navigation-nav-user'
import { cn } from '@/lib/utils'

const USER_DATA = {
	name: 'Shadcn',
	role: 'Desarrollador',
	avatar: 'https://github.com/shadcn.png',
	initials: 'SC'
}

export function NavUser() {
	const { state } = useSidebar()
	const isCollapsed = state === 'collapsed'
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className={`h-auto flex ${isCollapsed ? 'w-auto justify-center p-0' : ' p-2 justify-start'} mt-2`}
				>
					<Avatar className={`h-auto size-8`}>
						<AvatarImage
							src={USER_DATA.avatar}
							alt={USER_DATA.name}
						/>
						<AvatarFallback>{USER_DATA.initials}</AvatarFallback>
					</Avatar>
					<div
						className={`flex flex-col items-start overflow-hidden ${isCollapsed ? 'hidden' : ''} `}
					>
						<span className='font-medium'>{USER_DATA.name}</span>
						<span className='text-xs text-muted-foreground'>
							{USER_DATA.role}
						</span>
					</div>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className='w-[230px]'>
				<DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
				<DropdownMenuSeparator />

				{MENU_ITEMS.map(({ icon: Icon, label, separator }) => (
					<Fragment key={label + 1}>
						<DropdownMenuItem>
							<Icon className='mr-2 h-4 w-4' />
							<span>{label}</span>
						</DropdownMenuItem>
						{separator && <DropdownMenuSeparator />}
					</Fragment>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
