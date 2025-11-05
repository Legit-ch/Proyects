# NativeScript Angular App - Proyecto Final

Este proyecto es una aplicación móvil desarrollada con NativeScript y Angular que cumple con todos los requisitos del módulo del curso.

## 🎯 Requisitos Cumplidos

### ✅ 1. Template Base - Drawer Navigation
- **Implementado**: Proyecto basado en el template `template-drawer-navigation-ng`
- **Evidencia**: Estructura modularizada con side drawer implementado en `app.component.html`
- **Archivos**: 
  - `src/app/app.component.ts` - Componente principal con drawer
  - `src/app/app-routing.module.ts` - Enrutamiento modularizado

### ✅ 2. Dos Componentes Nuevos
- **ProductCardComponent**: Componente reutilizable para mostrar tarjetas de productos
  - Ubicación: `src/app/products/components/product-card/`
  - Funcionalidad: Muestra información del producto con eventos de tap
- **ProductDetailComponent**: Componente para vista detallada de productos
  - Ubicación: `src/app/products/components/product-detail/`
  - Funcionalidad: Vista completa con selección de cantidad y acciones

### ✅ 3. Nuevo Módulo de Features
- **ProductsModule**: Módulo completo para gestión de productos
- **Ubicación**: `src/app/products/products.module.ts`
- **Funcionalidad**: 
  - Lista de productos con filtros por categoría
  - Vista detallada de productos
  - Componentes especializados

### ✅ 4. Submódulo de Ruteo
- **ProductsRoutingModule**: Ruteo específico para el módulo Products
- **Ubicación**: `src/app/products/products-routing.module.ts`
- **Rutas implementadas**:
  - `/products` - Lista de productos
  - `/products/detail/:id` - Detalle de producto

### ✅ 5. Integración con Side Drawer
- **Navegación actualizada** en `app.component.html`
- **Nuevas opciones añadidas**:
  - Home
  - Featured
  - Search
  - **Products** (nuevo módulo)
  - Settings

### ✅ 6. Servicio Angular Global
- **DataService**: Servicio con inyección de dependencias
- **Ubicación**: `src/app/services/data.service.ts`
- **Funcionalidades**:
  - Gestión de productos con Observable patterns
  - Gestión de usuarios
  - Búsqueda y filtrado
  - Datos mock inicializados
- **Inyección**: Configurado como `providedIn: 'root'` y usado en múltiples componentes

### ✅ 7. Vista con ngFor
- **Implementaciones múltiples**:
  - `home.component.html` - Lista de productos destacados
  - `products.component.html` - Lista completa de productos con filtros
  - Ambos usan `*ngFor` para iteración de datos

### ✅ 8. Estilos CSS Específicos por Plataforma
- **Android**: `home.component.android.css`
  - Elevación (elevation) para Material Design
  - Colores verdes característicos de Android
  - Bordes redondeados menores
- **iOS**: `home.component.ios.css`
  - Bordes y sombras sutiles
  - Colores azules característicos de iOS
  - Bordes más redondeados estilo iOS

### ✅ 9. Íconos Personalizados en App_Resources
- **Android**: Ícono adaptativo personalizado
  - `App_Resources/Android/src/main/res/drawable/ic_launcher_foreground.xml`
  - `App_Resources/Android/src/main/res/drawable/ic_launcher_background.xml`
  - Diseño personalizado con colores del tema de la app
- **iOS**: Configuración en Info.plist preparada para íconos personalizados

### ✅ 10. Código Específico para Android
- **Implementaciones**:
  - `home.component.ts` - Líneas 27-33: Mensaje específico para Android
  - `product-detail.component.ts` - Líneas 35-38: Mensaje de envío gratis para Android
- **Uso de**: `isAndroid` de `@nativescript/core` para detección de plataforma

## 📱 Estructura del Proyecto

```
src/
├── app/
│   ├── home/                 # Módulo Home
│   ├── featured/             # Módulo Featured
│   ├── search/               # Módulo Search  
│   ├── settings/             # Módulo Settings
│   ├── products/             # 🆕 Módulo Products (principal)
│   │   ├── components/
│   │   │   ├── product-card/     # 🆕 Componente 1
│   │   │   └── product-detail/   # 🆕 Componente 2
│   │   ├── products.component.*
│   │   ├── products.module.ts    # 🆕 Módulo de features
│   │   └── products-routing.module.ts # 🆕 Submódulo de ruteo
│   ├── services/
│   │   └── data.service.ts       # 🆕 Servicio global
│   ├── app.component.*           # Side drawer principal
│   ├── app.module.ts
│   └── app-routing.module.ts     # Ruteo modularizado
├── assets/
│   └── images/                   # Recursos de imágenes
└── App_Resources/
    ├── Android/                  # 🆕 Íconos Android personalizados
    └── iOS/                      # 🆕 Configuración iOS
```

## 🚀 Características Principales

- **Navegación por drawer** con módulos especializados
- **Gestión de productos** completa con filtros
- **Vista detallada** con selección de cantidad
- **Estilos adaptativos** según plataforma (Android/iOS)
- **Servicio de datos** reactivo con RxJS
- **Componentes reutilizables** y modulares
- **Inyección de dependencias** implementada correctamente

## 🛠️ Tecnologías Utilizadas

- **NativeScript 8.5+**
- **Angular 15.2+**
- **TypeScript 4.9+**
- **RxJS 7.8+** para programación reactiva
- **NativeScript UI Components** (SideDrawer)

## 📋 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Build para producción
npm run build.android
npm run build.ios
```

## 🎓 Evidencias de Aprendizaje

Este proyecto demuestra el dominio de:

1. **Arquitectura modular** de NativeScript con Angular
2. **Routing avanzado** con lazy loading de módulos
3. **Componentes especializados** y reutilizables
4. **Servicios globales** con inyección de dependencias
5. **Estilos específicos por plataforma**
6. **Detección de plataforma** para lógica condicional
7. **Programación reactiva** con Observables
8. **Navegación drawer** implementada correctamente
9. **Recursos nativos** personalizados (íconos)
10. **Estructura de proyecto** professional y escalable

---

**Desarrollado por**: [Tu Nombre]  
**Curso**: NativeScript con Angular  
**Fecha**: Noviembre 2025
