import { DBunit } from "@/types/db-types"

export const colorStatus = (status: string) => {
	switch (status) {
		case '0-8':
			return 'bg-red-500'
		case '0-9':
			return 'bg-green-500'
		case 'no-driver':
			return 'bg-yellow-500'
		case 'dispatched':
			return 'bg-blue-500'
		default:
			return 'bg-gray-500'
	}
}

export const filterUnits = (data: DBunit[], unitType: string) => {
	return data.filter(data => data.type === unitType)
}