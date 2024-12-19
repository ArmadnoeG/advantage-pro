'use server'

import { DBunit } from '@/types/db-types'
import { db } from '@/lib/db/supabase'

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
    return {
      message: `Hubo un error al actualizar la unidad el error proviene del servidor. pongase en contacto con un supervisor de inmediato. ${error.code}`,
      success: false
    }
  }

  return {
    message: 'Unidad actualizada exitosamente',
    success: true,
    data 
  } 
}