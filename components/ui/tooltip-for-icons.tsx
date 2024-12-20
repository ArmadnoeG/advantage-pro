import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider
} from '@/components/ui/tooltip'

export function TooltipForIcons({
	children,
	description,
	open
}: {
	children: React.ReactNode
	description: string
	open: boolean
}) {
	return (
		<>
			<TooltipProvider skipDelayDuration={200}>
				<Tooltip>
					<TooltipTrigger asChild>{children}</TooltipTrigger>

					{open && (
						<TooltipContent
							side='right'
							className='bg-accent/70 text-accent-foreground ml-2'
						>
							<p className='text-sm font-[family-name:var(--font-roboto-flex)]'>
								{description}
							</p>
						</TooltipContent>
					)}
				</Tooltip>
			</TooltipProvider>
		</>
	)
}
