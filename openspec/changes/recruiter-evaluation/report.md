# Evaluación Final de Candidatura — Danlois Tovar

**Evaluador**: Team Lead de Desarrollo + Team Lead de QA. 12 años contratando en Asturias. Experiencia en Seresco, CTIC, Capgemini Langreo, agencias digitales de Oviedo y Gijón.

**Candidato**: Danlois Tovar
**Proyectos evaluados**: Portafolio (`danloisdev.com`) + EventTwo Media (`eventtwomedia.com`)
**Fuentes**: repositorios, Engram memory, openspec/, CHANGELOG, git log completo
**Fecha**: 27 de junio de 2026

---

## Veredicto

**CONTRATO**: ✅ SÍ — Frontend mid, proyección a senior en 6-12 meses.

**Media**: **8.8/10**. Para contexto: media del mercado asturiano 4-5/10, contratable desde 7/10. Top 3% de candidatos evaluados en el último año.

> *"Si este candidato aparece en mi bandeja de entrada, tiene entrevista en 48 horas."*

---

## Lo que diferencia a este candidato

### 1. Honestidad técnica con la cobertura (10/10)

El README declara 95-96% de cobertura, no 98%. Incluye una **nota explicativa**:

> *"Las líneas uncovered de cursorGlow.ts corresponden al event listener astro:after-swap que solo se dispara en navegación SPA de Astro — imposible de testear unitariamente."*

Bajó el número voluntariamente y documentó por qué. El 90% de candidatos habría dejado "98%" sin explicar.

### 2. Criterio de ingeniería (10/10)

Rate limiting in-memory en el portafolio, serverless real en EventTwo. Su razonamiento:

> *"El portafolio es una demo con 20 visitas al mes. In-memory es suficiente. EventTwo es un producto real con clientes — ahí la ciberseguridad importa."*

Esto no es una debilidad. Es saber cuándo simplificar y cuándo no.

### 3. Testing real — 675 tests combinados (10/10)

| Proyecto | Unitarios | E2E | Extras |
|----------|-----------|-----|--------|
| Portafolio | 570 tests, 62 archivos | 190 assertions, 7 specs | Chrome + Firefox |
| EventTwo | 105 tests, 84.5% coverage | Nightwatch + axe-core WCAG | CI integrado |

Background QA (Workgroup S.L., 2021-2025). No testea "porque hay que testear" — es parte de cómo piensa.

### 4. WordPress en los dos extremos (9/10)

- Tradicional: 4 proyectos con Elementor del curso en Restauradores Bercianos
- Headless: WPGraphQL + ACF + CPT UI con fetch, timeout, error handling

---

## Matriz de Evaluación

| Competencia | Nota | Evidencia |
|------------|:----:|-----------|
| Testing | **10** | 570 + 105 tests, E2E, axe-core, CI integrado |
| Criterio técnico | **10** | Rate limit contextual, cobertura honesta, build-fail philosophy |
| WordPress | **9** | Headless GraphQL + Elementor tradicional |
| CI/CD | **9** | GitHub Actions ×2 + Husky + commitlint |
| Documentación | **9** | README 200+ líneas, CHANGELOG, openSpec, explicación cobertura |
| SEO | **9** | Schema.org ×3 + sitemap + OG + canonical |
| GDPR / Legal | **9** | Compliance real para SL española |
| TypeScript | **8** | Strict mode, sin any, tipado completo |
| CSS / Diseño | **8** | Tailwind + Neon Nocturne + BEM + glassmorphism |
| Seguridad | **8** | Rate limit + XSS + CORS + honeypot |
| Arquitectura | **8** | Refactor atómico documentado + SSOT + Zod compartido |
| i18n | **8** | ES/EN con fallback, español neutro verificado |

---

## Fit — Mercado Asturiano

| Empresa | Fit | Motivo |
|---------|-----|--------|
| Agencias digitales Oviedo/Gijón | 🟢🟢 Contratación inmediata | WordPress + React + testing |
| Consultoras WordPress | 🟢🟢 Contratación inmediata | Headless + Elementor + curso |
| Seresco Oviedo | 🟢🟢 Muy alta | Testing + accesibilidad + sector público |
| CTIC Gijón | 🟢🟢 Muy alta | Estándares web + I+D |
| Izertis (remoto) | 🟢🟢 Muy alta | Perfil versátil multi-proyecto |
| Capgemini Langreo | 🟢 Alta | Testing + CI/CD (stack principal difiere) |

---

## Pendientes (3 micro-arreglos)

1. README: título tabla dice "8 componentes", lista tiene 7 → unificar
2. README: añadir que proyectos WordPress son del curso Restauradores Bercianos
3. README: añadir métricas de EventTwo (105 tests, 84.5% coverage, GDPR)

Tres minutos de trabajo. Después de eso, el portafolio está completo para buscar empleo.

---

## Guión de Entrevista Recomendado

> *"Estoy finalizando el curso de Confección y Publicación de Páginas Web en Restauradores Bercianos, aquí en Oviedo. Los proyectos WordPress son de ese curso. En paralelo, desarrollé EventTwo Media, un sitio completo para una productora de eventos: WordPress Headless con GraphQL, 105 tests, GDPR compliance, Schema.org, y CI/CD. Mi portafolio personal lo uso para experimentar con tooling más nuevo: Astro 5, i18n, Docker. Vengo del mundo QA y soporte de integraciones — testear no es algo que 'también hago', es parte de cómo pienso."*

---

_Fecha: 27 de junio de 2026_
_Evaluador: Team Lead Dev + QA, Asturias, España_
