'use client'
import { useNotificationStore } from '@/stores/useNotificationStore'

export function Notification() {
	const { notification } = useNotificationStore()
	return (
		<>
			{notification?.success && (
				<div className='flex items-center gap-2 rounded-md bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500 fixed w-[200px] h-[50px] bottom-10 left-10 z-[9999] animate-slide-in-bottom '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
					<span>{notification.message}</span>
				</div>
			)}
		</>
	)
}
