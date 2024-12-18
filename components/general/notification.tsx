'use client'
import { useNotificationStore } from '@/stores/useNotificationStore'
import { CheckCircle2, XCircleIcon } from 'lucide-react'

export function Notification() {
	const { notification } = useNotificationStore()
	return (
		<>
			{notification && (
				<div
					className={`flex items-center border-[1px] gap-2 rounded-md  px-4 py-2 text-sm font-semibold fixed max-w-[550px] max-h-[60px] bottom-10 left-10 z-[999] ${notification.success ? 'bg-green-500/30 border-green-400' : 'bg-red-500/30 border-red-400'} animate-slide-in-bottom`}
				>
					{notification.success ?
						<CheckCircle2 className='text-green-500 size-6' />
					:	<XCircleIcon className='text-red-500 size-6' />}

					<p
						className={`text-sm font-semibold ${notification.success ? 'text-green-500' : 'text-red-500'}`}
					>
						{notification.message}
					</p>
				</div>
			)}
		</>
	)
}
