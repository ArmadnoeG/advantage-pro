export function GridSkeleton() {
	return (
		<div className='grid grid-cols-8 w-full gap-2'>
			{Array.from({ length: 8 }).map((_, i) => (
				<div
					key={i}
					className='flex flex-col gap-2 items-center border-x-[1px] border-border p-2'
				>
					<div className='h-4 w-16 bg-muted rounded-full animate-pulse mb-8' />
					{Array.from({ length: 4 }).map((_, j) => (
						<div
							key={j}
							className='h-8 w-[80%] bg-muted rounded-md animate-pulse'
						/>
					))}
				</div>
			))}
		</div>
	)
}