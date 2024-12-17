import {
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetContent
} from '../ui/sheet'
import { DBunit } from '@/types/db-types'
import { colorStatus } from '@/lib/configs/utils-units'
import { ButtonBoxInModal } from './button-box-modal'

export function ModalHandleUnits({ unit }: { unit: DBunit }) {
	if (!unit) return null
	return (
		<SheetContent>
			<SheetHeader className='flex font-[family-name:var(--font-roboto-flex)]'>
				<SheetTitle>
					<span className={`${colorStatus(unit.status)} px-8 py-1 rounded-lg`}>
						{unit.name}
					</span>
				</SheetTitle>
				<SheetDescription className='border-b-[1px] border-border py-2'>
					{unit.model}
				</SheetDescription>
			</SheetHeader>

			<ButtonBoxInModal unit={unit} />
		</SheetContent>
	)
}
