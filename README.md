# Portafolio V3 - Astro + React + Tailwind CSS

Proyecto de portafolio construido con Astro, React y Tailwind CSS, con una configuración completa de desarrollo profesional.

## 🚀 Stack Tecnológico

- **Framework**: Astro 5.x
- **UI Library**: React 18.x
- **Styling**: Tailwind CSS 4.x
- **Language**: TypeScript 5.x
- **Package Manager**: pnpm

## 🛠️ Herramientas de Desarrollo

- **Linting**: ESLint + Prettier + Stylelint
- **Testing**: Vitest (Unit Tests) + Nightwatch (E2E)
- **Git Hooks**: Husky + lint-staged
- **Commits**: Commitlint (Conventional Commits)

## 📦 Scripts Disponibles

### Desarrollo

```bash
pnpm dev          # Iniciar servidor de desarrollo
pnpm build        # Construir para producción
pnpm preview      # Vista previa de la build
```

### Linting y Formateo

```bash
pnpm lint         # Ejecutar ESLint
pnpm lint:fix     # Corregir problemas de ESLint
pnpm lint:ts      # Verificar TypeScript
pnpm format       # Formatear código con Prettier
pnpm lint:css     # Lint de CSS/SCSS
pnpm lint:css:fix # Corregir problemas de CSS
```

### Testing

```bash
pnpm test              # Ejecutar tests unitarios
pnpm test:watch        # Tests en modo watch
pnpm test:ui           # UI de Vitest
pnpm coverage          # Generar reporte de cobertura
pnpm test:e2e          # Tests E2E (Chrome + Firefox)
pnpm test:e2e:chrome   # Tests E2E solo Chrome
pnpm test:e2e:firefox  # Tests E2E solo Firefox
```

### Otros

```bash
pnpm changelog    # Generar CHANGELOG.md
```

## 🏗️ Estructura del Proyecto

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Counter.tsx       # Componente React de ejemplo
│   │   └── Welcome.astro     # Componente Astro
│   ├── layouts/
│   │   └── Layout.astro      # Layout principal
│   ├── pages/
│   │   └── index.astro       # Página de inicio
│   └── app.css               # Estilos globales (Tailwind)
├── tests/
│   └── e2e/                  # Tests end-to-end
├── astro.config.mjs          # Configuración de Astro
├── tsconfig.json             # Configuración de TypeScript
├── eslint.config.js          # Configuración de ESLint
├── .prettierrc               # Configuración de Prettier
├── .stylelintrc.json         # Configuración de Stylelint
├── vitest.config.ts          # Configuración de Vitest
├── nightwatch.conf.cjs       # Configuración de Nightwatch
├── commitlint.config.js      # Configuración de Commitlint
└── package.json
```

## 🚦 Comenzar

1. **Instalar dependencias**:

   ```bash
   pnpm install
   ```

2. **Iniciar servidor de desarrollo**:

   ```bash
   pnpm dev
   ```

3. **Abrir navegador**:
   Visita `http://localhost:4321`

## 📝 Commits Convencionales

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Formateo, punto y coma faltante, etc.
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Mantenimiento

Ejemplo:

```bash
git commit -m "feat: agregar componente de navegación"
```

## 🧪 Testing

### Tests Unitarios (Vitest)

Coloca tus tests en archivos `*.test.ts` o `*.spec.ts` junto a tus componentes.

### Tests E2E (Nightwatch)

Los tests E2E están en `tests/e2e/`. Para ejecutarlos, asegúrate de que el servidor esté corriendo:

```bash
pnpm dev          # Terminal 1
pnpm test:e2e     # Terminal 2
```

## �� Documentación

- [Astro](https://docs.astro.build)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vitest](https://vitest.dev)
- [Nightwatch](https://nightwatchjs.org)

## 📄 Licencia

MIT
