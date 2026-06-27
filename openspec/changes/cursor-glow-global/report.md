# Cursor Glow Global — Reporte de implementación

## Resumen

Migración del efecto cursor glow de 10 elementos individuales por sección a un único elemento `fixed` global en Layout.astro.

## Cambios realizados

### Problema original
- Cada sección tenía su propio div `section-cursor-glow` con un gradiente radial de 600px
- Al cruzar el borde entre secciones, el gradiente se cortaba ("se partía a la mitad")
- Múltiples listeners `mousemove` duplicados (uno por sección)
- Conflictos de stacking context (z-index) entre fondos decorativos y el glow

### Solución
- **Layout.astro**: un solo `<div id="global-cursor-glow">` con `position: fixed; inset: 0`
- Un solo listener `mousemove` en `document` que detecta `.section-glow` vía `elementFromPoint` + `closest`
- Radio final: **400px** (reducido desde 800px original)
- El script controla `opacity` (1 cuando el mouse está sobre `.section-glow`, 0 cuando no)

### Archivos modificados
14 archivos:
- `src/layouts/Layout.astro` — div global + script
- `src/styles/cursor-glow.css` — selectores actualizados a `#global-cursor-glow`
- `src/components/ui/Section.astro` — `hasCursorGlow` default `false`
- 10 secciones — removidos divs y scripts redundantes
- `src/components/About.astro` — mantiene `initCardGlow()` para glow de cards
- `src/components/Skills.astro` — mantiene `initCardGlow()` para glow de cards

## Proyectos WordPress — finalización

Los 3 placeholders fueron reemplazados con datos reales + se agregó un 4to proyecto:

1. **NIDO Coworking** — coworking en Asturias
2. **Brasa Norte** — restaurante mediterráneo en Albacete
3. **Clínica Oria** — clínica de columna en Gijón
4. **MotorNova** — taller mecánico en Oviedo

## Proyecto EventTwo Media

Nuevo proyecto agregado en primera posición de la sección Projects (código limpio).
Stack: Astro, React, TypeScript, Tailwind CSS, Motion, i18n, Zod, Vercel, WordPress Headless.

## CI/CD

Workflow `.github/workflows/ci.yml` con 4 jobs: lint, type-check, test, build.
Se ejecuta en push/PR a `main`.
