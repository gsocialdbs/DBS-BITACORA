import { supabase } from '../lib/supabase'

// ================== PACIENTES ==================
export const pacientesService = {
  // Obtener todos los pacientes
  async getAll() {
    const { data, error } = await supabase
      .from('pacientes')
      .select(`
        *,
        visitas (*)
      `)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error obteniendo pacientes:', error)
      throw error
    }
    return data
  },

  // Crear nuevo paciente
  async create(paciente) {
    const { data, error } = await supabase
      .from('pacientes')
      .insert([paciente])
      .select()
      .single()
    
    if (error) {
      console.error('Error creando paciente:', error)
      throw error
    }
    return data
  },

  // Actualizar paciente
  async update(id, updates) {
    const { data, error } = await supabase
      .from('pacientes')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error actualizando paciente:', error)
      throw error
    }
    return data
  },

  // Eliminar paciente
  async delete(id) {
    const { error } = await supabase
      .from('pacientes')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error eliminando paciente:', error)
      throw error
    }
  }
}

// ================== VISITAS ==================
export const visitasService = {
  // Crear nueva visita
  async create(visita) {
    const { data, error } = await supabase
      .from('visitas')
      .insert([visita])
      .select()
      .single()
    
    if (error) {
      console.error('Error creando visita:', error)
      throw error
    }
    return data
  },

  // Obtener visitas por paciente
  async getByPaciente(pacienteId) {
    const { data, error } = await supabase
      .from('visitas')
      .select('*')
      .eq('paciente_id', pacienteId)
      .order('fecha_visita', { ascending: false })
    
    if (error) {
      console.error('Error obteniendo visitas:', error)
      throw error
    }
    return data
  },

  // Eliminar visita
  async delete(id) {
    const { error } = await supabase
      .from('visitas')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error eliminando visita:', error)
      throw error
    }
  }
}

// ================== FUNCIONARIOS LESIONADOS ==================
export const funcionariosService = {
  // Obtener todos los funcionarios lesionados
  async getAll() {
    const { data, error } = await supabase
      .from('funcionarios_lesionados')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error obteniendo funcionarios lesionados:', error)
      throw error
    }
    return data
  },

  // Crear nuevo funcionario lesionado
  async create(funcionario) {
    const { data, error } = await supabase
      .from('funcionarios_lesionados')
      .insert([funcionario])
      .select()
      .single()
    
    if (error) {
      console.error('Error creando funcionario lesionado:', error)
      throw error
    }
    return data
  },

  // Actualizar funcionario lesionado
  async update(id, updates) {
    const { data, error } = await supabase
      .from('funcionarios_lesionados')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error actualizando funcionario lesionado:', error)
      throw error
    }
    return data
  },

  // Eliminar funcionario lesionado
  async delete(id) {
    const { error } = await supabase
      .from('funcionarios_lesionados')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error eliminando funcionario lesionado:', error)
      throw error
    }
  }
}

// ================== FALLECIDOS ==================
export const fallecidosService = {
  // Obtener todos los fallecidos
  async getAll() {
    const { data, error } = await supabase
      .from('fallecidos')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error obteniendo fallecidos:', error)
      throw error
    }
    return data
  },

  // Crear nuevo fallecido
  async create(fallecido) {
    const { data, error } = await supabase
      .from('fallecidos')
      .insert([fallecido])
      .select()
      .single()
    
    if (error) {
      console.error('Error creando fallecido:', error)
      throw error
    }
    return data
  },

  // Actualizar fallecido
  async update(id, updates) {
    const { data, error } = await supabase
      .from('fallecidos')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error actualizando fallecido:', error)
      throw error
    }
    return data
  },

  // Eliminar fallecido
  async delete(id) {
    const { error } = await supabase
      .from('fallecidos')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error eliminando fallecido:', error)
      throw error
    }
  }
}

// ================== INDEMNIZACIONES ==================
export const indemnizacionesService = {
  // Obtener todas las indemnizaciones
  async getAll() {
    const { data, error } = await supabase
      .from('indemnizaciones')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error obteniendo indemnizaciones:', error)
      throw error
    }
    return data
  },

  // Crear nueva indemnización
  async create(indemnizacion) {
    const { data, error } = await supabase
      .from('indemnizaciones')
      .insert([indemnizacion])
      .select()
      .single()
    
    if (error) {
      console.error('Error creando indemnización:', error)
      throw error
    }
    return data
  },

  // Actualizar indemnización
  async update(id, updates) {
    const { data, error } = await supabase
      .from('indemnizaciones')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) {
      console.error('Error actualizando indemnización:', error)
      throw error
    }
    return data
  },

  // Eliminar indemnización
  async delete(id) {
    const { error } = await supabase
      .from('indemnizaciones')
      .delete()
      .eq('id', id)
    
    if (error) {
      console.error('Error eliminando indemnización:', error)
      throw error
    }
  }
}