import { User, Settings, LogOut } from 'lucide-react'

export const MENU_ITEMS = [
	{
		icon: User,
		label: 'Perfil'
	},
	{
		icon: Settings,
		label: 'Configuraciones',
		separator: true
	},
	{
		icon: LogOut,
		label: 'Cerrar sesión'
	}
]