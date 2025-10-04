# Quickstart: Landing Page

## Prerequisites
- Node.js 18+
- Yarn or npm

## Install
```
yarn install
```

## Run Dev Server
```
yarn dev
```
Visit http://localhost:3000

## Run Tests
```
yarn test
```

## Verify Accessibility (Manual Pass)
1. Tab through: Skip → Nav → Hero CTA → Pillars → Footer.
2. Check color contrast with browser extension (all AA).
3. Disable JS: hero copy + pillars still readable.
4. Screen reader rotor: one main, one nav region.

## Performance Smoke
1. Build: `yarn build` then `yarn start`.
2. Run Lighthouse (mobile throttling) – verify ≥90 Performance.
3. Inspect hero HTML + critical CSS size (DevTools coverage or network panel) ≤25 KB uncompressed.

## Adding Copy
Edit `content/i18n/en/landing.json`; keep keys stable. Run tests to ensure no missing keys.

## Adding a New Pillar (Future)
1. Add keys: `pillars.<new>.title`, `pillars.<new>.desc`.
2. Append new pillar object to data source.
3. Add test to ensure description length & presence.

## Deploy (Future CI Stub)
- Lint, typecheck, test, build steps must pass.
- Lighthouse budget script (to be added) enforces performance threshold.
