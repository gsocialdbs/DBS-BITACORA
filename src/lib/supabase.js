import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Función de logging personalizada
const logSupabaseEvent = (eventType, details) => {
  const timestamp = new Date().toISOString()
  console.log(JSON.stringify({
    timestamp,
    eventType,
    service: 'supabase',
    details
  }))
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true
  },
  // Interceptores para logging
  db: {
    onError: (error) => {
      logSupabaseEvent('database_error', {
        message: error.message,
        code: error.code,
        details: error
      })
    }
  }
})

// Función de manejo de errores con logging
export const handleSupabaseError = (error, context = 'Operación') => {
  logSupabaseEvent('error', {
    context,
    errorMessage: error.message,
    errorCode: error.code
  })

  return {
    success: false,
    error: error.message || 'Error desconocido',
    details: error
  }
}
