import {
	Sliders,
	ActivitySquare,
	Map
	
} from 'lucide-react'

export const OPTIONS_SIDEBAR = [
	{
		icon: ActivitySquare,
		label: 'Estado unidades',
		href: './units'
	},
	{
		icon: Sliders,
		label: 'Gestionar unidades',
		href: './manage-units'
	},
	{
		icon: Map,
		label: 'Mapa',
		href: './map'
	}
]