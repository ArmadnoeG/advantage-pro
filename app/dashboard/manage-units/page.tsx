'use client'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/components/ui/table'
import { getUnits } from '@/lib/db/actions/read'
import { Edit, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useEffect, useMemo } from 'react'
import { DBunit } from '@/types/db-types'

export default function PageManageUnits() {
	const [data, setData] = useState<DBunit[]>([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await getUnits()
			if (!data) return
			return setData(data)
		}
		fetchData()
	}, [])

	const filteredData = useMemo(() => {
		if (!searchTerm) return data
		return data.filter(unit =>
			unit.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
	}, [searchTerm, data])

	return (
		<div className='flex flex-col mx-auto px-4 max-w-[90%]'>
			<h1 className='text-3xl font-[family-name:var(--font-geist-sans)] font-bold my-5'>
				Gestionar unidades
			</h1>
			<div className='flex justify-between items-center mb-5 relative'>
				<Button>Agregar unidad</Button>
				<Input
					placeholder='Buscar unidades...'
					className='w-[300px]'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<Search className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground size-4' />
			</div>

			<Table className='mx-auto'>
				<TableCaption className='text-sm text-muted-foreground mt-4'>
					Gestiona las unidades de tu cuerpo de bomberos
				</TableCaption>

				<TableHeader>
					<TableRow>
						<TableHead className='font-medium'>Unidad</TableHead>
						<TableHead className='font-medium'>Especialidad</TableHead>
						<TableHead className='font-medium'>Kilometraje</TableHead>
						<TableHead className='font-medium'>Acciones</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredData?.map(unit => (
						<TableRow
							key={unit.id}
							className='hover:bg-muted/50 transition-colors'
						>
							<TableCell className='font-medium'>{unit.name}</TableCell>
							<TableCell>{unit.specialty}</TableCell>
							<TableCell>{unit.km}</TableCell>
							<TableCell>
								<button className='group rounded-full p-2 hover:bg-muted'>
									<Edit className='text-muted-foreground size-4 group-hover:text-primary transition-colors' />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
