import { DBunit } from '@/types/db-types'
import { SheetTrigger } from '@/components/ui/sheet'
// import { colorStatus } from '@/lib/utils-units'

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
				className={`flex flex-col items-center justify-center ${colorStatus(unit.status)}  w-[80%] h-8 rounded-md cursor-pointer transition-[colors, transform] duration-300 hover:scale-105`}
			>
				<h2 className='text-lg from-accent-foreground font-[family-name:var(--font-geist-sans)] pointer-events-none'>
					{unit.name}
				</h2>
			</div>
		</SheetTrigger>
	)
}
