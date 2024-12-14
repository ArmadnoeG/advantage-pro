import {
	CircleAlert,
	Settings,
	CirclePlus,
	OctagonMinus,
	Wrench,
	CheckCircle2Icon
} from 'lucide-react'

export const HANDLE_UNITS = [
	{
		icon: CirclePlus,
		label: 'Agregar unidad',
		href: '#'
	},
	{
		icon: OctagonMinus,
		label: 'Quitar unidad',
		href: '#'
	},
	{
		icon: Wrench,
		label: 'Configurar unidad',
		href: '#'
	}
]
export const UNITS = [
	{
		icon: CheckCircle2Icon,
		label: 'Disponibilidad',
		href: 'dashboard/units'
	}
]