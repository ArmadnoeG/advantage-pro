import { getUnits } from '@/lib/db/actions'
import { useEffect, useState } from 'react'
import { DBunit } from '@/types/db-types'
import { db } from '@/lib/db/supabase'


export function useRealtimeUnits() {
  const [units, setUnits] = useState<DBunit[]>([])
  useEffect(() => {
    const fetchData = async () => {
    const data = await getUnits()
    if(data) setUnits(data)
    }
    fetchData()
    
    const channel = db
    .channel('listen-cqbo-cars')
    .on('postgres_changes', 
      {
        event: '*',
        schema: 'public',
        table: 'cqbo-cars'
      },
      async () => {
        await fetchData()
      }
    )
    .subscribe()   
      
    return () => {
      channel.unsubscribe()
    }

  }, [])

  return units
}

