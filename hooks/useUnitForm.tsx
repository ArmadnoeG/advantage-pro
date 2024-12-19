import { useState, useEffect, useMemo } from 'react'
import { DBunit } from '@/types/db-types'
import { updateUnit } from '@/lib/db/actions/update'
import { useNotificationStore } from '@/stores/useNotificationStore'

interface Options {
	status: string
	event: string
	driver: string
}

export const useUnitForm = (unit: DBunit) => {
	const { setNotification } = useNotificationStore()
	const [formData, setFormData] = useState<Options>({
		status: unit.status,
		event: unit.event,
		driver: unit.driver || ''
	})
	const [isChanged, setIsChanged] = useState(false)

	useEffect(() => {
		setIsChanged(
			formData.status !== unit.status ||
				formData.event !== unit.event ||
				formData.driver !== (unit.driver || '')
		)
	}, [formData, unit])

	const canSubmit = useMemo(() => {
		if (!isChanged) return false
		if (formData.status === '0-9' && !formData.driver) return false
		return true
	}, [isChanged, formData])

	const isDriverAvailable = useMemo(() => {
		return (
			formData.status === '0-9' ||
			(formData.status !== '0-9' && formData.event !== '6-10')
		)
	}, [formData])

	const handleChange = (field: keyof typeof formData, value: string) => {
		setFormData(prev => ({
			...prev,
			[field]: value
		}))
	}

	const handleUpdateUnit = async () => {
		if (
			(formData.status === '0-9' || formData.status === 'F-S') &&
			formData.event === '6-10'
		) {
			setFormData({ ...formData, driver: '' })
		}
		if (!isChanged) {
			setNotification({
				message: 'No se detectaron cambios en la unidad.',
				success: false
			})
			return
		}
		const response = await updateUnit({
			...formData,
			unit
		})
		setNotification({
			message: response.message,
			success: response.success
		})
	}

	return {
		formData,
		isChanged,
		canSubmit,
		isDriverAvailable,
		handleChange,
		handleUpdateUnit
	}
}
