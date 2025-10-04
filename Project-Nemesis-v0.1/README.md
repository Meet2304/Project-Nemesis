# Project Nemesis Landing Page

Modern, accessible landing page for Project Nemesis court management system.

## Features

- 🎯 **Professional Design**: Civic color palette (navy #0C1F33, gold #C6A34F)
- ♿ **WCAG 2.1 AA Compliant**: Full accessibility support with semantic HTML
- ⚡ **Performance Optimized**: ≤25 KB critical CSS budget, lazy loading
- 🌐 **i18n Ready**: Lightweight internationalization scaffolding
- 🧪 **Test-First**: TDD approach with Jest + React Testing Library
- 🎨 **TailwindCSS**: Utility-first styling with design tokens

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (ES2023)
- **Styling**: TailwindCSS
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Build

```bash
# Production build
npm run build

# Start production server
npm start
```

## Project Structure

```
.
├── app/
│   ├── components/         # React components
│   │   ├── Hero.tsx
│   │   ├── NavBar.tsx
│   │   ├── SkipLink.tsx
│   │   ├── ValuePillars.tsx
│   │   ├── SystemOverview.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── content/
│   └── i18n/en/
│       └── landing.json    # Copy content
├── lib/
│   ├── analyticsStub.ts    # Analytics tracking stub
│   └── i18n.ts             # i18n utilities
├── styles/
│   └── globals.css         # Global styles
├── tests/
│   ├── components/         # Component tests
│   ├── utils/              # Utility tests
│   └── accessibility/      # A11y tests
└── specs/
    └── 001-feature-landing-page/
        ├── spec.md         # Feature specification
        ├── plan.md         # Implementation plan
        └── tasks.md        # Task breakdown
```

## Constitution Compliance

This implementation follows the Project Nemesis Constitution v1.0.0:

- ✅ **Simplicity**: Minimal dependencies, clear component boundaries
- ✅ **Accessibility**: WCAG 2.1 AA, semantic HTML, keyboard navigation
- ✅ **Modularity**: Component-based architecture, reusable utilities
- ✅ **Professional**: Civic design tokens, formal tone
- ✅ **Test Discipline**: TDD approach, comprehensive test coverage
- ✅ **Performance**: ≤25 KB budget, lazy loading, ≥90 Lighthouse score
- ✅ **Transparency**: Clear documentation, inline comments

## Analytics

Analytics tracking is environment-gated via console stub:

```bash
# Enable analytics stub
NEXT_PUBLIC_ENABLE_ANALYTICS_STUB=true npm run dev
```

## License

Project Nemesis is a government modernization initiative. All rights reserved.

## Contact

For inquiries: contact@projectnemesis.gov
