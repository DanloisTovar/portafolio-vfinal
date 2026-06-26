# Atomic UI Component Refactor — Specification

## Purpose

Extract 8 reusable UI component patterns from monolithic Astro sections into `src/components/ui/`, eliminating ~920 lines of duplicated markup/CSS/JS and producing byte-for-byte identical HTML output per variant.

---

## 1. SectionHeader Component

### Requirement: SectionHeader renders heading + subtitle + divider with variant-specific CSS

The system MUST export a `<SectionHeader />` component accepting these props:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | yes | — | Heading text |
| `accentText` | `string \| undefined` | no | first/last word of `title` | Word to highlight with gradient |
| `accentPosition` | `'first' \| 'last' \| 'none'` | no | `'last'` | Which word gets accent styling |
| `subtitle` | `string \| undefined` | no | — | Paragraph below heading |
| `variant` | `'gradient-accent' \| 'gradient-cyan' \| 'skills-subsection'` | no | `'gradient-accent'` | Visual variant |
| `alignment` | `'center' \| 'left'` | no | `'center'` | Text alignment |
| `marginBottom` | `'16' \| '20'` | no | `'16'` | mb-16 or mb-20 on container (maps to `mb-${marginBottom}`) |
| `as` | `'h2' \| 'h3'` | no | `'h2'` | Heading level |

### Variant CSS Contract

| Variant | Header classes | Accent classes | Divider classes |
|---------|---------------|----------------|-----------------|
| `gradient-accent` | `text-4xl tracking-tight sm:text-5xl mb-4 text-gray-900 dark:text-white font-orbitron font-medium` | `bg-linear-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent` | `w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full` |
| `gradient-cyan` | Same as `gradient-accent` | `bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent` | `w-24 h-1 bg-linear-to-r from-blue-600 to-cyan-500 mx-auto mt-6 rounded-full` |
| `skills-subsection` | `text-2xl font-bold mb-4 text-center flex items-center justify-center gap-3 text-gray-900 dark:text-white` | Same as `gradient-accent` | `w-24 h-1 bg-transparent mx-auto mt-0 rounded-full` (invisible spacer) |

#### Scenario: gradient-cyan variant renders correct gradient text and matching divider

- GIVEN a `<SectionHeader variant="gradient-cyan" title="My Work" subtitle="Sub" />`
- WHEN rendered to HTML
- THEN the accent `span` MUST have class `bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`
- AND the divider `div` MUST have class `bg-linear-to-r from-blue-600 to-cyan-500`

#### Scenario: three instance marginBottom matches Experience section

- GIVEN an Experience section header with `marginBottom="20"`
- WHEN rendered
- THEN the container div MUST have class `mb-20`

#### Scenario: skills-subsection variant renders as h3 with invisible spacer divider

- GIVEN a `<SectionHeader variant="skills-subsection" as="h3" title="Advanced SQL" />`
- WHEN rendered
- THEN the heading MUST be an `<h3>` element
- AND the divider MUST have class `bg-transparent` (invisible)

---

## 2. GlassCard Component

### Requirement: GlassCard renders a glassmorphism card with variant-specific classes

The system MUST export a `<GlassCard />` component accepting these props:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'full' \| 'soft-skills' \| 'compact' \| 'experience' \| 'contact-form' \| 'project-showcase' \| 'news'` | no | `'full'` | Card visual type |
| `padding` | `'6' \| '8'` | no | `'6'` | Inner padding (p-6 or p-8) |
| `hoverEffect` | `'translate' \| 'scale' \| 'none'` | no | `'translate'` | Hover animation |
| `glowType` | `'card' \| 'section' \| 'none'` | no | `'card'` | Cursor glow type applied |
| `showGradientOverlay` | `boolean` | no | `true` | Whether inner gradient overlay div renders |
| `gradientDirection` | `'to-br' \| 'to-tr' \| 'to-r'` | no | `'to-br'` | Gradient overlay direction |
| `class` | `string` (Astro `class`) | no | `''` | Additional classes to merge |

### Variant CSS Contract

| Variant | Outer classes | Inner overlay | Hover |
|---------|--------------|---------------|-------|
| `full` | `rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 card-glow` | `bg-gradient-to-br from-blue-500/5 to-blue-500/5 dark:from-blue-500/10 dark:to-blue-500/10` | `hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-1` |
| `soft-skills` | `rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 card-glow` | same as `full` | `hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:scale-105` |
| `compact` | `rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 card-glow` | `bg-gradient-to-br from-blue-500/5 to-transparent` | `hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-1` |
| `experience` | `p-0.5 rounded-3xl bg-linear-to-br from-blue-500/20 to-transparent hover:from-blue-500/40 transition-all duration-500 hover:-translate-y-1` | - (inner `bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-[calc(1.5rem-2px)] shadow-2xl border border-gray-100 dark:border-gray-800`) | on outer wrapper |
| `contact-form` | `rounded-4xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl ring-1 ring-blue-500/10 dark:ring-blue-400/10` | - | `hover:shadow-blue-500/30 dark:hover:shadow-blue-500/40` |
| `project-showcase` | `rounded-[2rem] overflow-hidden bg-white dark:bg-gray-900 shadow-2xl lg:shadow-xl border border-gray-100 dark:border-gray-800` | - | `hover:shadow-blue-500/30 dark:hover:shadow-blue-500/40` |
| `news` | `rounded-4xl border from-blue-500/20 to-transparent bg-white dark:bg-gray-900 rounded-[calc(2rem-1px)] shadow-xl` | - | - |

#### Scenario: full variant renders all glassmorphism layers in correct order

- GIVEN a `<GlassCard variant="full" padding="8">content</GlassCard>`
- WHEN rendered
- THEN the outer wrapper MUST have class `rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm card-glow`
- AND the inner overlay div MUST render before content
- AND the content MUST render with class `p-8`

#### Scenario: compact variant omits inner cursor-glow div

- GIVEN a `<GlassCard variant="compact">content</GlassCard>`
- WHEN rendered
- THEN the card MUST NOT contain a `.cursor-glow` child div
- AND hover MUST use `shadow-xl` not `shadow-2xl`

#### Scenario: experience variant wraps content in two-layer structure

- GIVEN a `<GlassCard variant="experience">content</GlassCard>`
- WHEN rendered
- THEN outer wrapper MUST have class `p-0.5 rounded-3xl bg-linear-to-br from-blue-500/20 to-transparent`
- AND inner content MUST have class `bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[calc(1.5rem-2px)]`

---

## 3. GradientDivider Component

### Requirement: GradientDivider renders a thin horizontal divider with variant colors

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'solid-blue' \| 'blue-cyan'` | no | `'solid-blue'` | Color scheme |

| Variant | Classes |
|---------|---------|
| `solid-blue` | `w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full` |
| `blue-cyan` | `w-24 h-1 bg-linear-to-r from-blue-600 to-cyan-500 mx-auto mt-6 rounded-full` |

---

## 4. IconBox Component

### Requirement: IconBox renders a container around an icon with variant sizes and colors

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'dynamic'` | no | `'md'` | Container dimensions |
| `color` | `'gradient-blue' \| 'light-blue' \| 'dynamic'` | no | `'gradient-blue'` | Background style |
| `icon` | `ReactNode` (JSX) | yes | — | The icon element |
| `centered` | `boolean` | no | `false` | Adds `mx-auto` |
| `noMarginBottom` | `boolean` | no | `false` | Omit `mb-4` (only applies when marginBottom is default) |

### Size + Color Matrix

| Size | Classes |
|------|---------|
| `lg` | `w-12 h-12 rounded-2xl flex items-center justify-center` |
| `md` | `w-10 h-10 rounded-2xl flex items-center justify-center` |
| `sm` | `w-8 h-8 rounded-xl flex items-center justify-center` |
| `xl` | `w-14 h-14 rounded-2xl flex items-center justify-center` |
| `dynamic` | `rounded-2xl flex items-center justify-center` (no fixed w/h — caller provides via `class`) |

| Color | Classes |
|-------|---------|
| `gradient-blue` | `bg-gradient-to-br from-blue-500 to-blue-600` |
| `light-blue` | `bg-blue-100 dark:bg-blue-900/30 group-hover:scale-110 transition-transform duration-500` |
| `dynamic` | (caller provides via `colorClass` prop or `class`) |

#### Scenario: lg/gradient-blue icon renders with correct wrapping

- GIVEN `<IconBox size="lg" color="gradient-blue" icon={<Code size={24} />} />`
- WHEN rendered
- THEN container MUST have class `w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center`

#### Scenario: centered icon adds mx-auto

- GIVEN `<IconBox size="lg" color="light-blue" icon={<Code size={24} />} centered />`
- WHEN rendered
- THEN container MUST include class `mx-auto`

---

## 5. Button Component

### Requirement: Button renders an anchor/button with variant-specific styling

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'submit' \| 'gist' \| 'link' \| 'lightbox'` | no | `'primary'` | Style variant |
| `href` | `string \| undefined` | no | — | If set, renders `<a>`, else `<button>` |
| `disabled` | `boolean` | no | `false` | Only applies to `<button>` elements |

| Variant | Classes |
|---------|---------|
| `primary` | `w-full sm:w-auto rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors duration-200 text-center flex items-center justify-center gap-2` |
| `secondary` | same as primary but `bg-gray-800 hover:bg-gray-700 focus-visible:outline-gray-500` |
| `submit` | `group/btn relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 disabled:hover:translate-y-0 disabled:cursor-not-allowed text-white font-bold text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden w-full md:w-auto min-w-[180px]` |
| `gist` | `inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-400 transition-colors duration-300` |
| `link` | `inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline` |
| `lightbox` | same as `link` plus `js-trigger-lightbox` |

#### Scenario: primary button renders as anchor with icon slot

- GIVEN `<Button variant="primary" href="/projects"><Eye /> View</Button>`
- WHEN rendered
- THEN output MUST be `<a href="/projects" class="w-full sm:w-auto ...">`
- AND icon renders inside before text

#### Scenario: submit button renders disabled state

- GIVEN `<Button variant="submit" disabled>Saving</Button>`
- WHEN rendered
- THEN output MUST include `disabled` attribute
- AND class MUST include `disabled:bg-blue-400 disabled:hover:translate-y-0 disabled:cursor-not-allowed`

---

## 6. TechBadge Component

### Requirement: TechBadge renders a technology label with variant-specific styling

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | `'hero-tech' \| 'floating' \| 'mobile' \| 'duration' \| 'profile'` | no | `'hero-tech'` | Visual style |

| Variant | Classes |
|---------|---------|
| `hero-tech` | `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20` |
| `floating` | `px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white shadow-lg` |
| `mobile` | `px-2 py-1 text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-md` |
| `duration` | `text-xs font-bold text-blue-600 dark:text-blue-400 mb-4 bg-blue-600/5 px-3 py-1.5 rounded-full w-fit border border-blue-500/10 shadow-sm inline-flex items-center gap-2` |
| `profile` | `absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg` (requires `position` prop for animation class) |

---

## 7. Section Wrapper Component

### Requirement: Section wrapper provides consistent outer container with configurable padding, background, and max-width

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `string` | yes | — | Section id attribute |
| `py` | `'16' \| '20' \| '24'` | no | `'20'` | Vertical padding: py-16, py-20, or py-24 |
| `bgColor` | `'gray-50' \| 'white' \| 'gray-950' \| 'dark-blue'` | no | `'gray-50'` | Background preset |
| `maxWidth` | `'7xl' \| '6xl' \| '4xl' \| '1400px'` | no | `'7xl'` | Inner container max-width |
| `cursorGlow` | `'section-glow' \| 'none'` | no | `'none'` | Whether section-glow class is added |
| `showGlowEffect` | `boolean` | no | `false` | Whether to render section-cursor-glow div |

---

## 8. CursorGlow Shared Module

### Requirement: A single shared CursorGlow JS module replaces 4 duplicated instances

The system MUST provide a shared module `src/components/ui/CursorGlow.ts` (or `.js`) exporting:

```
setupCardGlow(selector?: string): void
setupSectionGlow(selector?: string): void
setupGlowEffects(): void    // calls both
```

### Behavior

| Mode | JS behavior | CSS injected | `astro:after-swap` registration |
|------|------------|-------------|-------------------------------|
| Card glow | `querySelectorAll('.card-glow')` → `mousemove` → sets `--mouse-x`/`--mouse-y` | `.cursor-glow` radial-gradient 600px (light/dark) | MUST re-register |
| Section glow | `querySelectorAll('.section-glow')` → `mousemove` → sets `--section-mouse-x`/`--section-mouse-y` | `.section-cursor-glow` radial-gradient 800px (light/dark), `.section-glow:hover .section-cursor-glow` opacity | MUST re-register |

### Bug Fix Requirement: QA showcase section-glow activation

The QA showcase section (`id="qa-showcase"`) currently has a `section-cursor-glow` div but the CSS selector `.section-glow:hover .section-cursor-glow` never activates because the section lacks `class="section-glow"`. The component MUST either:
- Add `class="section-glow"` to the QA showcase section, OR
- Use a JS-driven approach that targets `#qa-showcase` explicitly

### CSS Delivery

The shared CSS MUST be delivered via `<style is:global>` in Layout.astro (not duplicated per page) or via a shared CSS import. The CSS MUST match existing values exactly:

```css
.cursor-glow {
  border-radius: 1.5rem;
  background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgb(59 130 246 / 25%), transparent 40%);
}
.dark .cursor-glow {
  background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgb(96 165 250 / 20%), transparent 40%);
}
.section-cursor-glow {
  background: radial-gradient(800px circle at var(--section-mouse-x, 50%) var(--section-mouse-y, 50%), rgb(59 130 246 / 15%), transparent 50%);
}
.dark .section-cursor-glow {
  background: radial-gradient(800px circle at var(--section-mouse-x, 50%) var(--section-mouse-y, 50%), rgb(96 165 250 / 12%), transparent 50%);
}
.section-glow:hover .section-cursor-glow { opacity: 1 !important; }
```

---

## 9. Component Splits

### Requirement: Projects.astro splits into three files preserving exact rendered output

| New file | Content | Target line count |
|----------|---------|-------------------|
| `src/components/ProjectsCarousel.astro` | Carousel logic, project cards, scroll track | ~250 max |
| `src/components/CaseStudy.astro` | Case study section with image grid | ~250 max |
| `src/components/QAShowcase.astro` | QA documentation cards, bug cards, lightbox | ~250 max |
| `src/components/Projects.astro` | Orchestrator importing above 3 | ~50 max (imports + layout shell) |

#### Scenario: Projects.astro imports all three sub-sections unchanged

- GIVEN the original Projects.astro has 873 lines
- WHEN the split is applied
- THEN each sub-section component MUST produce identical HTML output to the original inline version
- AND Projects.astro MUST be <= 300 lines total

### Requirement: Welcome.astro is deleted

The system MUST delete `src/components/Welcome.astro` as dead code (default Astro starter template).

#### Scenario: no imports reference Welcome.astro

- GIVEN the codebase before deletion
- WHEN searching for all imports of Welcome.astro
- THEN zero results MUST be found before deletion

---

## 10. Inline SVG Migration

### Requirement: All inline SVGs compatible with lucide-react are replaced

The following inline SVGs MUST be replaced with lucide-react components (already a dependency):

| Location | SVG | lucide-react component |
|----------|-----|----------------------|
| About.astro, Skills.astro (Code icon) | `M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4` | `<Code />` |
| About.astro (UI/UX icon) | Document path (FileText) | `<FileText />` |
| About.astro, Projects.astro (lightning) | `M13 10V3L4 14h7v7l9-11h-7z` | `<Zap />` |
| Skills.astro, Projects.astro (file icon) | FileText path | `<FileText />` |
| Projects.astro (warning) | AlertTriangle path | `<AlertTriangle />` |
| Projects.astro (x-circle) | XCircle path | `<XCircle />` |
| Hero.astro (eye icon) | Eye path | `<Eye />` |
| Hero.astro (download) | Download path | `<Download />` |
| Hero.astro (chat) | MessageCircle path | `<MessageCircle />` |
| SocialMenu.astro (mail) | Mail path | `<Mail />` |
| SocialMenu.astro (share, copy, check) | Share/Copy/Check paths | `<Share /> <Copy /> <Check />` |

The GitHub, LinkedIn, WhatsApp, and Twitter SVGs in SocialMenu.astro MAY remain as inline SVGs (no lucide-react equivalent for branded icons).

---

## 11. CSS Fixes

### Requirement: no-scrollbar CSS class is properly defined

The Projects.astro carousel uses class `no-scrollbar` (line 106) but the CSS for this class MUST be verified to exist in the global stylesheet or added to Layout.astro's `<style is:global>`.

---

## 12. Testing Requirements

### Requirement: Each atomic component has a unit test

| Component | Test coverage | Min assertion count |
|-----------|--------------|---------------------|
| `SectionHeader` | Renders each variant; checks exact class output | 6 |
| `GlassCard` | Renders each variant; checks exact class output; verifies glow div presence/absence | 10 |
| `GradientDivider` | Renders both variants; checks exact classes | 2 |
| `IconBox` | Renders all size+color combos; checks centered flag | 4 |
| `Button` | Renders all 6 variants; checks href vs button element; checks disabled state | 8 |
| `TechBadge` | Renders all 5 variants; checks exact classes | 5 |
| `Section` | Renders with different py/maxWidth values | 3 |
| `CursorGlow` | Unit tests for JS functions (Vitest, no DOM) | 3 |

#### Scenario: GlassCard variant class output is verified by snapshot

- GIVEN the GlassCard component
- WHEN each variant is rendered in a test
- THEN the class attribute of the outer element MUST match the CSS Contract table exactly
- AND a snapshot test captures the full HTML output

### Requirement: Coverage threshold

- Overall project coverage MUST stay >= 80% after refactor
- All existing E2E tests MUST pass (Nightwatch)

---

## 13. Acceptance Scenarios

### Scenario: All 14 section headers render identically to current output

- GIVEN the original 14 section header instances across About, Skills, Experience, Projects, News, Contact
- WHEN each is replaced with `<SectionHeader />`
- THEN the rendered HTML per instance MUST match the pre-refactor output byte-for-byte

### Scenario: All ~20 glass cards render identically to current output

- GIVEN the original ~20 glass card instances
- WHEN each is replaced with `<GlassCard />`
- THEN the rendered HTML per instance MUST match the pre-refactor output byte-for-byte

### Scenario: No visual regression across breakpoints

- GIVEN the component extraction
- WHEN tested at sm (640px), md (768px), and lg (1024px) viewport widths
- THEN layout, spacing, typography, and colors MUST be identical to pre-refactor

### Scenario: No console errors

- GIVEN the refactored application
- WHEN loaded in Chromium and Firefox
- THEN the browser console MUST show zero errors and zero warnings

### Scenario: E2E tests pass

- GIVEN the refactored codebase
- WHEN Nightwatch E2E tests are executed
- THEN all scenarios MUST pass with zero failures

### Scenario: Projects.astro is under 300 lines

- GIVEN the split into ProjectsCarousel, CaseStudy, QAShowcase
- WHEN counting non-blank, non-comment lines in Projects.astro
- THEN the count MUST be <= 300

### Scenario: ~920 lines of duplication eliminated

- GIVEN the total pre-refactor duplicated markup across all components
- WHEN measured as the sum of (original lines - final lines) across all modified files
- THEN the reduction MUST be >= 800 lines
