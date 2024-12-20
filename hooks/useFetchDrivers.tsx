import { useState, useEffect } from 'react'
import { DBdrivers } from '@/types/db-types'
import { getDrivers } from '@/lib/services/actions/read'

export function useFetchDrivers(unitName?: string) {
	const [drivers, setDrivers] = useState<DBdrivers[]>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchDrivers = async () => {
			setLoading(true)
			const fetchedDrivers = await getDrivers()
			if (!fetchedDrivers || !Array.isArray(fetchedDrivers)) return

			setDrivers(
				unitName
					? fetchedDrivers.filter(driver => driver.authorize === unitName)
					: fetchedDrivers
			)
			setLoading(false)
		}
		fetchDrivers()
	}, [unitName])

	return { drivers, loading }
}
