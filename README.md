# Portafolio version final - Astro + React + Tailwind CSS v4

Proyecto de portafolio construido con Astro, React y Tailwind CSS v4, con una configuración completa de desarrollo profesional, soporte multiidioma (ES/EN) y animaciones avanzadas.

## 🚀 Stack Tecnológico

- **Framework**: Astro 5.x
- **UI Library**: React 19.x
- **Styling**: Tailwind CSS 4.x (con @theme y @variant)
- **Language**: TypeScript 5.x
- **Package Manager**: pnpm
- **Internacionalización**: i18n personalizado (ES/EN)

## 🎨 Características Principales

- ✨ **Soporte Multiidioma**: Sistema i18n integrado para español e inglés
- 🌓 **Dark Mode**: Variable de tema con @variant de Tailwind v4
- 🎭 **Animaciones Avanzadas**: GlareHover, LogoLoop, StarBorder, TargetCursor, LightRays
- 🎯 **Componentes Reutilizables**: Navbar, LanguageToggle, ThemeToggle, SocialMenu
- 📱 **Diseño Responsive**: Totalmente responsive con Tailwind CSS
- ♿ **Accesibilidad**: Componentes con atributos ARIA

## 🛠️ Herramientas de Desarrollo

- **Linting**: ESLint + Prettier + Stylelint
- **Testing**: Vitest (Unit Tests) + Nightwatch (E2E)
- **Git Hooks**: Husky + lint-staged
- **Commits**: Commitlint (Conventional Commits)
- **Changelog**: Conventional Changelog automatizado

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
├── public/                   # Archivos estáticos
├── src/
│   ├── assets/              # Imágenes y recursos
│   ├── actions/             # Acciones de servidor
│   ├── components/
│   │   ├── Animations/      # Componentes de animación
│   │   │   ├── GlareHover/
│   │   │   ├── LogoLoop/
│   │   │   ├── StarBorder/
│   │   │   └── TargetCursor/
│   │   ├── Backgrounds/     # Componentes de fondo
│   │   │   └── LightRays/
│   │   ├── TextAnimations/  # Animaciones de texto
│   │   │   └── CircularText/
│   │   ├── About.astro      # Sección About
│   │   ├── Contact.astro    # Sección Contact
│   │   ├── Experience.astro # Sección Experience
│   │   ├── Footer.astro     # Footer
│   │   ├── Hero.astro       # Sección Hero
│   │   ├── LanguageToggle.tsx # Toggle idioma (ES/EN)
│   │   ├── Navbar.tsx       # Barra de navegación
│   │   ├── News.astro       # Sección News
│   │   ├── Projects.astro   # Sección Projects
│   │   ├── Skills.astro     # Sección Skills
│   │   ├── SocialMenu.astro # Menú de redes sociales
│   │   ├── ThemeToggle.tsx  # Toggle de tema (Light/Dark)
│   │   └── Welcome.astro    # Componente Welcome
│   ├── i18n/
│   │   ├── ui.ts           # Traducciones
│   │   └── utils.ts        # Utilidades i18n
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal
│   ├── pages/
│   │   ├── index.astro     # Página de inicio (redirect)
│   │   └── [lang]/
│   │       └── index.astro # Página principal multiidioma
│   └── styles/
│       └── global.css      # Estilos globales (Tailwind v4)
├── testing/                # Configuración de tests
├── tests/                  # Archivos de test
├── astro.config.mjs        # Configuración de Astro
├── tsconfig.json           # Configuración de TypeScript
├── eslint.config.js        # Configuración de ESLint
├── .prettierrc             # Configuración de Prettier
├── .stylelintrc.json       # Configuración de Stylelint
├── vitest.config.ts        # Configuración de Vitest
├── nightwatch.conf.cjs     # Configuración de Nightwatch
├── commitlint.config.js    # Configuración de Commitlint
├── package.json
└── README.md
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

## 🌐 Internacionalización (i18n)

El proyecto soporta múltiples idiomas (Español e Inglés) mediante un sistema i18n personalizado:

### Estructura de Traducciones

```typescript
// src/i18n/ui.ts
export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    // ... más traducciones
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    // ... more translations
  },
};
```

### Usar Traducciones

```astro
---
import { useTranslations, getLangFromUrl } from '@/i18n/utils';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('nav.home')}</h1>
```

## 🎨 Tailwind CSS v4

El proyecto utiliza Tailwind CSS v4 con nuevas características:

### At-rules de Tailwind v4

```css
/* Modo oscuro personalizado */
@variant dark (&:where(.dark, .dark *));

/* Variables de tema */
@theme {
  --font-orbitron: orbitron, sans-serif;
  --font-sans: system-ui, -apple-system, blinkmacsystemfont, 'Segoe UI', sans-serif;
}
```

### Configuración de Stylelint para Tailwind v4

El archivo `.stylelintrc.json` está configurado para reconocer las at-rules de Tailwind v4:

```json
{
  "ignoreAtRules": [
    "tailwind",
    "apply",
    "variants",
    "variant",
    "responsive",
    "screen",
    "layer",
    "theme"
  ]
}
```

## 🌓 Dark Mode

El proyecto soporta modo oscuro mediante:

- Variable CSS personalizada: `--theme-mode`
- Componente `ThemeToggle.tsx` para cambiar el tema
- Estilos adaptados para cada tema

## 🎯 Componentes Destacados

### LanguageToggle

Componente para cambiar entre idiomas (ES/EN) con banderas emoji.

### ThemeToggle

Componente para cambiar entre modo claro y oscuro.

### Animaciones Avanzadas

- **GlareHover**: Efecto de brillo al pasar el mouse
- **LogoLoop**: Animación de loop para logos
- **StarBorder**: Borde con efecto de estrellas
- **TargetCursor**: Cursor personalizado con efecto de objetivo
- **LightRays**: Efecto de rayos de luz de fondo

## 📝 Commits Convencionales

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/) con emojis:

- `feat:` ✨ Nueva característica
- `fix:` 🐛 Corrección de bug
- `refactor:` 🎨 Refactorización de código
- `docs:` 📝 Cambios en documentación
- `style:` 💅 Cambios en estilos
- `test:` ✅ Cambios en tests
- `chore:` 🔧 Cambios en configuración o dependencias
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
