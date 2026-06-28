# Atomic UI Component Refactor — Task Checklist

## Review Workload Forecast

- **New files**: ~17 (8 UI components + 4 icons + 1 lib module + 1 CSS + 3 Projects-split)
- **Modified files**: ~10 (9 section components + 1 layout)
- **Deleted files**: 1 (Welcome.astro)
- **Estimated total diff**: ~3,200 lines (added + deleted)
- **400-line budget risk**: HIGH (estimated ~3,200 lines)
- **Chained PRs recommended**: YES
- **Decision needed before apply**: Delivery strategy (ask-on-risk)

---

## Phase 0: Scaffolding (Foundation)

### T1 — Create directory structure

- **Action**: Create `src/components/ui/`, `src/components/sections/`, `src/components/icons/`, `src/lib/`, `src/styles/` (note: styles/ exists, the rest are new)
- **Spec ref**: Implicit — all component files need these directories
- **Dependencies**: None
- **Verification**: Directories exist and are referenced in imports

---

## Phase 1: Shared Modules (can run after T1)

### T2 — Create shared cursorGlow.ts

- **Action**: Create `src/lib/cursorGlow.ts` exporting `setupCardGlow(selector?: string)`, `setupSectionGlow(selector?: string)`, `setupGlowEffects()` (calls both + registers astro:after-swap). Replaces 4 duplicated JS blocks.
- **Spec ref**: Section 8 — CursorGlow Shared Module
- **Dependencies**: T1
- **Verification**: Module exists, exports 3 functions, JS logic matches existing duplicated blocks exactly

### T3 — Create shared cursor-glow.css

- **Action**: Create `src/styles/cursor-glow.css` with exact .cursor-glow, .section-cursor-glow, .section-glow:hover classes extracted from About.astro/Skills.astro/Contact.astro scoped styles. Use `border-radius` CSS variable per card type.
- **Spec ref**: Section 8 — CSS Delivery; Design: CSS Duplication Handling
- **Dependencies**: T1
- **Verification**: CSS file contains exact same selectors and values as current duplicated blocks; all 4 duplicated instances' CSS is consolidated

### T4 — Import cursor-glow.css in Layout.astro

- **Action**: Add `import '../styles/cursor-glow.css';` to Layout.astro frontmatter
- **Spec ref**: Section 8 — CSS delivery via global import
- **Dependencies**: T3
- **Verification**: Build succeeds, cursor glow effects still work

---

## Phase 2: Atomic UI Components (parallelizable within phase)

### T5 — Create SectionHeader.astro

- **Action**: Create `src/components/ui/SectionHeader.astro` with variant prop mapping to internal class dictionaries for 3 variants (gradient-accent, gradient-cyan, skills-subsection), optional accent span logic, title/subtitle/divider structure, configurable heading tag (h2/h3)
- **Spec ref**: Section 1 — SectionHeader Component
- **Dependencies**: T1
- **Verification**: All 3 variants render exact class strings per CSS Contract table; accent spans render in correct position; divider renders with variant-specific classes; h3 renders for skills-subsection variant

### T6 — Create GlassCard.astro

- **Action**: Create `src/components/ui/GlassCard.astro` with 7 variants (full, soft-skills, compact, experience, contact-form, project-showcase, news), configurable padding, hover effect, cursor glow type, gradient overlay. Variant map must include inner/outer class dictionaries and conditional child elements (cursor-glow div, overlay div).
- **Spec ref**: Section 2 — GlassCard Component
- **Dependencies**: T1
- **Verification**: All 7 variants produce exact outer classes per CSS Contract; compact variant omits cursor-glow div; experience variant produces two-layer structure; project-showcase variant renders correct classes

### T7 — Create GradientDivider.astro

- **Action**: Create `src/components/ui/GradientDivider.astro` with 2 variants (solid-blue, blue-cyan). Thin horizontal divider with exact class strings.
- **Spec ref**: Section 3 — GradientDivider Component
- **Dependencies**: T1
- **Verification**: Both variants produce exact class strings; renders as a div

### T8 — Create IconBox.astro

- **Action**: Create `src/components/ui/IconBox.astro` with size (sm/md/lg/xl/dynamic), color (gradient-blue/light-blue/dynamic), centered boolean, noMarginBottom boolean. Maps to class dictionaries per size+color matrix.
- **Spec ref**: Section 4 — IconBox Component
- **Dependencies**: T1
- **Verification**: lg/gradient-blue produces correct wrapping; centered adds mx-auto; dynamic size omits fixed w/h; ReactNode icon renders inside container

### T9 — Create Button.astro

- **Action**: Create `src/components/ui/Button.astro` with 6 variants (primary/secondary/submit/gist/link/lightbox), optional href (renders `<a>` vs `<button>`), disabled state. Variant map with exact class strings.
- **Spec ref**: Section 5 — Button Component
- **Dependencies**: T1
- **Verification**: Primary renders as `<a>` with correct classes; submit renders disabled attribute and class; link renders with hover:underline; lightbox includes js-trigger-lightbox class

### T10 — Create TechBadge.astro

- **Action**: Create `src/components/ui/TechBadge.astro` with 5 variants (hero-tech/floating/mobile/duration/profile). Maps variant key to exact class string.
- **Spec ref**: Section 6 — TechBadge Component
- **Dependencies**: T1
- **Verification**: All 5 variants produce exact class strings per spec table

### T11 — Create SectionWrapper.astro

- **Action**: Create `src/components/ui/SectionWrapper.astro` with props: id (required), py (16/20/24), bgColor (gray-50/white/gray-950/dark-blue), maxWidth (7xl/6xl/4xl/1400px), cursorGlow (section-glow/none), showGlowEffect (boolean). Renders section shell with cursor-glow div, background gradients, inner container with max-width.
- **Spec ref**: Section 7 — Section Wrapper Component
- **Dependencies**: T1
- **Verification**: Renders correct py-_, bg-_, max-w-\* classes; conditionally renders section-cursor-glow div; includes section-glow class when cursorGlow is set

---

## Phase 3: Icon Components (parallel with Phase 2)

### T12 — Create branded icon components

- **Action**: Create `src/components/icons/GitHub.astro`, `WhatsApp.astro`, `Twitter.astro`, and any non-lucide SVGs currently in SocialMenu.astro
- **Spec ref**: Section 10 — Inline SVG Migration (branded SVGs remain inline)
- **Dependencies**: T1
- **Verification**: Each icon renders the exact SVG path; name prop maps correctly

---

## Phase 4: Section Migration — Sequential (pilot first, then one per task)

- [x] ### T13 — Migrate Contact.astro (Pilot)
- **Action**: Replace inline section header with `<SectionHeader />`, inline glass card structure with `<GlassCard variant="contact-form" />`, inline cursor-glow JS block with import from `cursorGlow.ts`. Remove duplicated `<style>` blocks (now in cursor-glow.css). Preserve ALL form logic and StarBorder integration.
- **Spec ref**: Section 1-8 (component usage); Design: Migration Sequence step 2
- **Dependencies**: T2, T3, T4, T5, T6, T11
- **Verification**: Page loads, form works, section header renders identically, contact form card renders identically

- [x] ### T14 — E2E Verify after Contact migration
- **Action**: Run full Nightwatch E2E suite. Fix any regressions found. Confirm Contact section passes all existing tests.
- **Spec ref**: Section 12 — Testing Requirements; Design: step 3
- **Dependencies**: T13
- **Verification**: All E2E tests pass with zero failures

- [x] ### T15 — Migrate About.astro
- **Action**: Replace inline section header with `<SectionHeader />`, inline glass cards (3 skill cards + 1 main intro card) with `<GlassCard />` variants (full, compact), inline stat cards with `<GlassCard variant="soft-skills" />`, inline SVGs (Code, FileText, Zap) with `<IconBox>` wrapping `<Code />`, etc. Replace cursorGlow JS with import from cursorGlow.ts. Remove duplicated `<style>` blocks.
- **Spec ref**: Section 1-8 (component usage); Design: step 4
- **Dependencies**: T5, T6, T8, T11, T2, T3, T4
- **Verification**: All 4 glass cards render identically; section header renders identically; icons render identically; cursor glow works

- [x] ### T16 — Migrate Skills.astro
- **Action**: Replace inline section header with `<SectionHeader />`, inline glass cards (education cards, soft skills cards, SQL query cards) with `<GlassCard />` variants (full, soft-skills, compact). Replace inline SVGs (Code, FileText) with IconBox. Replace section header for Advanced SQL subsection with `<SectionHeader variant="skills-subsection" as="h3" />`. Replace cursorGlow JS with import from cursorGlow.ts. Remove duplicated `<style>` blocks.
- **Spec ref**: Section 1-8 (component usage); Design: step 5
- **Dependencies**: T5, T6, T8, T11, T2, T3, T4
- **Verification**: All ~9 glass cards render identically; section headers render identically; subsection skills-subsection variant renders correctly with invisible divider; SQL query cards retain exact structure

- [x] ### T17 — Migrate Experience.astro
- **Action**: Replace inline section header with `<SectionHeader variant="gradient-cyan" />` with marginBottom="20". Timeline structure and GlareHover cards remain (not extracted to GlassCard since they're wrapped in GlareHover). Replace inline duration badge with `<TechBadge variant="duration" />`. Background elements remain.
- **Spec ref**: Section 1, 6 (SectionHeader, TechBadge usage); Design: step 6
- **Dependencies**: T5, T10
- **Verification**: Section header renders with cyan gradient; duration badge renders identically; GlareHover interaction preserved; timeline structure unchanged

- [x] ### T18 — Migrate News.astro
- **Action**: Replace inline section header with `<SectionHeader />`. News carousel logic remains (is JS-driven). Remove inline gradient divider, SectionHeader handles it. Carousel buttons, skeleton loaders, and JS remain.
- **Spec ref**: Section 1 (SectionHeader usage); Design: step 7
- **Dependencies**: T5
- **Verification**: Section header renders identically; carousel still works; scrollbar-hide class still functional

- [x] ### T19 — Migrate Hero.astro
- **Action**: Replace inline CTA buttons (3 `<a>` elements) with `<Button variant="primary">` and `<Button variant="secondary">`. Replace inline SVGs (Eye, Download, MessageCircle) with lucide-react icons in Button children. Preserve hero image, badges, CircularText, LightRays, and tech stack badges.
- **Spec ref**: Section 5 (Button usage); Section 10 (SVG migration); Design: step 8
- **Dependencies**: T9
- **Verification**: All 3 buttons render identically (primary with eye icon, primary with download icon, secondary with message icon); hero layout unchanged

- [x] ### T20 — Migrate Footer.astro
- **Action**: Review Footer.astro — it already uses lucide-react for Github, Linkedin, Mail icons. No inline SVGs need replacement (branded icons already in lucide). If any custom SVG icons exist, replace with icon components. No section wrapper or section header needed here.
- **Spec ref**: Section 10 (SVG migration); Design: step 9
- **Dependencies**: None (trivial migration, verify no changes needed)
- **Verification**: Footer renders identically, icons unchanged

---

## Phase 5: Projects.astro Split (last migration)

### T21 — Extract ProjectsCarousel.astro

- **Action**: Create `src/components/sections/ProjectsCarousel.astro` containing the project cards carousel (~lines 69-209 of original Projects.astro). Include project data, StarBorder, card markup, floating tags, action buttons. Import image assets. The section wrapper, section header, and cursor glow will use UI components.
- **Spec ref**: Section 9 — Component Splits (ProjectsCarousel, ~250 lines max)
- **Dependencies**: T5, T6, T8, T10, T11, T2, T3, T4
- **Verification**: Carousel renders identical project cards; scroll behavior works; StarBorder interactions preserved

### T22 — Extract CaseStudy.astro

- **Action**: Create `src/components/sections/CaseStudy.astro` containing the case study gallery (~lines 211-405 of original Projects.astro). Include image grid, StarBorder, lightbox triggers, description card with IconBox and Zap icon. Import all case study image assets.
- **Spec ref**: Section 9 — Component Splits (CaseStudy, ~250 lines max)
- **Dependencies**: T5, T6, T8, T10, T11
- **Verification**: Case study gallery renders identically; StarBorder interactions preserved; lightGallery integration works

### T23 — Extract QAShowcase.astro

- **Action**: Create `src/components/sections/QAShowcase.astro` containing the QA section (~lines 409-596 of original Projects.astro). Include bento grid, documentation card, bug cards with IconBox, lightbox buttons. Import QA image assets. **Fix cursor glow bug**: add `section-glow` class to QA section wrapper.
- **Spec ref**: Section 9 (QAShowcase); Section 8 (QA cursor glow bug fix); Design: step 10, 13
- **Dependencies**: T5, T6, T8, T10, T11
- **Verification**: QA section renders identically; section cursor glow now activates on hover (bug fix verified)

### T24 — Rewrite Projects.astro as Orchestrator

- **Action**: Replace original 873-line Projects.astro with a ~50-line orchestrator that imports and renders ProjectsCarousel, CaseStudy, QAShowcase, and SectionWrapper. Include SectionHeader and the main section shell. Move shared assets (projects-pattern CSS, LightGallery JS, scroll logic) into appropriate shared locations. LightGallery initialization JS stays in orchestrator or moves to CaseStudy/QAShowcase as needed.
- **Spec ref**: Section 9 — Projects.astro <= 300 lines, orchestrator pattern
- **Dependencies**: T21, T22, T23 (must exist before orchestrator imports them)
- **Verification**: Projects.astro <= 300 lines; all 3 sub-sections render identically to original; LightGallery works for both case study and QA; carousel scroll works

---

## Phase 6: Cleanup & CSS Fixes

### T25 — Delete Welcome.astro

- **Action**: Verify no imports reference Welcome.astro, then delete `src/components/Welcome.astro`
- **Spec ref**: Section 9 — Welcome.astro deletion
- **Dependencies**: None (dead code, remove anytime)
- **Verification**: Grep for Welcome.astro imports returns zero; build succeeds without the file

### T26 — Fix no-scrollbar CSS class

- **Action**: Move `.scrollbar-hide` CSS from News.astro `<style>` (currently in scoped style) to global cursor-glow.css or Layout.astro is:global style. The Projects.astro carousel also uses `no-scrollbar` class — ensure it's covered.
- **Spec ref**: Section 11 — no-scrollbar CSS fix; Design: step 12
- **Dependencies**: T3 (cursor-glow.css exists), T24 (Projects split)
- **Verification**: Projects carousel scroll hides scrollbar; News carousel scroll hides scrollbar

### T27 — Final CSS deduplication check

- **Action**: Audit all section files for remaining duplicated `<style>` blocks that should be in shared cursor-glow.css. Remove any .cursor-glow / .section-cursor-glow scoped CSS if it exists after migration.
- **Spec ref**: Design: CSS Duplication Handling (200+ lines eliminated)
- **Dependencies**: T15, T16, T13, T4 (after all migrations)
- **Verification**: Only one copy of cursor-glow CSS exists (in cursor-glow.css); zero scoped duplicates

---

## Phase 7: Unit Tests

### T28 — Write SectionHeader unit tests

- **Action**: Create test file for SectionHeader.astro. Test all 3 variants produce exact class output per CSS Contract. Test accentPosition logic, marginBottom, as prop. Min 6 assertions.
- **Spec ref**: Section 12 — Testing Requirements (SectionHeader: 6 assertions)
- **Dependencies**: T5
- **Verification**: 6+ test assertions pass; each variant verified

### T29 — Write GlassCard unit tests

- **Action**: Create test file for GlassCard.astro. Test all 7 variants produce exact outer classes per CSS Contract. Test cursor-glow div presence/absence (compact variant). Test hover effect classes. Min 10 assertions.
- **Spec ref**: Section 12 — Testing Requirements (GlassCard: 10 assertions)
- **Dependencies**: T6
- **Verification**: 10+ test assertions pass; compact variant verifies no cursor-glow div

### T30 — Write GradientDivider unit tests

- **Action**: Test both variants produce exact class strings. Min 2 assertions.
- **Spec ref**: Section 12 (GradientDivider: 2 assertions)
- **Dependencies**: T7
- **Verification**: Both variants produce exact class output

### T31 — Write IconBox unit tests

- **Action**: Test size+color combinations, centered flag, noMarginBottom flag. Min 4 assertions.
- **Spec ref**: Section 12 (IconBox: 4 assertions)
- **Dependencies**: T8
- **Verification**: lg/gradient-blue renders correct wrapping; centered adds mx-auto

### T32 — Write Button unit tests

- **Action**: Test all 6 variants produce correct classes. Test href renders `<a>`, no href renders `<button>`. Test disabled state and classes. Min 8 assertions.
- **Spec ref**: Section 12 (Button: 8 assertions)
- **Dependencies**: T9
- **Verification**: 8+ test assertions pass; element type correct per href presence

### T33 — Write TechBadge unit tests

- **Action**: Test all 5 variants produce exact class strings. Min 5 assertions.
- **Spec ref**: Section 12 (TechBadge: 5 assertions)
- **Dependencies**: T10
- **Verification**: All 5 variants verified

### T34 — Write SectionWrapper unit tests

- **Action**: Test renders with different py/maxWidth/bgColor combinations. Test section-glow class conditional rendering. Min 3 assertions.
- **Spec ref**: Section 12 (Section Wrapper: 3 assertions)
- **Dependencies**: T11
- **Verification**: 3+ test assertions pass

### T35 — Write cursorGlow unit tests

- **Action**: Test all 3 exported functions exist. Test astro:after-swap event listener registration. Test DOM queries (card-glow, section-glow selectors). Min 3 assertions (Vitest, no DOM required for existence tests).
- **Spec ref**: Section 12 (CursorGlow: 3 assertions)
- **Dependencies**: T2
- **Verification**: 3+ test assertions pass

---

## Phase 8: Final Verification

### T36 — Run full E2E test suite

- **Action**: Execute the complete Nightwatch E2E suite. Verify all existing tests pass. Check for console errors in Chromium and Firefox at sm/md/lg viewports.
- **Spec ref**: Section 13 — Acceptance Scenarios (all E2E tests pass, no console errors, no visual regression)
- **Dependencies**: ALL previous tasks (T1-T35)
- **Verification**: Zero E2E failures; zero console errors in Chromium + Firefox; layout identical at 640px/768px/1024px

### T37 — Measure duplication reduction

- **Action**: Run line count diff between original sections and refactored sections. Verify >= 800 lines of duplication eliminated.
- **Spec ref**: Section 13 — ~920 lines eliminated >= 800
- **Dependencies**: T36 (all migrations complete)
- **Verification**: Total line reduction >= 800 lines (sum of removed inline patterns from all sections)

### T38 — Coverage threshold verification

- **Action**: Run coverage report. Verify overall project coverage >= 80%.
- **Spec ref**: Section 12 — Coverage threshold >= 80%
- **Dependencies**: T28-T35 (all unit tests)
- **Verification**: Coverage report shows >= 80%

---

## Dependency Summary

```
Phase 0: T1 (no deps)
Phase 1: T2 ← T1, T3 ← T1, T4 ← T3
Phase 2: T5-T11 ← T1 (all parallel)
Phase 3: T12 ← T1 (parallel with Phase 2)
Phase 4: T13 ← T2,T3,T4,T5,T6,T11; T14 ← T13; T15-T20 ← various Phase2 components
Phase 5: T21-T23 ← Phase2 components; T24 ← T21,T22,T23
Phase 6: T25 (no deps); T26 ← T3,T24; T27 ← T4,T15,T16,T13
Phase 7: T28-T35 ← respective Phase2 components (parallel with Phase 4+5+6)
Phase 8: T36 ← all; T37 ← T36; T38 ← T28-T35
```

## Key Constraints

- **Zero visual changes**: Every migration must preserve EXACT HTML output. Run E2E after Contact migration (T13→T14) to validate the pattern.
- **One section at a time**: Do NOT batch migrations. Each section is its own task with its own verification.
- **CSS consolidation**: All cursor-glow CSS must be in one place (cursor-glow.css) before sections are migrated. Remove scoped `<style>` blocks as each section is migrated.
- **Projects split is last**: The Projects.astro section is the most complex and should only be split after ALL other sections are migrated and verified.
