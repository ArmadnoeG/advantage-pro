import { DBunit } from "@/types/db-types"

export const colorStatus = (status?: string) => {
	switch (status) {
			case '0-8':
				return 'bg-yellow-500'
			case '0-9':
				return 'bg-green-500'
			case 'f-s':
				return 'bg-red-500'
			case 'dispatched':
				return 'bg-blue-500'
			default:
				return 'bg-gray-500'
		}
	}

export const filterUnits = (data: DBunit[], unitType: string) => {
	return data.filter(data => data.type === unitType)
}

export const UNITS_TYPES = ['B', 'BR', 'R', 'BT', 'Z', 'BM', 'H', 'BX']

export const UNITS_STATUS = [
	{ label: '0-9', value: '0-9' },
	{ label: '0-8', value: '0-8' },
	{ label: 'F-S', value: 'f-s' }
]
export const UNITS_EVENTS = [
	{ label: '6-13', value: '6-13' },
	{ label: '6-14', value: '6-14' },
	{ label: '6-10', value: '6-10' }
]