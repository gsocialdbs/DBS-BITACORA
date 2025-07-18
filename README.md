# DBS-BITACORA

## Sistema de Bienestar Social - Bitácora de Pacientes

### Descripción
Sistema para la gestión de pacientes, funcionarios lesionados, fallecidos e indemnizaciones del Departamento de Bienestar Social.

### Características
- ✅ Autenticación de usuarios
- ✅ Gestión de pacientes
- ✅ Módulo de funcionarios lesionados
- ✅ Módulo de fallecidos
- ✅ Módulo de indemnizaciones
- ✅ Persistencia en base de datos Supabase
- ✅ Interfaz responsive con Tailwind CSS

### Tecnologías
- React 18
- Supabase (PostgreSQL)
- Tailwind CSS
- Vercel (Deployment)

### Instalación
```bash
npm install
npm start
```

### Deployment
```bash
npm run build
```

### Credenciales Demo
- Usuario: admin / Contraseña: bienestar2024
- Usuario: medico / Contraseña: medico123  
- Usuario: enfermera / Contraseña: enfermera123

### Base de datos
El esquema de la base de datos está en `database_schema.sql`

### Configuración
Las variables de entorno necesarias:
- REACT_APP_SUPABASE_URL
- REACT_APP_SUPABASE_ANON_KEY