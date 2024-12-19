import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { UNITS_EVENTS } from '@/lib/configs/utils-units'

export const UnitEventToggle = ({
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
			{UNITS_EVENTS.map(({ value, label }) => (
				<ToggleGroupItem
					key={value}
					value={value}
					className='w-[40%] h-10 border-border border-[1px] font-[family-name:var(--font-roboto-flex)]'
				>
					{label}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	)
}
