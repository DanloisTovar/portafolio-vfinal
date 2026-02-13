# Plan de Pruebas - Portafolio Danlois Tovar

Este documento detalla la estrategia, alcance y metodología de pruebas para asegurar la calidad y estabilidad del portafolio personal de Danlois Tovar.

## 1. Objetivos de las Pruebas

- Verificar la correcta visualización de todos los componentes UI.
- Validar la lógica de internacionalización (ES/EN) y persistencia.
- Asegurar la interactividad de animaciones complejas y componentes dinámicos.
- Garantizar que todos los enlaces (internos y externos) funcionen correctamente.
- Validar el flujo del formulario de contacto y su integración con acciones de servidor.
- Mantener la integridad del sitio durante futuros desarrollos mediante regresión automatizada.

## 2. Alcance

### En Alcance

- **Pruebas Unitarias**: Componentes React y utilidades de lógica central.
- **Pruebas de Integración**: Pruebas de enlaces centralizadas y manejo de traducciones.
- **Pruebas E2E**: Flujos de usuario completos, SEO y validaciones multi-navegador (Chrome, Firefox).

### Fuera de Alcance

- Pruebas de carga o rendimiento masivo.
- Pruebas en navegadores legacy (IE).

## 3. Estrategia de Pruebas

### Nivel 1: Pruebas Unitarias (Vitest)

Se ejecutan sobre componentes individuales en aislamiento utilizando JSDOM.

- **Enfoque**: Validar propiedades, estados iniciales y cambios simples de DOM.
- **Componentes Críticos**: `Navbar`, `ThemeToggle`, `LanguageToggle`, `CircularText`, `TargetCursor`.

### Nivel 2: Pruebas de Sistema / Enlaces

Se utiliza una fuente de verdad centralizada (`src/constants/links.ts`).

- **Enfoque**: Validar que cada objeto de enlace tenga una URL válida antes de ser usado por los componentes.

### Nivel 3: Pruebas Extremo a Extremo (Nightwatch)

Se ejecutan sobre el sitio construido y servido localmente.

- **Escenarios**:
  - **Navegación**: Scroll suave a anclas, persistencia de idioma.
  - **Interacciones**: Carrusel de noticias, cambio de tema luz/oscuro.
  - **Formulario**: Mensajes de error por validación Zod y respuesta visual.
  - **Enlaces**: Validación de `href`, `target="_blank"` y `rel`.

## 4. Entorno y Herramientas

- **Framework de Pruebas**: Vitest (Unitarias), Nightwatch (E2E).
- **Entorno de Ejecución**: Node.js v20+, Chrome (via ChromeDriver), Firefox (via GeckoDriver).
- **Gestión de Paquetes**: pnpm.
- **Reporting**: Reportes HTML generados por Nightwatch en `tests_output/`.

## 5. Casos de Prueba Principales

| ID    | Área  | Descripción                                                      | Tipo |
| :---- | :---- | :--------------------------------------------------------------- | :--- |
| CP-01 | i18n  | El cambio de idioma persiste tras recargar la página.            | E2E  |
| CP-02 | UI    | El cursor personalizado se oculta en dispositivos móviles.       | Unit |
| CP-03 | Form  | El formulario muestra errores si el email es inválido.           | E2E  |
| CP-04 | Logic | Todos los enlaces de proyectos en `links.ts` son válidos.        | Unit |
| CP-05 | UI    | El efecto `GlareHover` aplica correctamente las variables CSS.   | Unit |
| CP-06 | Nav   | El clic en "Proyectos" hace scroll a la sección correspondiente. | E2E  |

## 6. Ejecución y Reportes

### Comandos de Ejecución

```bash
pnpm run test              # Ejecuta todas las pruebas unitarias
pnpm run test:e2e:chrome   # Ejecuta pruebas E2E en Chrome
pnpm run test:e2e:firefox  # Ejecuta pruebas E2E en Firefox
pnpm run test:all          # Ejecuta la suite completa (Unit + E2E)
```

### Gestión de Fallos

Cualquier fallo detectado debe ser corregido antes de realizar un `merge` a la rama principal (reforzado por hooks de Husky en el proyecto).
