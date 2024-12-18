'use client'
import { XCircle } from 'lucide-react'
import Link from 'next/link'

export default function Error() {
	return (
		<section className='h-screen flex justify-center items-center'>
			<div className='flex flex-col gap-2 items-center justify-center w-[650px] p-4 bg-accent rounded-md font-[family-name:var(--font-roboto-flex)]'>
				<XCircle className='text-red-500 size-20 mb-4 stroke-[1px]' />
				<h1 className='font-[family-name:var(--font-geist-sans)] text-xl text-foreground font-bold'>
					ERROR
				</h1>
				<h2 className='font-semibold text-muted-foreground'>
					Ha ocurrido un error al cargar las unidades
				</h2>
				<p className=' text-foreground text-center pb-3'>
					Es posible que el servidor no este disponible o que exista algun
					problema con la conexíon a internet.
				</p>
				<p className='text-center text-red-500 '>
					Contactese de inmediato con soporte y comienze con la lista de
					comprobaciones.
				</p>
				<Link
					className='text-center text-muted-foreground hover:underline'
					href='/'
				>
					Lista de comprobaciones.
				</Link>
			</div>
		</section>
	)
}
