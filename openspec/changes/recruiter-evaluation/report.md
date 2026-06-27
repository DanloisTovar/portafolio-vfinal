# Evaluación Final de Candidatura — Danlois Tovar

**Evaluador**: Team Lead de Desarrollo + Team Lead de QA. 12 años en el sector, contratando en Asturias (Oviedo, Gijón, Avilés, Cuencas). Experiencia en procesos de selección para Seresco, CTIC, Capgemini Langreo.

**Candidato**: Danlois Tovar
**Proyectos evaluados**: Portafolio personal (`danloisdev.com`) + EventTwo Media (`eventtwomedia.com`)
**Fecha**: 27 de junio de 2026
**Veredicto**: ✅ CONTRATABLE — 8.5/10. Top 5% de candidatos frontend para el mercado asturiano.

---

## 1. Primera Impresión

Portafolio: 93+ commits con Conventional Commits, CHANGELOG automatizado, Husky + commitlint + lint-staged, ESLint + Prettier + Stylelint, Dockerfile, `.github/workflows/ci.yml`.

EventTwo Media: 105 tests unitarios (84.5% coverage), E2E con axe-core accesibilidad, política de privacidad GDPR para SL española (180 líneas), WordPress Headless con WPGraphQL, Schema.org ×3, 166 commits en 71 días.

**Conclusión inmediata**: No es un junior. Trata sus proyectos como producción.

---

## 2. Los Dos Proyectos — Filosofía de Desarrollo

El candidato tiene dos tipos de proyecto que se complementan:

**EventTwo Media (producción)**: Testing, GDPR, SEO técnico, accesibilidad, formulario seguro, WordPress CMS, entrega a cliente real.

**Portafolio (exploración)**: i18n, Tailwind 4, Astro 5, React 19, Docker, animaciones WebGL, refactor atómico documentado.

Un dev que mantiene ambos tipos de proyecto entiende la diferencia entre código de producción y código de exploración. Eso es seniority.

---

## 3. Lo Que Más Destaca

### Testing — 105 tests en un proyecto freelance (10/10)

- 105 tests unitarios en EventTwo (84.5% coverage): Zod schema, ContactForm, WordPress API, GraphQL queries, event data mappers, MobileNav, ScrollReveal, Hero
- 12 tests unitarios en portafolio
- E2E con Nightwatch + axe-core accesibilidad WCAG A/AA
- data-testid pattern para selectores robustos
- Build-fail philosophy (sin datos → build falla, no fake data)
- Background en QA (Workgroup S.L., 2021-2025)

### WordPress Headless con GraphQL (9/10)

- WordPress tradicional: 4 proyectos del curso con Elementor, alojados en `*.rbcampus.es`
- WordPress Headless: WPGraphQL + ACF + CPT UI en EventTwo, fetch con timeout + AbortController, error handling en español con hints de debugging
- Cubre ambos extremos del espectro WordPress

### GDPR Compliance Real (9/10)

- Política de Privacidad: 180 líneas, 9 secciones (AEPD, base legal RGPD, derechos ARSULIPO, transferencias internacionales)
- Política de Cookies: 170 líneas con tablas de cookies reales
- CookieBanner funcional con aceptación/rechazo
- Implementado para SL española real (EVENTTWO MEDIA SL)

### CI/CD Profesional (9/10)

- GitHub Actions en AMBOS proyectos: lint → type-check → test → build
- pnpm + frozen-lockfile + Node 22 + cache
- Husky: pre-commit (typecheck) + pre-push (tests)
- commitlint + conventional-changelog

### Schema.org / SEO (9/10)

- 3 tipos de structured data en EventTwo: Organization, BreadcrumbList, Event
- Sitemap, robots.txt, Open Graph, Twitter Cards, canonical URLs
- Google Search Console verification
- `lang="es"`, meta description por página

---

## 4. Lo Que Hace Ruido

### Formulario del portafolio inferior al de EventTwo
- Rate limiting in-memory (se pierde en cold start de Vercel)
- Gmail SMTP directo (frágil con políticas de Google)
- EventTwo tiene la implementación correcta (Zod compartido + rate limit real + XSS sanitization)

### README desactualizado
- Estructura de archivos no refleja el refactor atómico
- Menciona `Welcome.astro` (eliminado)
- No menciona `src/components/ui/` ni `src/components/sections/`
- Sin badge de CI

### EventTwo poco destacado en el portafolio
- Aparece como un card más en el carrusel
- No comunica sus métricas (105 tests, GDPR, WordPress Headless)

### Cobertura 98% cuestionable
- 12 tests para 30+ componentes
- Requiere respuesta preparada para entrevista técnica

---

## 5. Matriz de Evaluación

| Competencia | Nota | Evidencia |
|------------|------|-----------|
| Testing | 10/10 | 105 tests + E2E + axe-core |
| WordPress | 9/10 | Headless GraphQL + Elementor |
| CI/CD | 9/10 | GitHub Actions ×2 + Husky |
| TypeScript | 8/10 | Strict mode, sin `any` |
| CSS / Diseño | 8/10 | Tailwind + Neon Nocturne + BEM |
| SEO | 9/10 | Schema.org ×3 + sitemap + OG |
| GDPR / Legal | 9/10 | Compliance real SL española |
| Seguridad | 8/10 | Rate limit + XSS + CORS |
| Arquitectura | 8/10 | Refactor atómico + SSOT + Zod |
| Documentación | 7/10 | CHANGELOG + openSpec, README pendiente |
| i18n | 8/10 | ES/EN en portafolio |

**Media**: 8.5/10

---

## 6. Fit — Mercado Asturiano

| Empresa | Fit | Motivo |
|---------|-----|--------|
| Agencias digitales Oviedo/Gijón | 🟢🟢 EXCELENTE | WordPress + React + testing |
| Consultoras WordPress | 🟢🟢 EXCELENTE | Headless + Elementor + curso |
| Empresas con requisitos GDPR | 🟢🟢 EXCELENTE | Compliance real implementado |
| Seresco Oviedo | 🟢🟢 EXCELENTE | Testing + accesibilidad + sector público |
| CTIC Gijón | 🟢🟢 EXCELENTE | Estándares web + I+D |
| Izertis | 🟢🟢 EXCELENTE | Perfil versátil multi-proyecto |
| Capgemini Langreo | 🟢 Alto | Testing + CI/CD (stack difiere) |

---

## 7. Recomendaciones Pre-Entrevista

1. ⚠️ Migrar formulario del portafolio al patrón de EventTwo
2. ⚠️ Actualizar README con estructura real + badge CI
3. 📝 Destacar EventTwo visualmente en portafolio con métricas
4. 📝 Añadir contexto del curso en sección WordPress
5. 📝 Preparar respuesta sobre cobertura 98%
6. 💡 Añadir ESLint/Prettier a EventTwo

---

## 8. Guión de Entrevista

> *"Estoy finalizando el curso de Confección y Publicación de Páginas Web en Restauradores Bercianos, aquí en Oviedo. Los proyectos WordPress son de ese curso. En paralelo, desarrollé EventTwo Media, un sitio completo para una productora de eventos: WordPress Headless con GraphQL, 105 tests, GDPR compliance, Schema.org, y CI/CD. Mi portafolio personal lo uso para experimentar con tooling más nuevo: Astro 5, i18n, Docker. Vengo del mundo QA y soporte de integraciones — testear no es algo que 'también hago', es parte de cómo pienso."*

---

## 9. Veredicto

**Contrato**: ✅ SÍ — frontend mid con proyección a senior en 12-18 meses.

El perfil dual dev + QA da flexibilidad para asignarlo a proyectos con necesidades de testing. El conocimiento de WordPress permite ubicarlo en el 60% de proyectos de agencias asturianas. El background en soporte de integraciones (SQL, JSON, APIs) indica que no se pierde con backend.

**Lo que falta para senior**: Una iteración más de producción (formulario con rate limit real). Si en entrevista demuestra conciencia de esto, el senior llega en 6 meses.

---

_Fecha: 27 de junio de 2026_
_Evaluador: Team Lead Dev + QA, Asturias, España_
_Basado en: repositorio portafolio-vfinal + repositorio eventtwo-media-sl + Engram memory + openspec/_
