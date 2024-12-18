import type { Metadata } from 'next'
import { Geist, Roboto_Flex } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const robotoFlex = Roboto_Flex({
	variable: '--font-roboto-flex',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Advantage Pro',
	description: 'The most poweful system emergency dispatch'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${robotoFlex.variable} antialiased min-h-screen`}
			>
				{children}
			</body>
		</html>
	)
}
