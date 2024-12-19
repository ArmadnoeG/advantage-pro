import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { UNITS_STATUS } from '@/lib/configs/utils-units'

export const UnitStatusToggle = ({
	value,
	onChange
}: {
	value: string
	onChange: (value: string) => void
}) => {
	return (
		<ToggleGroup
			type='single'
			value={value}
			className='flex gap-2 w-full'
			onValueChange={onChange}
		>
			{UNITS_STATUS.map(({ value, label }) => (
				<ToggleGroupItem
					key={value}
					value={value}
					className='w-[40%] h-10 border-border border-[1px] font-[family-name:var(--font-roboto-flex)] mb-3'
				>
					{label}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	)
}
