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

export default async function PageManageUnits() {
	const { data } = await getUnits()

	return (
		<div className='flex flex-col mx-auto px-4 w-full'>
			<h1 className='text-3xl font-[family-name:var(--font-geist-sans)] font-bold m-5'>
				Gestionar unidades
			</h1>
			<div className='flex justify-end mr-5 mb-5 relative'>
				<Input
					placeholder='Buscar unidades...'
					className='w-[300px]'
				/>
				<Search className='absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground size-4' />
			</div>

			<Table className='max-w-5xl mx-auto'>
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
					{data?.map(unit => (
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
