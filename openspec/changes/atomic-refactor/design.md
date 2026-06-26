# Design: Atomic UI Component Extraction

## Technical Approach

Extract 7 repeated UI patterns into typed Astro components under `src/components/ui/`, driven by a `variant` prop mapped to internal class dictionaries. Extract shared cursor-glow JS into a single module. Migrate one section at a time, verifying with E2E tests after each to guarantee identical HTML output.

## Architecture Decisions

### Decision: Component Technology

**Choice**: Astro `.astro` components (no runtime JS). Only existing interactive React components (Navbar, StarBorder, GlareHover, Form) remain React.

**Alternatives considered**: Pure React components, lit-html web components, full JSX conversion.

**Rationale**: All extracted patterns are presentational — they render static HTML with Tailwind classes. Astro's `.astro` format emits HTML with zero JS overhead, matches the existing architecture, and allows the same template expressions, client directives, and component composition the project already uses.

### Decision: Variant Mapping Strategy

**Choice**: Internal class dictionaries per variant (object maps variant key to CSS strings), not CSS-only Tailwind variants or `class-variance-authority`.

**Alternatives considered**: `class-variance-authority` (CVA), Tailwind `@apply` component classes, PostCSS mixins.

**Rationale**: The variants differ in more than just Tailwind utilities — some add/remove child elements (divider, subtitle), change heading tags (h2 vs h3), and toggle conditional wrappers (gradient span vs direct text). An inline object map with conditional rendering is simpler than a utility-based approach and keeps all visual truth in one file per component.

### Decision: Cursor Glow Consolidation

**Choice**: Single `src/lib/cursorGlow.ts` module exporting `initCursorGlow()` and `initSectionGlow()`. Each section imports and calls it. CSS class names, selectors, and RGB values stay identical.

**Alternatives considered**: Keep duplicated JS in each section (current approach), use Astro islands, extract to global layout with data attributes.

**Rationale**: The CSS and JS logic are identical across 4 instances. A shared module eliminates duplication while keeping per-section activation explicit (no hidden coupling). The `astro:after-swap` event handling is centralized once.

### Decision: One-Section-at-a-Time Migration

**Choice**: Refactor sections sequentially: Contact (pilot) -> About -> Skills -> Experience -> News -> Hero -> Footer -> Projects (split last).

**Alternatives considered**: Refactor all at once, extract patterns without verifying, rewrite from scratch.

**Rationale**: E2E tests exist and validate visual output. One-at-a-time guarantees any regression is caught in the changed section only. Contact is the smallest section (no cards with cursor glow) so it de-risks the pilot.

### Decision: Icon Strategy

**Choice**: Replace all matching inline SVGs with `lucide-react` (already a dependency). Create custom Astro icon components for GitHub, WhatsApp, Twitter/X, and Code (non-lucide or size-specific) in `src/components/icons/`.

**Alternatives considered**: Keep all inline SVGs, use `astro-icon` package, use `@lucide/astro`.

**Rationale**: lucide-react is already imported in Contact.astro and SocialMenu.tsx — adding it won't increase bundle size for shared icons. Using Astro icon components wraps custom SVG paths consistently and enables icon mapping via a `name` prop.

### Decision: CSS Duplication Handling

**Choice**: Extract `.cursor-glow`, `.section-cursor-glow`, and `.section-glow:hover` CSS into a single `src/styles/cursor-glow.css` file, loaded globally in Layout.astro. `.cursor-glow` border-radius becomes a CSS custom property per card type.

**Alternatives considered**: Keep duplicated scoped `<style>` blocks, use `is:global` everywhere, inline styles via JS.

**Rationale**: The CSS is byte-for-byte identical across About, Skills, Projects, Contact. A single global file removes 200+ lines of duplication while the `border-radius` custom property handles the one variation (cards with different radii).

## Data Flow

```
Section (e.g., About.astro)
  └── SectionWrapper       (py-*, bg, section-glow class, cursor-glow div)
        └── SectionHeader   (title, subtitle, variant → class dict)
        └── GlassCard[]     (variant → p-*/rounded-*/hover-* class dict)
              ├── IconBox   (variant → w-*/h-*/bg-*)
              └── <slot />   (content via props or children)
  └── <script>              (initCursorGlow() from cursorGlow.ts)
```

All data flows server-to-client. No runtime state for UI components. Cursor glow JS is the only client-side code, and it only reads mouse position and sets CSS custom properties.

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/ui/SectionHeader.astro` | Create | Section title + subtitle + divider, 3 variants |
| `src/components/ui/GlassCard.astro` | Create | Unified glass card, 7 variants |
| `src/components/ui/IconBox.astro` | Create | Icon container, 3 size variants + gradient/light bg |
| `src/components/ui/Button.astro` | Create | CTA buttons, 4 variants (primary, secondary, ghost, submit) |
| `src/components/ui/Badge.astro` | Create | Badge/tag, 3 variants (tech, floating, status) |
| `src/components/ui/SectionWrapper.astro` | Create | Section shell: py-*, bg, cursor-glow divs, inner container |
| `src/components/icons/WhatsApp.astro` | Create | WhatsApp SVG icon |
| `src/components/icons/Twitter.astro` | Create | Twitter/X SVG icon |
| `src/components/icons/GitHub.astro` | Create | GitHub SVG icon |
| `src/components/icons/Code.astro` | Create | Code/monitor SVG icon |
| `src/lib/cursorGlow.ts` | Create | Shared cursor glow JS module |
| `src/styles/cursor-glow.css` | Create | Shared cursor glow CSS (global) |
| `src/components/sections/CaseStudy.astro` | Create | Extracted from Projects.astro (case study carousel) |
| `src/components/sections/QAShowcase.astro` | Create | Extracted from Projects.astro (QA section) |
| `src/components/Contact.astro` | Modify | Replace inline patterns with UI components |
| `src/components/About.astro` | Modify | Replace inline patterns with UI components |
| `src/components/Skills.astro` | Modify | Replace inline patterns with UI components |
| `src/components/Experience.astro` | Modify | Replace inline patterns with UI components |
| `src/components/News.astro` | Modify | Replace inline section header with UI component |
| `src/components/Hero.astro` | Modify | Replace inline CTA buttons with Button component |
| `src/components/Projects.astro` | Modify | Replace inline patterns, delegate to section sub-components |
| `src/components/Footer.astro` | Modify | Replace inline SVGs with Icon components |
| `src/components/Welcome.astro` | Delete | Dead code from Astro scaffold |
| `src/layouts/Layout.astro` | Modify | Import cursor-glow.css globally |

## Interfaces / Contracts

```astro
--- // SectionHeader.astro
interface Props {
  variant: 'gradient-accent' | 'gradient-cyan' | 'skills-subsection'
  title: string
  subtitle?: string
  titleTag?: 'h2' | 'h3'
  class?: string
  marginBottom?: string  // override e.g. 'mb-20'
}
---

--- // GlassCard.astro
interface Props {
  variant: 'full' | 'compact' | 'soft-skills' | 'experience' | 'contact-form' | 'project-showcase' | 'news'
  padding?: string
  hoverEffect?: 'translate' | 'scale' | 'none'
  cursorGlow?: boolean
  class?: string
  children?: any  // slot content
}
---

--- // IconBox.astro
interface Props {
  variant: 'large' | 'medium' | 'small' | 'experience'
  background?: 'gradient' | 'light' | 'gradient-small' | 'none'
  class?: string
}
---

--- // Button.astro
interface Props {
  variant: 'primary' | 'secondary' | 'ghost' | 'submit'
  size?: 'sm' | 'md' | 'lg'
  icon?: string  // lucide icon name
  iconPosition?: 'left' | 'right'
  href?: string  // if set, renders <a> instead of <button>
  disabled?: boolean
  class?: string
}
---

--- // Badge.astro
interface Props {
  variant: 'tech' | 'floating' | 'status' | 'duration' | 'mobile'
  class?: string
}
---

--- // SectionWrapper.astro
interface Props {
  id: string
  variant: 'about' | 'skills' | 'experience' | 'projects' | 'news' | 'contact' | 'footer'
  sectionGlow?: boolean  // enable section cursor glow
  children?: any
}
---
```

```ts
// src/lib/cursorGlow.ts
export function initCursorGlow(selector?: string): void
export function initSectionGlow(selector: string): void
export function initAllCursorGlows(): void  // registers both + astro:after-swap
```

## Migration Sequence

1. **Create foundational files**: `src/components/ui/`, `src/lib/cursorGlow.ts`, `src/styles/cursor-glow.css`, `src/components/icons/`, global CSS import in Layout.astro
2. **Pilot: Contact.astro** — simplest section, no card-glow, least risk
3. **E2E verify**: run `testing/testing-astro/e2e/` suite, confirm all tests pass
4. **About.astro** — section-glow, card-glow, 3 glass card types, inline SVGs
5. **Skills.astro** — section-glow + card-glow + query cards + astro:after-swap
6. **Experience.astro** — GlareHover cards (no cursor glow), timeline layout
7. **News.astro** — section header only
8. **Hero.astro** — CTA buttons only
9. **Footer.astro** — inline SVGs to Icon components
10. **Projects.astro** — split into Projects (main showcase), CaseStudy, QAShowcase
11. **Delete Welcome.astro**
12. **Fix `no-scrollbar`**: move `.scrollbar-hide` from News.astro `<style>` to global CSS
13. **Fix QA cursor glow bug**: add `section-glow` class to QA showcase section
14. **Final E2E verification**: full test suite across all sections

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| E2E | All sections render with same HTML structure | Existing Nightwatch suite — section IDs, CSS classes, button text, form validation, theme toggle, carousel interactions |
| E2E | Cursor glow JS works post-refactor | Additional interaction test: mousemove on `.card-glow` verifies `--mouse-x`/`--mouse-y` are set on the element |
| Visual | No visual regressions | Manual review + E2E assertion on class strings (same Tailwind classes as pre-refactor in output) |

## Open Questions

- None. The variation catalogue maps every pattern precisely; the design preserves every class string, variant, and interaction.
