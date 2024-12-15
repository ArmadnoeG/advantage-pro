'use server'

import { db } from './supabase'
import { DBunit } from '@/types/db-types'

export async function getUnits() {
  const { data, error } = await db
  .from('cqbo-cars')
  .select('*')

  if (error) {
    console.log('Error fetching data: ', error)
  }

  return data as DBunit[]
  
}