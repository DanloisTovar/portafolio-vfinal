# Spanish Language Audit — Español Neutro

## Objetivo

Verificar que todos los textos visibles en español del portafolio usen **español neutro estándar**, sin voseo argentino (verbos conjugados con "vos") ni modismos rioplatenses.

## Resultado: ✅ APROBADO

**No se encontró voseo ni modismos argentinos en ningún texto visible al usuario.**

---

## Archivos Auditados

| Archivo | Tipo de texto | Resultado |
|---------|--------------|-----------|
| `src/i18n/ui.ts` | ~80 claves de traducción ES | ✅ Neutro |
| `src/components/Footer.astro` | Traducciones inline (tagline, links, derechos) | ✅ Neutro |
| `src/components/Contact.astro` | Labels, placeholders, mensajes de error/éxito | ✅ Neutro |
| `src/components/Hero.astro` | Texto de botones, badges (todo via i18n) | ✅ Neutro |
| `src/components/About.astro` | Títulos hardcodeados (Sobre Mí, Desarrollo Web, etc.) | ✅ Neutro |
| `src/components/Skills.astro` | Títulos hardcodeados + datos de educación | ✅ Neutro |
| `src/components/Experience.astro` | Todo via i18n | ✅ Neutro |
| `src/components/sections/CaseStudy.astro` | Todo via i18n | ✅ Neutro |
| `src/components/sections/WordPressProjects.astro` | Todo via i18n | ✅ Neutro |

---

## Checklist de Voseo

| Forma voseo (argentino) | ¿Aparece? | Forma neutra usada |
|-------------------------|-----------|-------------------|
| vos tenés | ❌ | tú tienes |
| vos querés | ❌ | tú quieres |
| vos podés | ❌ | (no usado) |
| vos sabés | ❌ | (no usado) |
| vos decís | ❌ | (no usado) |
| contame | ❌ | cuéntame |
| envialo / enviame | ❌ | envíame |
| intentalo | ❌ | inténtalo |
| introducí | ❌ | introduce |
| che / loco / boludo / re / genial | ❌ | (no usado) |

---

## Observaciones Menores

1. **`Sobre Mí`** → El nav título usa "Mí" con tilde mayúscula. Preferible `Sobre mí` (minúscula según RAE en títulos).
2. **`Envíame un correo`** → Botón de contacto. Está en neutro (tú imperative) pero suena informal. Alternativas: `Escríbeme`, `Contáctame`.
3. **`Habilidades Blandas`** → Traducción literal de "Soft Skills". Alternativas neutras: `Habilidades Interpersonales`, `Competencias Blandas`.

---

## Conclusión

El portafolio está en **español neutro correcto**, apto para cualquier audiencia hispanohablante. No requiere cambios por voseo o modismos.

---

_Fecha: 2026-06-27_
