'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export function HeaderManageUnits() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const handleSearch = (term: string) => {
		const params = new URLSearchParams(searchParams)
		if (term) {
			params.set('query', term)
		} else {
			params.delete('query')
		}
		params.set('page', '1')
		replace(`${pathname}?${params.toString()}`)
	}

	console.log(pathname)

	return (
		<div className='flex w-full items-center gap-2'>
			<div className='relative w-full '>
				<Input
					placeholder='Buscar unidad'
					className='pl-8 w-full'
					defaultValue={searchParams.get('query')?.toString()}
					onChange={event => handleSearch(event.target.value)}
				/>
				<Search className='absolute left-2 top-1/2 -translate-y-1/2 text-foreground size-4' />
			</div>

			<Button className='flex- items-center'>
				<Plus /> Añadir unidad
			</Button>
		</div>
	)
}
