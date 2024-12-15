import { DBunit } from '@/types/db-types'
// import { colorStatus } from '@/lib/utils-units' extraer funcion usar mediante import

export function BoxUnit({ unit }: { unit: DBunit }) {
	const colorStatus = (status: string) => {
		switch (status) {
			case '0-8':
				return 'bg-red-500'
			case '0-9':
				return 'bg-green-500'
			case 'no-driver':
				return 'bg-yellow-500'
			case 'dispatched':
				return 'bg-blue-500'
			default:
				return 'bg-gray-500'
		}
	}

	return (
		<div
			key={unit.id}
			className={`flex flex-col items-center justify-center ${colorStatus(unit.status)}  w-[80%] h-8 rounded-md cursor-pointer transition-[colors, transform] duration-300 hover:scale-105 shadow-sm shadow-black/80 dark:shadow-white/80`}
		>
			<h2 className='text-lg from-accent-foreground font-[family-name:var(--font-geist-sans)] pointer-events-none'>
				{unit.name}
			</h2>
		</div>
	)
}
