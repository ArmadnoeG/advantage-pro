'use server'

import { DBdrivers, DBunit } from '@/types/db-types'
import { db } from '@/lib/db/supabase'
const PAGE_SIZE_MANAGE_UNITS =  5

export async function fetchPagesOfUnits(query?: string) {
  const queryBuilder = db
  .from('cqbo-cars')
  .select('*', { count: 'exact' })

  if (query) {
  queryBuilder
  .or(`name.ilike.%${query}%,model.ilike.%${query}%`)
  }

  const { error, count } = await queryBuilder
  const totalPages = Math.ceil((count || 0 ) / PAGE_SIZE_MANAGE_UNITS)

  if (error) {
    return {      
      message: `Hubo un error al obtener las unidades el error proviene del servidor. pongase en contacto con un supervisor de inmediato. ${error.code}`,
      error: error,
      success: false

    }
  }

  return  {totalPages}  

}

export async function getUnits(query?: string, short?: boolean, page?: number) {
  if (!page) page = 1
  const start = (page - 1) * PAGE_SIZE_MANAGE_UNITS
  const end = start + PAGE_SIZE_MANAGE_UNITS - 1
  
  const queryBuilder = db.from('cqbo-cars').select('*', {count: 'exact'})


if (query) {
    queryBuilder
      .or(`name.ilike.%${query}%,model.ilike.%${query}%`)
      
  }

  if (short) queryBuilder.range(start, end)
  
  const { data, error, count } = await queryBuilder

  if (error) {
    return {      
      message: `Hubo un error al obtener las unidades el error proviene del servidor. pongase en contacto con un supervisor de inmediato. ${error.code}`,
      error: error,
      success: false

    }
  }



  return {
    message: 'Unidades obtenidas exitosamente',
    success: true,
    data: data as DBunit[],
    count: count || 0
  }
  
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