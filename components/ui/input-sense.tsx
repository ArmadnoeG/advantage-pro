/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect, useRef, useMemo } from 'react'
import { DBunit, DBdrivers } from '@/types/db-types'
import { getDrivers } from '@/lib/db/actions'
import { CheckCircle2, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function InputAutocomplete({
	styles,
	unit,
	onSelect
}: {
	styles: string
	unit: DBunit
	onSelect: (driver: string) => void
}) {
	const [open, setOpen] = useState(false)
	const [drivers, setDrivers] = useState<DBdrivers[] | []>([])
	const [value, setValue] = useState(unit.driver || '')
	const [searchTerm, setSearchTerm] = useState('')
	const wrappedRef = useRef(null)

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

		const handleClickOutside = (event: MouseEvent) => {
			if (
				wrappedRef.current &&
				!(wrappedRef.current as HTMLElement).contains(event.target as Node)
			) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleSelect = (driver: DBdrivers) => {
		setValue(driver.name)
		onSelect(driver.name)
		setSearchTerm('')
		setOpen(false)
	}
	const afterFilteredDrivers = useMemo(
		() =>
			drivers.filter(driver =>
				driver.name.toLowerCase().includes(searchTerm.toLowerCase())
			),
		[drivers, searchTerm]
	)

	return (
		<>
			<div ref={wrappedRef}>
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
						autoComplete='off'
					/>
					<Search className='absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground size-4' />
				</div>

				{open && (
					<div
						className={`absolute z-[9999] mt-1 w-[300px] rounded-md bg-background border border-border shadow-md font-[family-name:var(--font-roboto-flex)] text-foregound ${open ? 'animate-fade-in' : 'animate-fade-out'} animate-duration-200`}
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
									{driver.name === unit.driver && (
										<CheckCircle2 className='text-foreground size-4 mr-2' />
									)}
								</div>
							))
						}
					</div>
				)}
			</div>
		</>
	)
}
