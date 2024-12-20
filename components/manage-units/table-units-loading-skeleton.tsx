import {
	Table,
	TableCaption,
	TableBody,
	TableRow,
	TableCell,
	TableHeader,
	TableHead
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'

export function TableUnitsLoadingSkeleton() {
	return (
		<Table>
			<TableCaption>Cargando unidades...</TableCaption>
			<TableHeader>
				<TableRow className='bg-accent'>
					<TableHead className='w-[100px] text-center'>Unidad</TableHead>
					<TableHead className='w-[130px] text-center'>Modelo</TableHead>
					<TableHead className='w-[60px] text-center'>Kilometraje</TableHead>
					<TableHead className='w-[100px] text-center'>Acciones</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{[...Array(5)].map((_, index) => (
					<TableRow
						key={index}
						className='animate-pulse'
					>
						<TableCell className='text-center'>
							<div className='h-4 bg-muted rounded w-3/4 mx-auto'></div>
						</TableCell>
						<TableCell className='text-center'>
							<div className='h-4 bg-muted rounded w-4/5 mx-auto'></div>
						</TableCell>
						<TableCell className='text-center'>
							<div className='h-4 bg-muted rounded w-1/2 mx-auto'></div>
						</TableCell>
						<TableCell className='text-center'>
							<Button
								className='group'
								size='icon'
								variant='ghost'
								disabled
							>
								<Edit className='text-muted-foreground size-4' />
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
