import { create } from 'zustand'

type Notification = {
	message: string
	success: boolean
}

type NotificationStore = {
	notification: Notification | null
	setNotification: (notification: Notification) => void
  clearNotification: () => void
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  //state
  notification: null,

  // Actions
  setNotification: (notification: Notification) => {
    set({ notification });
    setTimeout(() => set({ notification: null }), 5000); // Auto-clear after 5 seconds
  },
  clearNotification: () => set({ notification: null }),
}));