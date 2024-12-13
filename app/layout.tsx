import type { Metadata } from 'next'
import { Geist, Roboto } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap'
})

const robotoMono = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Advantage Pro',
	description: 'The most advanced dispatch system for firefighters and EMS'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.className} ${robotoMono.className} antialiased text-white bg-zinc-950`}
			>
				{children}
			</body>
		</html>
	)
}
