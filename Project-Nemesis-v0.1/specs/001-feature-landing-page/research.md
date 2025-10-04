# Research: Landing Page

## Color & Typography
- Palette: Primary deep navy (#0C1F33), Accent gold (#C6A34F), Background neutral (#F8F9FA), Text high contrast (#0E1113). All meet WCAG 2.1 AA with chosen pairings.
- Typography: System stack (ui-sans-serif) initially; future upgrade to accessible open licensed font (e.g., Source Sans 3) pending performance review.

## Heading Hierarchy
- h1: Hero mission
- h2: Value Pillars heading (visually hidden optional if decorative)
- h2: System Overview heading
- h3: Individual Pillars / Domain Items

## Dynamic Import Strategy
- `SystemOverview` via `next/dynamic` with `loading` placeholder (skeleton or aria-busy region) to reduce main bundle. Expect <3KB isolated component.

## Analytics Stub
- Implement `track()` that early-exits when env flag absent. Use named export to support future tree-shaken real implementation.

## Performance Considerations
- Avoid large hero imagery at MVP; rely on typography + subtle background gradient (pure CSS) for zero network cost.
- Preload primary font only when custom font introduced; for now system stack avoids blocking.

## Accessibility Checklist Baseline
- SkipLink appears on focus only.
- NavBar uses <nav aria-label="Primary"> with list semantics.
- Pillars list uses <ul> with <li><h3> for structure.
- System Overview uses <section aria-labelledby> pattern.

## i18n Scaffolding
- Single JSON file at `content/i18n/en/landing.json` with keys: hero.mission, hero.tagline, hero.cta, pillars.transparency.title, pillars.transparency.desc, etc.

## Open Questions (Closed by Clarifications)
- Tone: resolved (professional civic).
- System Overview format: resolved (textual list).
- Analytics: env-gated console only.
- Performance budget: ≤25 KB hero + critical CSS.
- i18n: lightweight scaffolding single locale.

## Decision Log
| Decision | Rationale | Alternatives | Status |
|----------|-----------|-------------|--------|
| Textual system overview | Faster first paint, simpler a11y | SVG diagram early | Accepted |
| Env analytics stub | Transparent future upgrade path | No stub, dataLayer | Accepted |
| ≤25 KB hero budget | Forces lean markup & styles | Higher early budget | Accepted |
