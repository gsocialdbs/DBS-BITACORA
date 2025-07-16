import { supabase, handleSupabaseError } from '../lib/supabase'

// Función genérica para insertar en cualquier tabla
export const insertRecord = async (tableName, recordData) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert(recordData)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    return handleSupabaseError(error, `Insertar en ${tableName}`)
  }
}

// Función genérica para actualizar registros
export const updateRecord = async (tableName, recordId, updateData) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .update(updateData)
      .eq('id', recordId)
      .select()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    return handleSupabaseError(error, `Actualizar en ${tableName}`)
  }
}

// Funciones específicas para cada módulo
export const insertPaciente = (pacienteData) => 
  insertRecord('pacientes', pacienteData)

export const insertFuncionarioLesionado = (funcionarioData) => 
  insertRecord('funcionarios_lesionados', funcionarioData)

export const insertFallecido = (fallecidoData) => 
  insertRecord('fallecidos', fallecidoData)

export const insertIndemnizacion = (indemnizacionData) => 
  insertRecord('indemnizaciones', indemnizacionData)

export const insertVisita = (visitaData) => 
  insertRecord('visitas', visitaData)
