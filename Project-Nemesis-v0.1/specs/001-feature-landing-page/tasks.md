# Tasks: Landing Page

**Input**: Design artifacts in `specs/001-feature-landing-page/` (spec.md, plan.md, data-model.md, research.md, quickstart.md)  
**Goal**: Implement accessible, performant landing page per FR-001..FR-024 and constitution v1.0.0.

## Execution Flow (main)
1. Run tasks sequentially unless marked [P] (parallel-safe).  
2. Write failing tests first (T006–T013) then implement components (T014+).  
3. Keep hero+critical CSS budget in scope (FR-023).  
4. Update README after implementation stabilization (T026).

## Phase 3.1: Setup
- [x] T001 Configure Tailwind: create `tailwind.config.ts` (palette, focus ring, font stack), add `postcss.config.js`, update `styles/globals.css` (base, components, utilities) [P]
- [x] T002 Create i18n file `content/i18n/en/landing.json` with keys: hero.*, pillars.*, domains.*, footer.*, nav.* [P]
- [x] T003 Add analytics stub `lib/analyticsStub.ts` exporting `track()` + env flag logic + initial unit test scaffold [P]
- [x] T004 Add `lib/i18n.ts` loader utility (read JSON, typed accessor) [P]
- [x] T005 Add Jest/RTL config (jest.config.cjs, jest.setup.ts) + test utils (a11y helpers placeholder) (if not present)

## Phase 3.2: Tests First (TDD) – MUST FAIL INITIALLY
- [ ] T006 [P] Hero component test `tests/components/Hero.test.tsx`: renders mission, CTA has role=button & accessible name
- [ ] T007 [P] NavBar test `tests/components/NavBar.test.tsx`: tab order, skip link reachable, no duplicate landmarks
- [ ] T008 [P] ValuePillars test `tests/components/ValuePillars.test.tsx`: correct count, order, heading levels
- [ ] T009 [P] SystemOverview lazy test `tests/components/SystemOverview.lazy.test.tsx`: placeholder before load, content after resolve
- [ ] T010 [P] Footer test `tests/components/Footer.test.tsx`: contact link, version text present
- [ ] T011 a11y smoke test `tests/accessibility/a11y-smoke.test.tsx`: landmark roles, single main/nav, language attr
- [ ] T012 Performance budget heuristic test `tests/components/HeroBudget.test.tsx`: approximate hero HTML length + style tag size < threshold (document heuristic)
- [ ] T013 Analytics stub test `tests/utils/analyticsStub.test.ts`: track no-op when flag unset; logs (mock) when flag set

## Phase 3.3: Core Implementation
- [ ] T014 Implement Hero component `app/components/Hero.tsx` using i18n keys & budget-friendly markup
- [ ] T015 Implement NavBar `app/components/NavBar.tsx` with semantic <nav aria-label="Primary"> + link list
- [ ] T016 Implement SkipLink `app/components/SkipLink.tsx` (visible on focus) & integrate into `app/layout.tsx`
- [ ] T017 Implement ValuePillars `app/components/ValuePillars.tsx` (map from local data structure) & enforce heading order
- [ ] T018 Implement SystemOverview `app/components/SystemOverview.tsx` with `next/dynamic` (no SSR) & skeleton placeholder
- [ ] T019 Implement Footer `app/components/Footer.tsx` with contact, version (read from package.json), canonical link assurance
- [ ] T020 Integrate analytics stub in Hero CTA (fire track('cta_click')) guarded by env flag
- [ ] T021 Compose `app/page.tsx` assembling all components & minimal data arrays (pillars, domains) referencing i18n keys

## Phase 3.4: Integration & Polish
- [ ] T022 Add focus-visible styles + reduced motion support in `globals.css` / `tokens.css` [P]
- [ ] T023 Add final a11y refinement (manual notes) & optional axe probe (skip if adds heavy dep) [P]
- [ ] T024 Validate contrast programmatically (simple luminance util) or document manual verification
- [ ] T025 Optimize SystemOverview load (ensure dynamic import chunk size; confirm no blocking assets)
- [ ] T026 Update `README.md` with feature summary, performance budget, i18n approach, analytics stub usage
- [ ] T027 Add Lighthouse script stub `scripts/lh-budget.md` documenting manual run & thresholds [P]

## Phase 3.5: Verification
- [ ] T028 Run full test suite (all green) & record hero size measure in a comment inside Hero test
- [ ] T029 Manual keyboard + screen reader pass documented in `tests/accessibility/README.md`
- [ ] T030 Create follow-up issue list (future: full i18n, dynamic data, axe automation)

## Dependencies
- Setup (T001–T005) precedes Tests (T006–T013)
- Tests (T006–T013) precede their corresponding components (T014–T021)
- SkipLink (T016) before final a11y refinement (T023)
- i18n file (T002) before components using copy (T014, T017, T018, T019, T021)
- Analytics stub (T003) before CTA integration (T020)

## Parallel Execution Examples
```
# Example 1: Run setup in parallel
T001 T002 T003 T004

# Example 2: Initial test wave (after setup)
T006 T007 T008 T009 T010 T013

# Example 3: Polish parallel
T022 T023 T027
```

## Task ID Legend
- [P]: Parallel-safe (distinct files / no shared global side effects)
- Non-[P]: Ordered due to dependency or shared file

## Notes
- Performance budget test (T012) heuristic; accept false positives initially with documented rationale.
- Avoid adding heavy a11y libraries until justified (Constitution Simplicity Principle).
- Dynamic import chunk verification (T025) ensures lazy strategy respected.

## Validation Checklist
- [ ] All tests written before implementation tasks executed
- [ ] All FR-001..FR-024 mapped to at least one task (budget: FR-023 → T012/T028, tone: FR-021 → T014, lazy overview: FR-009 → T018)
- [ ] Constitution principles referenced where tradeoffs arise
- [ ] Parallel groups contain no shared file paths
