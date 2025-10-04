# Data Model: Landing Page

## Entities
### ValuePillar
| Field | Type | Constraints | Notes |
|-------|------|------------|-------|
| id | string | unique | stable key (e.g., 'transparency') |
| key | string | unique | matches i18n key segment |
| title | string | non-empty | from i18n file |
| shortDescription | string | <=160 chars | from i18n file |
| order | number | >=0 | display sequence |
| icon | ReactNode? | optional | decorative only (aria-hidden) |

### SystemDomain
| Field | Type | Constraints | Notes |
|------|------|------------|------|
| id | string | unique | slug (e.g., 'case-intake') |
| key | string | unique | maps to i18n key |
| name | string | non-empty | i18n value |
| summary | string | <=200 chars | i18n value |

### LocaleCopy
| Field | Type | Constraints | Notes |
|-------|------|------------|------|
| namespace | string | 'landing' | fixed for MVP |
| key | string | namespace+path unique | dot notation (hero.mission) |
| value | string | non-empty | displayed text |
| locale | string | 'en' | future expandable |

## Relationships
- `ValuePillar.key` references `LocaleCopy.key` (title + description derive from two keys: `pillars.<pillar>.title` / `.desc`).
- `SystemDomain.key` references `LocaleCopy.key` (domain name + summary keys: `domains.<domain>.name` / `.summary`).

## State & Lifecycle
- Static build-time JSON hydration; no runtime mutation.
- Future extension: CMS or API-sourced copy swapped into same structure.

## Validation Rules
- All referenced i18n keys MUST exist at build time.
- Duplicate `order` values are allowed but discouraged; sorted ascending.
- `shortDescription` length enforced in tests to prevent layout overflow.

## Derived Data
- Display arrays sorted by `order` (pillars) or input order (domains) to maintain editorial intent.
