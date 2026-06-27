# Portafolio — Astro + React + Tailwind CSS v4

Portafolio profesional de Danlois Tovar — Desarrollador Front End. Construido con Astro, React y Tailwind CSS v4, con soporte multiidioma (ES/EN), animaciones avanzadas y CI/CD automatizado.

## 🚀 Stack Tecnológico

- **Framework**: Astro 5.x
- **UI Library**: React 19.x
- **Styling**: Tailwind CSS 4.x (con @theme y @variant)
- **Language**: TypeScript 5.x
- **Package Manager**: pnpm
- **Internacionalización**: i18n personalizado (ES/EN)
- **Deploy**: Vercel (SSG con @astrojs/vercel adapter)
- **CI/CD**: GitHub Actions

## 🎨 Características Principales

- ✨ **Soporte Multiidioma**: Sistema i18n integrado para español e inglés
- 🌓 **Dark Mode**: Toggle de tema con soporte de preferencia del sistema
- 🎭 **Animaciones Avanzadas**: GlareHover, LogoLoop, StarBorder, LightRays, CircularText
- 🧩 **Componentes UI Atómicos**: 7 componentes reutilizables (SectionHeader, GlassCard, IconBox, Button, TechBadge, Section, GradientDivider)
- 🖱️ **Cursor Glow Global**: Efecto de brillo que sigue al mouse en todas las secciones sin cortes
- 📱 **Diseño Responsive**: Totalmente responsive con Tailwind CSS
- ♿ **Accesibilidad**: Componentes con atributos ARIA
- 🚀 **CI/CD**: GitHub Actions con lint, type-check, tests y build automáticos

## 🛠️ Herramientas de Desarrollo

- **Linting**: ESLint + Prettier + Stylelint
- **Testing**: Vitest (238 tests unitarios) + Nightwatch (E2E)
- **Git Hooks**: Husky + lint-staged + commitlint
- **Changelog**: Conventional Changelog automatizado
- **CI**: GitHub Actions (push/PR a main)

## 📦 Scripts Disponibles

### Desarrollo

```bash
pnpm dev          # Iniciar servidor de desarrollo (puerto 3003)
pnpm build        # Construir para producción
pnpm preview      # Vista previa de la build
```

### Linting y Formateo

```bash
pnpm lint         # Ejecutar ESLint
pnpm lint:fix     # Corregir problemas de ESLint
pnpm lint:ts      # Verificar TypeScript
pnpm format       # Formatear código con Prettier
pnpm lint:css     # Lint de CSS
pnpm lint:css:fix # Corregir problemas de CSS
```

### Testing

```bash
pnpm test              # Tests unitarios (Vitest)
pnpm test:watch        # Tests en modo watch
pnpm test:ui           # UI de Vitest
pnpm coverage          # Reporte de cobertura
pnpm test:e2e          # Tests E2E (Chrome + Firefox)
pnpm test:e2e:chrome   # Tests E2E solo Chrome
pnpm test:e2e:firefox  # Tests E2E solo Firefox
```

## 📊 Estado de Cobertura

![Coverage](https://img.shields.io/badge/coverage-98%25-green?style=for-the-badge&logo=vitest)

- **Sentencias**: 96.7%
- **Ramas**: 86.9%
- **Funciones**: 100%
- **Líneas**: 98.3%

```bash
pnpm coverage   # Reporte en ./coverage/index.html
```

## 🏗️ Estructura del Proyecto

```
/
├── .github/workflows/         # CI/CD (GitHub Actions)
│   └── ci.yml                 # Lint, type-check, test, build
├── public/                    # Archivos estáticos
├── src/
│   ├── assets/                # Imágenes y recursos
│   │   ├── wordpress/         # Screenshots proyectos WordPress
│   │   ├── caso_de_estudio/   # Imágenes Case Study
│   │   └── qa_showcases/      # GIFs y screenshots QA
│   ├── actions/               # Acciones de servidor (Astro)
│   ├── components/
│   │   ├── Animations/        # Componentes de animación
│   │   │   ├── GlareHover/
│   │   │   ├── LogoLoop/
│   │   │   └── StarBorder/
│   │   ├── Backgrounds/       # Efectos de fondo
│   │   │   └── LightRays/
│   │   ├── TextAnimations/    # Animaciones de texto
│   │   │   └── CircularText/
│   │   ├── sections/          # Sub-secciones extraídas
│   │   │   ├── CaseStudy.astro
│   │   │   ├── QAShowcase.astro
│   │   │   └── WordPressProjects.astro
│   │   ├── ui/                # Componentes UI atómicos
│   │   │   ├── Section.astro
│   │   │   ├── SectionHeader.astro
│   │   │   ├── GlassCard.astro
│   │   │   ├── IconBox.astro
│   │   │   ├── Button.astro
│   │   │   ├── TechBadge.astro
│   │   │   └── GradientDivider.astro
│   │   ├── About.astro        # Sección About
│   │   ├── Contact.astro      # Sección Contacto
│   │   ├── Experience.astro   # Sección Experiencia
│   │   ├── Footer.astro       # Footer
│   │   ├── Hero.astro         # Sección Hero
│   │   ├── LanguageToggle.tsx # Toggle idioma (ES/EN)
│   │   ├── Navbar.tsx         # Navegación
│   │   ├── News.astro         # Sección Noticias (RSS feed)
│   │   ├── Projects.astro     # Sección Proyectos (horizontal scroll)
│   │   ├── Skills.astro       # Sección Habilidades
│   │   ├── SocialMenu.astro   # Menú redes sociales
│   │   └── ThemeToggle.tsx    # Toggle tema (Light/Dark)
│   ├── i18n/
│   │   ├── ui.ts              # Traducciones ES/EN
│   │   └── utils.ts           # Utilidades i18n
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal + cursor glow global
│   ├── lib/
│   │   └── cursorGlow.ts      # Módulo compartido de cursor glow
│   ├── pages/
│   │   ├── index.astro        # Redirect (ES default)
│   │   └── [lang]/
│   │       └── index.astro    # Página principal multiidioma
│   └── styles/
│       ├── global.css         # Estilos globales (Tailwind v4)
│       └── cursor-glow.css    # Estilos cursor glow global
├── testing/                   # Configuración de tests
├── openspec/                  # Documentación de cambios
├── astro.config.mjs
├── tsconfig.json
├── eslint.config.js
├── .prettierrc
├── .stylelintrc.json
├── vitest.config.ts
├── nightwatch.conf.cjs
├── commitlint.config.js
├── package.json
└── README.md
```

## 🧩 Componentes UI Atómicos

8 componentes reutilizables extraídos de patrones duplicados (~920 líneas eliminadas):

| Componente | Variantes | Uso |
|---|---|---|
| **SectionHeader** | gradient-cyan, gradient-accent | Títulos de sección con gradiente |
| **GlassCard** | glass-card-full, glass-compact, project-showcase, experience, contact-form, soft-skills | Tarjetas con efecto vidrio |
| **IconBox** | exp, footer, skill-icon, soft-skill | Contenedor de iconos |
| **Button** | primary, secondary | Botones con icono SVG |
| **TechBadge** | hero, duration, floating, skill, footer | Badges de tecnología |
| **Section** | (configurable vía props) | Wrapper de sección con glow y gradiente |
| **GradientDivider** | default | Divisor horizontal con gradiente |

## 📂 Secciones del Portafolio

### 1. Hero
Presentación principal con foto, badges animados, botones CTA y stack tecnológico.

### 2. About (Sobre mí)
Información personal con visor Spline 3D y tarjetas de habilidades blandas.

### 3. Skills (Habilidades)
Hard skills y soft skills en grid de tarjetas con iconos.

### 4. Experience (Experiencia)
Timeline vertical con nodos animados y tarjetas glare-hover.

### 5. Projects (Proyectos — Código Limpio)
Horizontal scroll con 4 proyectos:
1. **EventTwo Media** — Plataforma de eventos en vivo (Astro, React, WordPress Headless)
2. **Portafolio Web** — Este mismo sitio (Astro, React, TypeScript, Tailwind CSS)
3. **Workgroup** — Sitio corporativo (HTML, CSS, Bootstrap, PHP)
4. **LATI** — Sitio institucional (HTML, CSS, Bootstrap, PHP)

### 6. Case Study (Caso de Estudio)
Galería lightbox con antes/después de la refactorización de Workgroup.

### 7. WordPress Projects
Horizontal scroll con 4 proyectos WordPress + Elementor:
1. **NIDO Coworking** — Coworking en Asturias
2. **Brasa Norte** — Restaurante mediterráneo
3. **Clínica Oria** — Clínica de columna y articulaciones
4. **MotorNova** — Taller mecánico

### 8. QA Showcase
Bug hunting y documentación de testing con lightbox de GIFs.

### 9. News (Noticias)
Carrusel de noticias tech vía RSS (The Verge, Dev.to).

### 10. Contact (Contacto)
Formulario con validación Zod vía Astro Actions + glow effects.

### 11. Footer
Links, iconos de redes sociales con efecto neon y copyright.

## 🖱️ Cursor Glow Global

Efecto de brillo radial (400px) que sigue al mouse en todas las secciones. Implementado como un único elemento `fixed` en Layout.astro:
- Sin cortes entre secciones
- Un solo listener `mousemove` global
- Se activa vía `elementFromPoint` + `closest('.section-glow')`

## 🌐 Internacionalización (i18n)

```astro
---
import { useTranslations, getLangFromUrl } from '@/i18n/utils';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t('nav.home')}</h1>
```

## 🎨 Tailwind CSS v4

```css
@variant dark (&:where(.dark, .dark *));
@theme {
  --font-orbitron: orbitron, sans-serif;
}
```

## 🚦 Comenzar

```bash
pnpm install
pnpm dev        # http://localhost:3003
```

## 📝 Commits Convencionales

- `feat:` ✨ Nueva característica
- `fix:` 🐛 Corrección de bug
- `refactor:` ♻️ Refactorización
- `style:` 🎨 Cambios de estilo
- `docs:` 📝 Documentación
- `test:` ✅ Tests
- `chore:` 🔧 Configuración / dependencias
- `ci:` 👷 CI/CD

## 🧪 Testing

- **Unitarios**: 238 tests con Vitest + Testing Library
- **E2E**: Nightwatch (Chrome + Firefox + Docker)
- **CI**: GitHub Actions en cada push/PR a `main`

## 📄 Licencia

MIT
