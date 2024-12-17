import { Toggle } from '@/components/ui/toggle'
import { useState, useEffect } from 'react'
import { UNITS_STATUS } from '@/lib/configs/utils-units'
import { DBunit } from '@/types/db-types'

export function ButtonBoxInModal({ unit }: { unit: DBunit }) {
	const [selectedStatus, setSelectedStatus] = useState<string>('')

	useEffect(() => {
		setSelectedStatus(unit.status)
	}, [unit])

	return (
		<>
			<p className='my-2 text-sm text-muted-foreground'>
				Condición de la unidad:
			</p>
			<div className='flex gap-2 items-center justify-center w-full mt-3'>
				{UNITS_STATUS.map(condition => (
					<Toggle
						key={condition.value}
						className='w-[30%] h-8 border-border border-[1px]'
						pressed={selectedStatus === condition.value}
						onPressedChange={() => setSelectedStatus(condition.value)}
					>
						{condition.label}
					</Toggle>
				))}
			</div>
		</>
	)
}
