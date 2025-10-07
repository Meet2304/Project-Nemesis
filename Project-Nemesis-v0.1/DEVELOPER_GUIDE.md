# Project Nemesis - Developer Guide

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Component Details](#component-details)
4. [Styling Guide](#styling-guide)
5. [Future Development](#future-development)
6. [Best Practices](#best-practices)

## Project Overview

Project Nemesis is a modern judicial management system built with:
- **Next.js 15** with App Router
- **React 18** for UI components
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### Key Features Implemented
✅ Responsive navigation bar with mobile menu
✅ Auto-rotating image carousel
✅ Mission statement with core values
✅ Services/features showcase
✅ News preview section
✅ Comprehensive footer
✅ Individual pages (About, News, Resources, Login, Portal)

## Architecture

### Folder Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── about/        # About page
│   ├── news/         # News listing page
│   ├── resources/    # Resources page
│   ├── login/        # Authentication page
│   ├── portal/       # Dashboard page
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
└── components/       # Reusable React components
    ├── Navbar.tsx
    ├── HeroSection.tsx
    ├── MissionSection.tsx
    ├── WorkSection.tsx
    ├── NewsSection.tsx
    └── Footer.tsx
```

### Component Hierarchy
```
Layout (layout.tsx)
└── Home Page (page.tsx)
    ├── Navbar
    ├── HeroSection
    ├── MissionSection
    ├── WorkSection
    ├── NewsSection
    └── Footer
```

## Component Details

### 1. Navbar Component
**File**: `src/components/Navbar.tsx`

**Features**:
- Responsive design (desktop + mobile)
- Hamburger menu for mobile devices
- Navigation links to all major pages
- Login and Portal Access buttons
- Sticky positioning

**State Management**:
```typescript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

**Styling Classes**:
- `bg-judicial-navy`: Navy blue background
- `text-judicial-gold`: Gold accent color
- Tailwind responsive utilities (`md:`, `lg:`)

### 2. HeroSection Component
**File**: `src/components/HeroSection.tsx`

**Features**:
- Auto-rotating carousel (5-second interval)
- Manual navigation (arrows + indicators)
- Smooth transitions
- Overlay for text readability

**State Management**:
```typescript
const [currentSlide, setCurrentSlide] = useState(0);
```

**Data Structure**:
```typescript
interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
```

### 3. MissionSection Component
**File**: `src/components/MissionSection.tsx`

**Features**:
- Mission statement display
- 3 core value cards (Transparency, Efficiency, Accessibility)
- Icon-based visual design
- Hover effects

### 4. WorkSection Component
**File**: `src/components/WorkSection.tsx`

**Features**:
- 6 service/feature cards
- Grid layout (responsive)
- SVG icons for each feature
- Call-to-action button

**Services Displayed**:
1. Case Management
2. Document Repository
3. Scheduling & Calendar
4. Analytics & Reporting
5. User Management
6. Notifications System

### 5. NewsSection Component
**File**: `src/components/NewsSection.tsx`

**Features**:
- News article preview cards
- Category badges
- Date stamps
- "Read More" links

**Data Structure**:
```typescript
interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}
```

### 6. Footer Component
**File**: `src/components/Footer.tsx`

**Features**:
- 4-column layout (responsive)
- Brand information
- Quick links
- Services list
- Contact information
- Social media icons
- Copyright and legal links

## Styling Guide

### Color Palette
```javascript
colors: {
  judicial: {
    navy: '#1e3a5f',    // Primary color
    gold: '#d4af37',    // Accent color
    lightGray: '#f5f5f5' // Background
  }
}
```

### Typography
- **Headings**: Bold, varying sizes (text-4xl, text-5xl)
- **Body**: Regular weight, gray-700 for readability
- **Links**: Gold color with navy hover state

### Spacing
- Sections: `py-16` (padding top/bottom)
- Containers: `max-w-7xl mx-auto`
- Grid gaps: `gap-8` or `gap-6`

### Responsive Breakpoints
- **sm**: 640px (small devices)
- **md**: 768px (medium devices)
- **lg**: 1024px (large devices)
- **xl**: 1280px (extra large)

## Future Development

### Phase 1: Backend Integration
1. **API Routes**
   - Create `/api` folder in `src/app`
   - Implement REST endpoints for CRUD operations
   - Add CSV file handling utilities

2. **CSV Database Structure**
   ```
   data/
   ├── cases.csv
   ├── users.csv
   ├── documents.csv
   ├── schedules.csv
   └── news.csv
   ```

3. **CSV Schema Examples**

   **cases.csv**:
   ```
   id,title,case_number,status,filed_date,judge,plaintiff,defendant
   ```

   **users.csv**:
   ```
   id,name,email,role,password_hash,created_at
   ```

### Phase 2: Authentication
1. Implement NextAuth.js
2. Add session management
3. Create protected routes
4. Role-based access control

### Phase 3: Dynamic Data
1. Replace static data with API calls
2. Implement data fetching hooks
3. Add loading states
4. Error handling

### Phase 4: Advanced Features
1. **Search Functionality**
   - Global search
   - Filtered results
   - Autocomplete

2. **File Uploads**
   - Document upload system
   - File validation
   - Storage management

3. **Real-time Updates**
   - Notifications
   - Case status changes
   - Schedule updates

## Best Practices

### 1. Code Organization
- One component per file
- Clear naming conventions
- JSDoc comments for documentation
- TypeScript interfaces for type safety

### 2. Component Design
- Functional components with hooks
- Props interface definitions
- Reusable and composable
- Separation of concerns

### 3. Performance
- Use `use client` only when needed
- Optimize images with Next.js Image component
- Lazy load components where appropriate
- Minimize bundle size

### 4. Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly

### 5. State Management
- Local state with `useState` for simple cases
- Consider Context API for shared state
- Future: Redux/Zustand for complex state

### 6. Error Handling
- Try-catch blocks for async operations
- User-friendly error messages
- Fallback UI components
- Error boundaries for React errors

## Development Workflow

### Starting Development
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

### Type Checking
```bash
npx tsc --noEmit
```

## Testing Strategy (Future)

### Unit Tests
- Component rendering
- Function logic
- Hook behavior

### Integration Tests
- API endpoints
- Form submissions
- Navigation flows

### E2E Tests
- User workflows
- Critical paths
- Cross-browser testing

## Deployment Options

1. **Vercel** (Recommended for Next.js)
2. **Netlify**
3. **AWS Amplify**
4. **Self-hosted** with Docker

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Last Updated**: October 8, 2025
**Version**: 0.1.0
**Maintainer**: Development Team
