# 🚀 Guía de Inicio Rápido - HospitalIS Pro

## 📋 Requisitos Previos
- Node.js 16+ instalado
- npm o yarn

## ⚡ Instalación y Ejecución

### 1. Instalar Dependencias
```bash
cd proyecto-his
npm install
```

### 2. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

El proyecto estará disponible en: `http://localhost:5173`

## 🔑 Credenciales de Acceso

### Para probar el Dashboard de EMPLEADOS:
```
Usuario: admin
Contraseña: admin123
Documento: 10203040

O también:
Usuario: maria.gomez
Contraseña: pass123
```

### Para probar el Dashboard de CLIENTES:
```
Usuario: carlos.lopez
Contraseña: carlos123
Documento: 300400500

O también:
Usuario: ana.rodriguez
Contraseña: ana2024
```

## 🎯 Funcionalidades para Probar

### Como EMPLEADO:

1. **Dashboard Principal** (`/dashboard`)
   - Ver estadísticas generales
   - Alertas de salud
   - Métricas del hospital

2. **Gestión de Citas** (`/citas`)
   - Visualizar citas del día
   - Filtrar por estado (Confirmada, Pendiente, Completada)
   - Ver detalles de pacientes

3. **Sistema de Inventario** (`/inventario`) ⭐ NUEVO
   - Ver productos en lista o cuadrícula
   - Buscar productos por nombre o código
   - Filtrar por categoría
   - Agregar nuevos productos
   - Editar productos existentes
   - Ver alertas de stock bajo
   - Ver estadísticas de inventario

4. **Gestión de Pacientes** (`/pacientes`)
   - Ver lista de pacientes
   - Acceder a historiales médicos completos

### Como CLIENTE/PACIENTE:

1. **Dashboard Personal** (`/dashboard`)
   - Ver próximas citas
   - Ver resultados recientes
   - Ver medicamentos activos
   - Acceso a contacto rápido

2. **Mis Citas** (`/citas`)
   - Ver todas mis citas
   - Solicitar nueva cita
   - Reagendar citas
   - Ver detalles de consultas

3. **Mi Historial** (`/historial`)
   - Ver historial médico completo
   - Descargar resultados de laboratorio
   - Ver diagnósticos anteriores

## 📦 Datos de Inventario Incluidos

El sistema incluye:
- ✅ **15 productos** de ejemplo (medicamentos, equipos, insumos)
- ✅ **3 categorías** principales con subcategorías
- ✅ **6 proveedores** configurados
- ✅ Control de stock con alertas automáticas
- ✅ Gestión de vencimientos

### Productos de Ejemplo:
- **Medicamentos**: Paracetamol, Ibuprofeno, Amoxicilina, Losartán, Omeprazol, etc.
- **Equipos**: Termómetro Digital, Tensiómetro, Oxímetro de Pulso
- **Insumos**: Jeringas, Guantes, Mascarillas, Alcohol Antiséptico, Vendajes

## 🎨 Navegación por Rol

### Empleados - Barra Superior:
- Dashboard
- Pacientes
- Citas
- Inventario

### Clientes - Barra Superior:
- Dashboard
- Mis Citas
- Mi Historial

## 💡 Tips de Uso

1. **Cerrar Sesión**: Click en el avatar de usuario (esquina superior derecha) → Cerrar Sesión

2. **Notificaciones**: Click en el icono de campana para ver notificaciones

3. **Búsqueda**: Usa la barra de búsqueda en el navbar para buscar pacientes (empleados) o información (clientes)

4. **Inventario - Vista de Cuadrícula**: Cambia entre vista de lista y cuadrícula para mejor visualización

5. **Filtros**: Usa los filtros disponibles en cada sección para encontrar información rápidamente

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

## 📁 Estructura de Archivos Importantes

```
src/
├── App.jsx                          # Punto de entrada con lógica de roles
├── features/
│   ├── auth/
│   │   ├── components/Login.jsx     # Pantalla de login
│   │   └── data/usuarios.js         # Lista de usuarios
│   ├── employees/
│   │   └── pages/
│   │       ├── Home.jsx             # Dashboard empleados
│   │       ├── Citas.jsx            # Gestión de citas
│   │       └── Inventario.jsx       # Sistema inventario ⭐
│   ├── clients/
│   │   └── pages/
│   │       ├── ClientDashboard.jsx  # Dashboard clientes ⭐
│   │       ├── MisCitas.jsx         # Mis citas ⭐
│   │       └── MiHistorial.jsx      # Mi historial ⭐
│   └── inventory/
│       └── data/
│           ├── productos.js         # 15 productos
│           ├── categorias.js        # Categorías
│           └── proveedores.js       # Proveedores
```

## 🐛 Solución de Problemas

### El servidor no inicia:
```bash
# Limpia node_modules y reinstala
rm -rf node_modules
npm install
npm run dev
```

### Los estilos no se ven bien:
- Verifica que Tailwind CSS esté configurado correctamente
- Limpia el cache del navegador (Ctrl + Shift + R)

### No puedo iniciar sesión:
- Verifica que estés usando las credenciales correctas
- Revisa la consola del navegador para errores

## 📞 Soporte

Para más información, consulta:
- [README.md](./README.md) - Documentación general
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Estructura detallada del proyecto

---

¡Disfruta explorando HospitalIS Pro! 🏥✨
