import { Button } from '@/components/ui/button'
import { Siren } from 'lucide-react'
import { Loader2 } from 'lucide-react'

export const ActionButtons = ({
	onUpdate,
	canSubmit,
	isUnitActive,
	loading
}: {
	onUpdate: () => void
	canSubmit: boolean
	isUnitActive: boolean
	loading: boolean
}) => {
	return (
		<div className='flex gap-2 w-full flex-col border-b-[1px] border-border py-3'>
			<Button
				type='submit'
				className='w-full mt-2'
				onClick={onUpdate}
				disabled={!canSubmit}
			>
				{loading ?
					<Loader2 className='animate-spin-clockwise animate-iteration-count-infinite text-white size-5' />
				:	'Confirmar'}
			</Button>

			<Button
				variant='destructive'
				className={`${isUnitActive ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'} w-full`}
			>
				Despachar unidad <Siren className='text-white size-4' />
			</Button>
		</div>
	)
}
