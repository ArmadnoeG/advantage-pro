'use client'
import { useState, useEffect } from 'react'
import { DBunit, DBdrivers } from '@/types/db-types'
import { getDrivers } from '@/lib/db/actions'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { updateUnitDriver } from '@/lib/db/actions'
export function InputAutocomplete({
	styles,
	unit
}: {
	styles: string
	unit: DBunit
}) {
	const [open, setOpen] = useState(false)
	const [drivers, setDrivers] = useState<DBdrivers[] | []>([])
	const [value, setValue] = useState(unit.driver || '')
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const fetchDrivers = async () => {
			const fetchDrivers = await getDrivers()
			if (!fetchDrivers) return
			const filteredDrivers = fetchDrivers.filter(
				driver => driver.authorize === unit.name
			)
			setDrivers(filteredDrivers)
		}
		fetchDrivers()
	}, [])

	const handleSelect = (driver: DBdrivers) => {
		setValue(driver.name)
		setSearchTerm('')
		setOpen(false)
	}
	const afterFilteredDrivers = drivers.filter(driver =>
		driver.name.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<>
			<div className='relative w-[300px]'>
				<Input
					className={`${styles} font-[family-name:var(--font-roboto-flex)] w-full text-foregound`}
					value={open ? searchTerm : value}
					placeholder='Ingresa el nombre del conductor'
					onChange={e => setSearchTerm(e.target.value)}
					onFocus={() => {
						setOpen(true)
						setSearchTerm('')
					}}
				/>
				<Search className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground size-4' />
			</div>

			{open && (
				<div
					className={`absolute z-10 mt-1 w-[300px] rounded-md bg-background border border-border shadow-md font-[family-name:var(--font-roboto-flex)] text-foregound ${open ? 'animate-fade-in' : 'animate-fade-out'} animate-duration-100`}
				>
					{!drivers.length ?
						<p className='p-2 text-center text-muted-foreground'>
							No hay conductores disponibles
						</p>
					:	afterFilteredDrivers.map(driver => (
							<div
								key={driver.id}
								className='flex items-center justify-between p-2 cursor-pointer hover:bg-muted'
								onClick={() => handleSelect(driver)}
							>
								<p className='text-sm'>{driver.name}</p>
							</div>
						))
					}
				</div>
			)}
		</>
	)
}
