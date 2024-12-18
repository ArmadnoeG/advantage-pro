'use server'

import { db } from './supabase'
import { DBunit, DBdrivers } from '@/types/db-types'

export async function getUnits() {
  const { data, error } = await db
  .from('cqbo-cars')
  .select('*')

  if (error) {
    console.log('Error fetching data: ', error)
  }

  return data as DBunit[]
  
}

export async function getDrivers() {
  const {data, error } = await db
  .from('drivers')
  .select('*')

  if (error) {
    console.log('Error en la obtencion de conductores')
  }

  return data?.map((driver: DBdrivers) => ({
    id: driver.id,
    name: `${driver.company} - ${driver.name}`,
    authorize: driver.authorize,
}))
}
export async function updateUnit ({driver, status, event, unit}: {driver?: string, status?: string, event?: string, unit: DBunit}) {
  const { data, error } = await db
  .from('cqbo-cars')
  .update({
    driver: driver && driver,
    status: status && status,
    event: event && event
    })
  .eq('id', unit.id)

  if (error) {
    console.log('Error en la obtencion de conductores')
  }

  return data
}