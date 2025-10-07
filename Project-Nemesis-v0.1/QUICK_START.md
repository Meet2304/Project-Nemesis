# Quick Start Guide

## Getting Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

### Installation

1. **Navigate to project directory**
   ```bash
   cd "c:\Meet\Projects\Project_5_Nemesis_Court Management System\Project-Nemesis\Project-Nemesis-v0.1"
   ```

2. **Install dependencies** (Already done)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```
   (or http://localhost:3001 if port 3000 is occupied)

## Available Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, mission, work, and news sections |
| `/about` | About page with project story and team |
| `/news` | News and announcements listing |
| `/resources` | Resources, documentation, and downloads |
| `/login` | User login page |
| `/portal` | Dashboard for authenticated users |

## Project Scripts

```bash
# Development
npm run dev          # Start dev server (hot reload)

# Production
npm run build        # Create optimized build
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## File Structure at a Glance

```
src/
├── app/
│   ├── page.tsx              # Home/Landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── about/page.tsx        # About page
│   ├── news/page.tsx         # News page
│   ├── resources/page.tsx    # Resources page
│   ├── login/page.tsx        # Login page
│   └── portal/page.tsx       # Portal dashboard
└── components/
    ├── Navbar.tsx            # Navigation bar
    ├── HeroSection.tsx       # Image carousel
    ├── MissionSection.tsx    # Mission statement
    ├── WorkSection.tsx       # Services showcase
    ├── NewsSection.tsx       # News preview
    └── Footer.tsx            # Footer
```

## Making Changes

### Adding a New Page

1. Create folder in `src/app/`
2. Add `page.tsx` file
3. Import Navbar and Footer
4. Add your content
5. Update Navbar links if needed

Example:
```typescript
// src/app/contact/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <main>
      <Navbar />
      {/* Your content here */}
      <Footer />
    </main>
  );
}
```

### Adding a New Component

1. Create file in `src/components/`
2. Use functional component with TypeScript
3. Export as default
4. Import where needed

Example:
```typescript
// src/components/MyComponent.tsx
import React from 'react';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <div className="p-4">
      <h2>{title}</h2>
    </div>
  );
};

export default MyComponent;
```

### Customizing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  judicial: {
    navy: '#1e3a5f',      // Change these
    gold: '#d4af37',      // to your
    lightGray: '#f5f5f5'  // preferred colors
  }
}
```

## Common Tasks

### Update Navigation Links
Edit `src/components/Navbar.tsx`

### Change Hero Images
Edit `src/components/HeroSection.tsx` - Update `slides` array

### Add News Articles
Edit `src/components/NewsSection.tsx` - Update `newsArticles` array

### Modify Mission Statement
Edit `src/components/MissionSection.tsx`

### Update Footer Info
Edit `src/components/Footer.tsx`

## Styling with Tailwind

### Common Classes
```
Spacing:     p-4, m-4, px-4, py-4, space-y-4
Layout:      flex, grid, block, inline
Sizing:      w-full, h-screen, max-w-7xl
Colors:      bg-white, text-gray-700, text-judicial-navy
Typography:  text-xl, font-bold, leading-relaxed
Responsive:  md:flex, lg:grid-cols-3
```

### Custom Colors
```
text-judicial-navy
text-judicial-gold
bg-judicial-navy
bg-judicial-gold
bg-judicial-lightGray
```

## Troubleshooting

### Port Already in Use
Next.js will automatically try another port (3001, 3002, etc.)

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
npx tsc --noEmit
```

### CSS Not Loading
Make sure `globals.css` is imported in `layout.tsx`

## Next Steps

1. ✅ Review the landing page
2. ✅ Check all navigation links
3. ✅ Test mobile responsiveness
4. 📝 Customize content and images
5. 📝 Add backend functionality
6. 📝 Implement authentication
7. 📝 Connect to CSV database

## Resources

- **README.md** - Project overview and features
- **DEVELOPER_GUIDE.md** - Detailed development guide
- **CSV_STRUCTURE.md** - Database structure reference

## Need Help?

1. Check the documentation files
2. Review Next.js docs: https://nextjs.org/docs
3. Check Tailwind docs: https://tailwindcss.com/docs
4. TypeScript handbook: https://www.typescriptlang.org/docs

---

**Happy Coding! 🚀**
