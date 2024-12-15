import { useEffect, useState } from 'react'
import { DBunit } from '@/types/db-types'
import { db } from '@/lib/db/supabase'
import { getUnits } from '@/lib/db/actions'

export function useRealtimeUnits(initialUnits: DBunit[]) {
  const [units, setUnits] = useState<DBunit[]>(initialUnits)

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await getUnits()
      if (data) {
        
        setUnits(prevUnits => {
          const newUnits = data.filter(unit => !prevUnits.some(u => u.id === unit.id))
          return [...prevUnits, ...newUnits]
        })
      }
    }

    
    fetchData()

    
    const channel = db
      .channel('listen-cqbo-cars')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'cqbo-cars' },
        async payload => {
          const updatedUnit = payload.new as DBunit
          if (updatedUnit) {
            setUnits(prevUnits => {
              const unitExists = prevUnits.some(u => u.id === updatedUnit.id)
              if (unitExists) {
              return prevUnits.map(u => u.id === updatedUnit.id ? updatedUnit : u)
            }
            return [...prevUnits, updatedUnit];
          })
        }
      }
    )
    .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [])

  return units
}


