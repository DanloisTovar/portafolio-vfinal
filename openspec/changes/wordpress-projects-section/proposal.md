# Proposal: WordPress Projects Section

## Intent

The portfolio needs a dedicated section for WordPress + Elementor projects, separate from the existing front-end development projects. These are client sites with different characteristics (hosted, no public repos, CMS-based) that don't fit the current Projects section template. Adding a visually consistent horizontal-scroll section after the main Projects section lets the user showcase their full range without conflating two project categories.

## Scope

### In Scope
- New `WordPressProjects.astro` component (cloned from `Projects.astro` scroll section only)
- Insert `<WordPressProjects>` after `<Projects>` in `[lang]/index.astro`
- New i18n keys under `wordpressProjects.*` in `src/i18n/ui.ts`
- 3 WordPress project data entries with placeholder images
- "View site" links only (no "View code" / repo — WordPress sites are hosted)
- New unique DOM IDs (`#wordpress-projects`, `#wordpress-track`) for JS selectors
- Fix `no-scrollbar` class by adding it to `src/styles/global.css` (currently used but never defined)

### Out of Scope
- New nav item — section is discoverable via scroll
- Case Study or QA Showcase subsections — those are unique to the main Projects section
- LightGallery integration — no image galleries in this section
- Refactoring shared scroll logic — clone is simpler for a 2-section portfolio
- Real project screenshots — placeholder images initially

## Capabilities

### New Capabilities
- `wordpress-projects`: horizontal-scroll project showcase for WordPress + Elementor sites

### Modified Capabilities
- None (pure addition, no existing spec behavior changes)

## Approach

Clone the scroll section of `Projects.astro` (lines 69-208) into `src/components/WordPressProjects.astro` with these changes:

1. Replace all IDs: `#projects` -> `#wordpress-projects`, `#projects-track` -> `#wordpress-track`, `#projects-track-container` -> `#wordpress-track-container`
2. Replace i18n keys: use `wordpressProjects.*` instead of `projects.*` for title/subtitle/card content
3. Remove "View code" button from cards — only "View site" links remain
4. WordPress project data uses `{ title, desc, tags, image, url }` — no `repo` field
5. Client-side scroll JS mirrors Projects.astro logic but targets the new IDs
6. Add `.no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }` + `&::-webkit-scrollbar { display: none; }` to `global.css`

Insertion order in `[lang]/index.astro`: `<Projects />` then `<WordPressProjects />` then `<News />`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/WordPressProjects.astro` | New | Cloned scroll section, no case study/QA, no repo links |
| `src/pages/[lang]/index.astro` | Modified | Import and render WordPressProjects after Projects |
| `src/i18n/ui.ts` | Modified | ~20 new i18n keys for titles, subtitles, and 3 project entries |
| `src/styles/global.css` | Modified | Add `.no-scrollbar` utility class |
| `src/assets/` | New | 3 placeholder project images |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Scroll JS conflict with existing Projects scroll | Low | Independent IDs ensure no DOM selector collision |
| CSS `no-scrollbar` already defined elsewhere | Low | grep confirmed it's undefined — adding to global.css fixes both sections |
| Duplicated code drifts from original | Low | Portfolio has 2 sections max; intentional simplification per card |
| Placeholder images delay visual polish | Med | Accept as first iteration; real screenshots can replace later |

## Rollback Plan

1. Remove `import WordPressProjects` and the `<WordPressProjects>` tag from `[lang]/index.astro`
2. Delete `src/components/WordPressProjects.astro`
3. Remove `wordpressProjects.*` keys from `src/i18n/ui.ts`
4. Keep `.no-scrollbar` in `global.css` — it was already a latent bugfix

## Dependencies

None. This is a pure addition with no external packages or services.

## Success Criteria

- [ ] WordPressProjects.astro renders after main Projects section on both es/en pages
- [ ] Horizontal scroll works identically to main Projects section (desktop JS transform, mobile native scroll)
- [ ] All cards show "View site" link; no "View code" buttons appear
- [ ] i18n keys resolve correctly for both languages
- [ ] No console errors from duplicate IDs or missing DOM elements
- [ ] `.no-scrollbar` class works in both Projects.astro and WordPressProjects.astro
