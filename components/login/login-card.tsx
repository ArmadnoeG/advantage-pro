import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function LoginCard() {
	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>
					<h1 className='text-2xl font-bold font-[family-name:var(--font-geist-sans)] text-center'>
						Inicia Sesion
					</h1>
				</CardTitle>

				<CardDescription>
					<p className='text-sm font-[family-name:var(--font-roboto-flex)] text-center'>
						Inicia sesion para acceder a tu cuenta
					</p>
				</CardDescription>
			</CardHeader>

			<CardContent>
				<form
					action=''
					className='flex flex-col gap-4'
				>
					<div>
						<label
							htmlFor='user'
							className='text-foreground font-[family-name:var(--font-roboto-flex)] text-sm font-semibold '
						>
							Usuario:
						</label>

						<Input
							id='user'
							type='text'
							className='text-sm font-[family-name:var(--font-roboto-flex)] mt-2 '
						/>
					</div>

					<div>
						<label
							htmlFor='email'
							className='font-[family-name:var(--font-roboto-flex)] text-sm font-semibold '
						>
							Contraseña:
						</label>

						<Input
							id='email'
							type='email'
							className='text-sm font-[family-name:var(--font-roboto-flex)] mt-2 '
						/>
					</div>
				</form>
			</CardContent>

			<CardFooter className='flex flex-col gap-2'>
				<Button className='w-full'>
					<span className='font-[family-name:var(--font-roboto-flex)] text-sm font-semibold'>
						Iniciar Sesion
					</span>
				</Button>

				<p className='text-sm text-muted-foreground'>
					¿Olvidaste tus credenciales?
				</p>
			</CardFooter>
		</Card>
	)
}
