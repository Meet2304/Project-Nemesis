# Implementation Plan: Landing Page

**Branch**: `001-feature-landing-page` | **Date**: 2025-10-05 | **Spec**: ./spec.md
**Input**: Feature specification from `/specs/001-feature-landing-page/spec.md`

## Summary
Implement a performant, accessible, professional civic landing page for Project Nemesis featuring hero, value pillars, structured textual system overview (lazy), footer, accessibility and performance budgets (≤25 KB hero+critical CSS), lightweight analytics stub, and i18n key scaffolding.

## Technical Context
**Language/Version**: TypeScript (ES2023) via Next.js 14 App Router  
**Primary Dependencies**: next, react, react-dom, tailwindcss, postcss, autoprefixer, jest, @testing-library/react, eslint, prettier  
**Storage**: None (static content + future CSV optional)  
**Testing**: Jest + React Testing Library; potential axe integration future  
**Target Platform**: Web (modern evergreen browsers + screen readers)  
**Project Type**: web  
**Performance Goals**: ≥90 Lighthouse Performance (mobile), CLS negligible, TTI < 3.5s slow 4G  
**Constraints**: Hero+critical CSS ≤25 KB uncompressed, no third-party UI libs, WCAG 2.1 AA  
**Scale/Scope**: Single public page (foundation for future expansion)  

## Constitution Check
- Simplicity: No extra libs beyond mandated stack → PASS
- Accessibility (WCAG AA): Landmarks, focus, contrast, skip link → Incorporated
- Modular Architecture: Components isolated (Hero, Pillars, Overview, Footer, LayoutShell) → PASS
- Professional Civic Presentation: Tone clarified (FR-021) → PASS
- Test Discipline: Render & interaction tests planned → PASS (pending implementation)
- Performance & Responsiveness: Lazy system overview, budget FR-023 → PASS
- Transparency & Traceability: Spec + plan documented; analytics stub explicitly scoped → PASS

No deviations requiring justification.

## Project Structure
```
app/
  layout.tsx
  page.tsx
  components/
    Hero.tsx
    ValuePillars.tsx
    SystemOverview.tsx (dynamic import)
    Footer.tsx
    NavBar.tsx
    SkipLink.tsx
content/
  i18n/
    en/
      landing.json
lib/
  analyticsStub.ts
  i18n.ts
styles/
  globals.css
  tokens.css (optional design tokens layer)
tests/
  components/
    Hero.test.tsx
    NavBar.test.tsx
    ValuePillars.test.tsx
    SystemOverview.lazy.test.tsx
  accessibility/
    a11y-smoke.test.tsx
  utils/
    analyticsStub.test.ts
```
**Structure Decision**: Single Next.js App Router project with feature-scoped component directory under `app/components` for initial scale; i18n resource files in `content` for clarity.

## Phase 0: Outline & Research (research.md)
Questions & confirmations:
- Confirm Tailwind config tokens for civic palette & spacing.
- Determine minimal acceptable color palette meeting contrast.
- Decide heading levels hierarchy (Hero h1, Pillars h2, System Overview h2 with items h3).
- Evaluate dynamic import strategy for SystemOverview and measure bundle delta.
- Verify analytics stub pattern (env flag + tree-shaking no-op in production when disabled).

## Phase 1: Design & Contracts
### Data Model (data-model.md)
- ValuePillar { id, key, title, shortDescription, order }
- SystemDomain { id, key, name, summary }
- LocaleCopy { namespace, key, value, locale }

### UI Contracts
- Hero props: { mission: string; tagline: string; ctaLabel: string; onPrimaryClick?: () => void }
- ValuePillars props: { pillars: Array<{ title: string; description: string; icon?: ReactNode }> }
- SystemOverview props: { domains: Array<{ name: string; summary: string }> }
- NavBar props: { links: Array<{ href: string; label: string }> }
- Analytics stub: track(eventName: string, data?: Record<string, unknown>): void

Quickstart (quickstart.md) will show install, dev, run tests, verify a11y.

## Phase 2: Task Planning Approach
Will convert FRs to tasks: setup → tests (failing) → components → integration → polish. Each component receives: test first, then implementation, then a11y verification.

## Complexity Tracking
| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|--------------------------------------|
| (none) | | |

## Progress Tracking
**Phase Status**:
- [x] Phase 0: Research complete (/plan command) *seeded*
- [x] Phase 1: Design complete (/plan command)
- [x] Phase 2: Task planning complete (/plan command - approach documented)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: (to update after implementation adjustments if any)
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented (none currently)

---
*Based on Constitution v1.0.0 - See `/memory/constitution.md`*
