import { supabase } from '../lib/supabase'

// ================== PACIENTES ==================
export const pacientesService = {
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('pacientes')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Error en getAll pacientes:', err)
      return []
    }
  },

  async create(paciente) {
    try {
      const { data, error } = await supabase
        .from('pacientes')
        .insert([paciente])
        .select()
        .single()
      
      if (error) throw error
      return data
    } catch (err) {
      console.error('Error en create paciente:', err)
      throw err
    }
  }
}

// ================== FUNCIONARIOS LESIONADOS ==================
export const funcionariosService = {
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('funcionarios_lesionados')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Error obteniendo funcionarios:', err)
      return []
    }
  },

  async create(funcionario) {
    try {
      console.log('Datos recibidos para funcionario:', funcionario);
      
      // MAPEO EXACTO basado en Supabase
      const funcionarioData = {
        funcionario_nombre: funcionario.nombre,
        funcionario_policial: funcionario.funcionario, 
        no_expediente: funcionario.expediente,
        miembro_amputado: funcionario.miembro,
        hospital_traslado: funcionario.hospital,
        total_gastos: funcionario.gastos ? parseFloat(funcionario.gastos) : 0
      };
      
      console.log('Datos para BD:', funcionarioData);
      
      const { data, error } = await supabase
        .from('funcionarios_lesionados')
        .insert([funcionarioData])
        .select()
        .single()
      
      if (error) throw error
      console.log('Funcionario creado:', data);
      return data
    } catch (err) {
      console.error('Error creando funcionario:', err)
      throw err
    }
  }
}

// ================== FALLECIDOS ==================
export const fallecidosService = {
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('fallecidos')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Error obteniendo fallecidos:', err)
      return []
    }
  },

  async create(fallecido) {
    try {
      console.log('Datos recibidos para fallecido:', fallecido);
      
      // MAPEO EXACTO basado en Supabase (SIN asignacion)
      const fallecidoData = {
        policia_fallecido: fallecido.nombre,
        no_expediente: fallecido.expediente,
        causa_muerte: fallecido.causa,
        fecha_muerte: fallecido.fecha,
        lugar_muerte: fallecido.lugar,
        beneficiarios: fallecido.beneficiarios
      };
      
      console.log('Datos para BD:', fallecidoData);
      
      const { data, error } = await supabase
        .from('fallecidos')
        .insert([fallecidoData])
        .select()
        .single()
      
      if (error) throw error
      console.log('Fallecido creado:', data);
      return data
    } catch (err) {
      console.error('Error creando fallecido:', err)
      throw err
    }
  }
}

// ================== INDEMNIZACIONES ==================
export const indemnizacionesService = {
  async getAll() {
    try {
      const { data, error } = await supabase
        .from('indemnizaciones')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Error obteniendo indemnizaciones:', err)
      return []
    }
  },

  async create(indemnizacion) {
    try {
      console.log('Datos recibidos para indemnización:', indemnizacion);
      
      // MAPEO EXACTO basado en Supabase
      const indemnizacionData = {
        funcionario_policial: indemnizacion.funcionario,
        no_expediente: indemnizacion.expediente,
        estado_expediente: indemnizacion.estado,
        suma_pagar: indemnizacion.suma ? parseFloat(indemnizacion.suma) : 0,
        causa_indemnizacion: indemnizacion.causa,
        fecha_solicitud: indemnizacion.fecha,
        observaciones: indemnizacion.observaciones
      };
      
      console.log('Datos para BD:', indemnizacionData);
      
      const { data, error } = await supabase
        .from('indemnizaciones')
        .insert([indemnizacionData])
        .select()
        .single()
      
      if (error) throw error
      console.log('Indemnización creada:', data);
      return data
    } catch (err) {
      console.error('Error creando indemnización:', err)
      throw err
    }
  }
}
