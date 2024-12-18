import { DBunit } from '@/types/db-types'
import { SheetTrigger } from '@/components/ui/sheet'
// import { colorStatus } from '@/lib/utils-units'
import { Split } from 'lucide-react'

export function BoxUnit({
	unit,
	onSelect
}: {
	unit: DBunit
	onSelect: (unit: DBunit) => void
}) {
	if (!unit) return null

	const colorStatus = (status?: string) => {
		switch (status) {
			case '0-8':
				return 'bg-yellow-500'
			case '0-9':
				return 'bg-green-500'
			case 'f-s':
				return 'bg-red-500'
			case 'dispatched':
				return 'bg-blue-500'
			default:
				return 'bg-gray-500'
		}
	}

	return (
		<SheetTrigger
			asChild
			onClick={() => onSelect(unit)}
		>
			<div
				key={unit.id}
				className={`flex items-center justify-center ${colorStatus(unit.status)}  w-[80%] h-10 rounded-rounded cursor-pointer gap-4 transition-[colors, transform] duration-300 hover:scale-105 relative `}
			>
				<h2 className='text-lg from-accent-foreground font-[family-name:var(--font-geist-sans)] pointer-events-none '>
					{unit.name}
				</h2>
				{unit.event !== '6-10' && <Split className='text-violet-500 size-5' />}
			</div>
		</SheetTrigger>
	)
}
