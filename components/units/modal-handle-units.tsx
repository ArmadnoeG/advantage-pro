import {
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetFooter,
	SheetContent
} from '../ui/sheet'
import { DBunit } from '@/types/db-types'

export function ModalHandleUnits({ unit }: { unit: DBunit }) {
	if (!unit) return null
	return (
		<SheetContent>
			<SheetHeader className='flex font-[family-name:var(--font-roboto-flex)]'>
				<SheetTitle>
					<span className='py-2 px-4'>{unit.name}</span>
				</SheetTitle>
			</SheetHeader>
		</SheetContent>
	)
}
