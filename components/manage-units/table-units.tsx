import {
	Table,
	TableCaption,
	TableBody,
	TableRow,
	TableCell,
	TableHeader,
	TableHead
} from '@/components/ui/table'
import { getUnits } from '@/lib/db/actions/read'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'

// dummy

export async function TableUnits({
	query,
	page
}: {
	query?: string
	page?: number
}) {
	const { data, count } = await getUnits(query, true, page)

	return (
		<Table>
			<TableCaption>
				{query
					? `Buscando ${query}`
					: `Gestiona las ${count} unidades de tu cuerpo de bomberos.`}
			</TableCaption>
			<TableHeader>
				<TableRow className='bg-accent'>
					<TableHead className='w-[100px] text-center'>Unidad</TableHead>
					<TableHead className='w-[130px] text-center'>Modelo</TableHead>
					<TableHead className='w-[60px] text-center'>Kilometraje</TableHead>
					<TableHead className='w-[100px] text-center'>Acciones</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map(unit => (
					<TableRow key={unit.id}>
						<TableCell className='text-center '>{unit.name}</TableCell>
						<TableCell className='text-center '>{unit.model}</TableCell>
						<TableCell className='text-center '>{unit.km}</TableCell>
						<TableCell className='text-center'>
							<Button
								className='group'
								size='icon'
								variant='ghost'
							>
								<Edit className='text-foreground size-4 group-hover:text-primary' />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
