import { DBunit } from '@/types/db-types'
import { colorStatus } from '@/lib/utils-units'

export function BoxUnit({ unit }: { unit: DBunit }) {
	return (
		<div
			key={unit.id}
			className={`flex flex-col items-center justify-center ${colorStatus(unit.status)}  w-[80%] h-8 rounded-md cursor-pointer`}
		>
			<h2 className='text-lg from-accent-foreground font-[family-name:var(--font-geist-sans)] pointer-events-none'>
				{unit.name}
			</h2>
		</div>
	)
}
