'use server'

import { db } from './supabase'

export async function getData() {
  const { data, error } = await db
  .from('cqbo-cars')
  .select('*')

  if (error) {
    console.log('Error fetching data: ', error)
  }

  return data
  
}