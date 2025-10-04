<!--
Sync Impact Report
Version change: (none prior) → 1.0.0
Modified principles: (initial creation)
Added sections: Core Principles, Architectural Standards, Delivery Workflow & Quality Gates, Governance
Removed sections: none
Templates requiring updates:
	- .specify/templates/plan-template.md ✅ (still compatible; reference to constitution version will update automatically when tooling reads this file)
	- .specify/templates/spec-template.md ✅ (no conflicting mandates)
	- .specify/templates/tasks-template.md ✅ (TDD emphasis aligned)
	- .specify/templates/agent-file-template.md ⚠ pending population by future plan executions
Deferred TODOs: none
-->

# Project Nemesis Constitution

## Core Principles

### 1. Simplicity First
All solutions MUST start with the least complex viable approach. Avoid premature abstraction. Every new component, utility, or dependency MUST have a clearly documented purpose. Remove or refactor code that is unused, duplicated, or creates accidental complexity. Favor readability over cleverness. If two designs deliver equivalent capability, choose the one with fewer moving parts.
Rationale: Simplicity accelerates onboarding, reduces defects, and improves long‑term maintainability for a civic system expected to evolve.

### 2. Accessibility by Design (WCAG 2.1 AA)
All UI elements MUST meet WCAG 2.1 AA contrast, structure, and interaction requirements. Keyboard navigation MUST be complete and logical. Semantic HTML MUST be preferred over div nesting. ARIA roles are additive only—never a substitute for semantic elements. Interactive focus states MUST be visible. Color alone MUST NOT communicate critical meaning. Changes to visual or interaction patterns MUST include an accessibility acceptance check.
Rationale: Court users include diverse abilities; accessibility is a legal, ethical, and operational requirement.

### 3. Modular & Scalable Architecture
Components MUST be cohesive, testable, and reusable. Shared logic belongs in well‑named utilities or hooks. Cross‑cutting concerns (theming, layout regions, navigation) MUST have defined extension points. No component may exceed a single, clear responsibility. Lazy loading MUST be applied to non‑critical or below‑fold modules to preserve performance. Public component contracts (props, return types) MUST be explicit and stable.
Rationale: Early modularity enables sustainable growth and controlled evolution without rewrites.

### 4. Professional Civic Presentation
The visual identity MUST reflect neutrality, clarity, and seriousness. Typography, spacing, and color usage MUST remain consistent with the design tokens. Decorative flourish is disallowed unless it improves comprehension. All user feedback (errors, states, confirmations) MUST be unambiguous and respectful. Branding changes MUST undergo a consistency review against existing tokens.
Rationale: Trust and legitimacy are reinforced through disciplined presentation.

### 5. Test Discipline & Quality Assurance
Critical utilities and complex logic MUST have unit tests. Every reusable UI component MUST have a baseline render test and at least one interaction test where applicable. No feature merges without all newly introduced tests passing. Tests MUST be deterministic and isolated. Snapshot tests are limited to stable, intentional visual structures (avoid brittle noise). Untested critical logic is a blocker.
Rationale: Predictable quality underpins reliability and judicial confidence.

### 6. Performance & Responsiveness
Layouts follow mobile‑first responsive design. Above‑the‑fold content MUST render without waiting on nonessential resources. Images MUST use Next.js Image optimization. Non‑visible heavy components MUST be code‑split or lazy‑loaded. Target: ≥90 Lighthouse Performance score on the landing page in a throttled mid‑range mobile profile. Regressions >5 point drop MUST trigger remediation before release.
Rationale: Fast, responsive systems reduce user friction and operational support burden.

### 7. Transparency & Traceability
Every material architectural or principle deviation MUST include justification in the pull request description. Configuration, environment assumptions, and design rationale MUST be captured in documentation (README, feature specs, or architecture notes). Commit messages MUST describe intent, not just what changed. Automated tooling MUST enforce lint, type, and test gates pre‑merge.
Rationale: Clear traceability enables audits, accountability, and efficient stewardship.

## Architectural Standards

1. Framework: Next.js (App Router) + TypeScript is the authoritative runtime environment.
2. Styling: TailwindCSS with enforced design tokens for color, spacing, and typography.
3. State Management: React built‑in (`useState`, `useReducer`, `useContext`) until a documented scaling trigger (e.g., >3 cross‑domain contexts or performance degradation) is reached.
4. Accessibility Utilities: Reusable primitives (e.g., `SkipLink`, `VisuallyHidden`, `FocusTrap` where needed) MUST be centralized.
5. File Structure (initial):
	 - `app/` (routes, layouts, metadata)
	 - `components/` (reusable presentational + container components)
	 - `lib/` (utilities, adapters)
	 - `styles/` (global styles, Tailwind layer extensions)
	 - `tests/` (unit, component segregation via naming)
6. Performance Controls: Use dynamic imports for non‑critical panels; ES module tree‑shaking MUST remain intact (avoid side‑effect imports).
7. Naming: Descriptive, domain‑aware naming; abbreviations only if industry‑standard (e.g., `UTC`).
8. Error Handling: User‑facing errors MUST be phrased non‑technically; internal logging (future) MUST preserve actionable context without exposing sensitive data.
9. Security Baseline: No inline event HTML, no unsanitized HTML rendering, environment variables restricted to those explicitly exposed via Next.js public prefix.
10. Dependency Governance: Adding a new third‑party library requires justification: problem solved, size impact, alternatives considered.

## Delivery Workflow & Quality Gates

1. Lint & Type Check MUST pass before commit merge.
2. Tests MUST pass locally or in CI; red builds block merges.
3. New components MUST include: a11y review (semantic + focus), story or usage doc (future), and render test.
4. Pull Requests MUST state: purpose, scope boundaries, unresolved risks, principle compliance notes (if relevant).
5. Architectural or principle deviations MUST include a remediation or acceptance decision.
6. Version of this constitution referenced in planning artifacts MUST match latest `Version` line below.
7. Performance budgets (initial): Largest contentful paint target ≤2.5s (simulated slow 4G), bundle first load JS ≤200KB (compressed) for landing page.
8. Documentation (README + feature specs) MUST be updated alongside code changes that alter user flows or architectural assumptions.

## Governance

Authority: This constitution governs design, implementation, review, and acceptance standards for Project Nemesis. In case of conflict with legacy practices, this document prevails.

Amendments: Any change requires (a) rationale, (b) classification (MAJOR/MINOR/PATCH), (c) explicit version bump, (d) updated Last Amended date, (e) sync review of dependent templates. MAJOR changes require consensus of designated maintainers (to be defined) and MUST include a migration or alignment plan. MINOR changes add or expand principles. PATCH changes clarify wording only.

Compliance Review: Every PR reviewer MUST verify adherence to Core Principles, Architectural Standards, and Quality Gates. Detected violations either (a) block merge or (b) are documented with an approved temporary exception and follow‑up task.

Versioning Policy: Semantic governance versioning: MAJOR (backward incompatible principle removal/redefinition), MINOR (new principle/section), PATCH (clarification). Tooling or documentation referencing the constitution MUST track the exact version.

Traceability: Planning templates MUST include a Constitution Check section referencing current version and listing any deviations.

Enforcement Escalation: Repeated unapproved deviations trigger mandatory architectural review before subsequent feature work proceeds.

Ratification: Initial version established upon first population of this file.

**Version**: 1.0.0 | **Ratified**: 2025-10-05 | **Last Amended**: 2025-10-05