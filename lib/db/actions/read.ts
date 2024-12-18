'use server'
import { DBdrivers, DBunit } from '@/types/db-types'
import { db } from '@/lib/db/supabase'


export async function getUnits() {
  const { data, error } = await db
  .from('cqbo-cars')
  .select('*')

  if (error) {
    return {
      message: `Hubo un error al obtener las unidades el error proviene del servidor. pongase en contacto con un supervisor de inmediato. ${error.code}`,
      error: error,
      success: false

    }
  }

  return data as DBunit[] 
  
}



export async function getDrivers() {
  const {data, error } = await db
  .from('drivers')
  .select('*')

  if (error) {
    return {
      message: `Hubo un error al obtener los conductores el error proviene del servidor. pongase en contacto con un supervisor de inmediato. ${error.code}`,
      error: error,
      succcess: false
    }
  }

  return data?.map((driver: DBdrivers) => ({
    id: driver.id,
    name: `${driver.company} - ${driver.name}`,
    authorize: driver.authorize,
}))
}