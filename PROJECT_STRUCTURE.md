# 📋 Estructura del Proyecto - HospitalIS Pro

## 🏗️ Arquitectura del Proyecto

Este proyecto está organizado siguiendo una arquitectura modular basada en features (características), que separa claramente las funcionalidades por dominios.

```
proyecto-his/
├── src/
│   ├── features/                    # Módulos por característica
│   │   ├── auth/                    # Autenticación
│   │   │   ├── components/          # Login, Register
│   │   │   └── data/                # usuarios.js
│   │   │
│   │   ├── employees/               # Dashboard de Empleados
│   │   │   ├── components/          # WelcomeBanner, HealthAlerts, Cards
│   │   │   ├── data/                # Datos específicos de empleados
│   │   │   └── pages/               # Home, Citas, Inventario
│   │   │
│   │   ├── clients/                 # Dashboard de Clientes/Pacientes
│   │   │   ├── components/          # ClientWelcomeBanner, NextAppointments, etc.
│   │   │   ├── data/                # Datos específicos de clientes
│   │   │   └── pages/               # ClientDashboard, MisCitas, MiHistorial
│   │   │
│   │   └── inventory/               # Sistema de Inventario
│   │       ├── components/          # StatsCard, ProductModal
│   │       └── data/                # productos, categorias, proveedores, movimientos
│   │
│   ├── shared/                      # Componentes y recursos compartidos
│   │   ├── components/              # Navbar, Sidebar, ClientNavbar, ClientSidebar
│   │   └── layouts/                 # EmployeeLayout, ClientLayout
│   │
│   ├── components/                  # Componentes legacy (pacientes)
│   ├── pages/                       # Páginas legacy (Pacientes)
│   ├── data/                        # Datos globales
│   ├── utils/                       # Utilidades
│   ├── App.jsx                      # Componente principal con enrutamiento
│   └── main.jsx                     # Punto de entrada
│
├── public/
├── package.json
└── README.md
```

## 👥 Sistema de Roles

El sistema soporta dos tipos de usuarios:

### 🏥 **Empleados** (rol: "empleado")
- Dashboard con estadísticas del hospital
- Gestión de citas
- **Gestión completa de inventario**
- Gestión de pacientes
- Acceso completo al sistema

### 🧑‍⚕️ **Clientes/Pacientes** (rol: "cliente")
- Dashboard personalizado
- Visualización de citas
- Historial médico
- Medicamentos activos
- Resultados de laboratorio
- Interfaz simplificada y amigable

## 📦 Características Principales

### 1. **Sistema de Autenticación**
- Login con documento/usuario y contraseña
- Registro de nuevos usuarios
- Diferenciación automática por roles
- Sesión persistente con localStorage

### 2. **Dashboard de Empleados**
- **Panel de estadísticas**: Próximas citas, resultados, medicamentos, estado
- **Gestión de Citas**: Ver, crear, confirmar, cancelar citas
- **Gestión de Inventario** ✨ (NUEVO):
  - Vista de lista y cuadrícula
  - Filtros por categoría y búsqueda
  - CRUD completo de productos
  - Alertas de stock bajo
  - Estadísticas de inventario
  - Gestión de proveedores
  - Control de vencimientos
- **Gestión de Pacientes**: Perfiles completos, historial médico

### 3. **Dashboard de Clientes** ✨ (NUEVO)
- **Bienvenida personalizada** con información del paciente
- **Próximas Citas**: Visualización y gestión de citas médicas
- **Resultados Recientes**: Acceso a laboratorios e imágenes
- **Medicamentos Activos**: Lista de medicación con horarios
- **Contacto Rápido**: Línea de atención y teleconsultas
- **Tips de Salud**: Recomendaciones personalizadas

### 4. **Sistema de Inventario** ✨ (NUEVO)
#### Datos JSON Completos:
- **productos.js**: 15 productos con información completa
- **categorias.js**: Medicamentos, Equipos, Insumos con subcategorías
- **proveedores.js**: 6 proveedores con información de contacto
- **movimientos.js**: Historial de entradas/salidas

#### Funcionalidades:
- ✅ Gestión completa de productos (CRUD)
- ✅ Búsqueda y filtros avanzados
- ✅ Vista de lista y cuadrícula
- ✅ Alertas de stock bajo
- ✅ Estadísticas en tiempo real
- ✅ Gestión de categorías y proveedores
- ✅ Control de vencimientos
- ✅ Exportación de datos

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 👤 Usuarios de Prueba

### Empleados:
```
Usuario: admin | Contraseña: admin123 | Documento: 10203040
Usuario: maria.gomez | Contraseña: pass123 | Documento: 100200300
Usuario: juan.perez | Contraseña: juan2024 | Documento: 200300400
```

### Clientes/Pacientes:
```
Usuario: carlos.lopez | Contraseña: carlos123 | Documento: 300400500
Usuario: ana.rodriguez | Contraseña: ana2024 | Documento: 400500600
Usuario: luis.martinez | Contraseña: luis456 | Documento: 500600700
```

## 🎨 Tecnologías Utilizadas

- **React 19** - Framework principal
- **React Router DOM 7** - Enrutamiento
- **Tailwind CSS 4** - Estilos
- **Lucide React** - Iconos
- **Vite 7** - Build tool
- **JSON** - Base de datos simulada

## 📝 Notas de Desarrollo

- Proyecto completamente funcional con datos JSON
- UI moderna y profesional con Tailwind CSS
- Componentes reutilizables y modulares
- Sistema de roles implementado
- Navegación intuitiva según el tipo de usuario
- Responsive design
- Animaciones y transiciones suaves

## 🔄 Próximas Mejoras Sugeridas

1. Conectar con backend real (API REST)
2. Implementar autenticación JWT
3. Agregar gestión de roles y permisos más granular
4. Sistema de notificaciones en tiempo real
5. Reportes y análisis de datos
6. Historial de movimientos de inventario
7. Sistema de alertas automatizadas
8. Integración con sistemas de pago

## 📱 Navegación por Rol

### Empleados
```
/dashboard     → Home con estadísticas
/citas         → Gestión de citas
/inventario    → Gestión de inventario ✨
/pacientes     → Gestión de pacientes
```

### Clientes
```
/dashboard     → Dashboard personalizado ✨
/citas         → Mis citas ✨
/historial     → Mi historial médico ✨
```

---

**Desarrollado para sistema de gestión hospitalaria completo con enfoque en UX y funcionalidad profesional.**
