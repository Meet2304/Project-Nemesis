# Project Nemesis - Judicial Management System

A comprehensive front-end application for a judicial management system built with Next.js, React, and TypeScript. This project provides a modern, responsive interface for managing court cases, documents, and judicial processes.

## 🚀 Features

### Landing Page
- **Professional Navigation Bar**: Links to About, News, Resources, Login/Signup, and Portal Access
- **Hero Section with Image Carousel**: Auto-rotating carousel with 3 placeholder images
- **Our Mission Section**: Displays core values (Transparency, Efficiency, Accessibility)
- **Our Work Section**: Showcases 6 key features of the system
- **Latest News Section**: Preview of recent news articles
- **Professional Footer**: Contact information, quick links, and social media

### Pages
- **Home/Landing Page**: Complete overview with all sections
- **About Page**: Information about the project, story, and leadership team
- **News Page**: Full listing of news articles with pagination
- **Resources Page**: Access to documentation, training, forms, and support materials
- **Login Page**: User authentication interface
- **Portal Page**: Dashboard with quick access to cases, documents, schedule, and more

### Technologies Used
- **Next.js 15**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality and consistency

## 📦 Project Structure

```
project-nemesis/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── news/
│   │   │   └── page.tsx
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── portal/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── MissionSection.tsx
│       ├── WorkSection.tsx
│       ├── NewsSection.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .eslintrc.json
```

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Custom Color Scheme**: 
  - Judicial Navy: `#1e3a5f` (Primary)
  - Judicial Gold: `#d4af37` (Accent)
  - Light Gray: `#f5f5f5` (Background)
- **Smooth Transitions**: Hover effects and animations
- **Accessibility**: ARIA labels and semantic HTML
- **Professional Typography**: Clear hierarchy and readability

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

5. **Run Linter**
   ```bash
   npm run lint
   ```

## 🌐 Available Routes

- `/` - Landing page with all sections
- `/about` - About page with project information
- `/news` - News listing page
- `/resources` - Resources and documentation page
- `/login` - User login page
- `/portal` - Dashboard for authenticated users

## 📝 Component Documentation

### Navbar
Professional navigation bar with mobile responsiveness
- Desktop menu with hover effects
- Mobile hamburger menu
- Login/Signup and Portal Access buttons

### HeroSection
Image carousel with auto-advance functionality
- 3 placeholder images
- Auto-rotation every 5 seconds
- Manual navigation with arrows and indicators

### MissionSection
Displays the mission statement and three core values
- Icon-based value cards
- Hover effects for interactivity

### WorkSection
Showcases six key features of the system
- Grid layout with icons
- Feature descriptions
- Call-to-action button

### NewsSection
Preview of latest news articles
- Category badges
- Date stamps
- "Read More" links

### Footer
Comprehensive footer with multiple sections
- Brand information
- Quick links
- Services list
- Contact information
- Social media icons
- Copyright and legal links

## 🔄 Future Enhancements

This is a shell project designed for easy expansion. Future additions may include:

1. **Backend Integration**
   - API routes for data fetching
   - CSV file database integration
   - Authentication system

2. **Advanced Features**
   - Case management dashboard
   - Document upload and management
   - Real-time notifications
   - Search functionality
   - User profiles and permissions

3. **Additional Pages**
   - Case details page
   - Document viewer
   - User settings
   - Admin panel

## 📄 Database Design (CSV Structure)

While this version uses placeholder data, the system is designed to work with CSV files for:
- Cases
- Users
- Documents
- Schedule/Hearings
- News Articles
- Resources

## 🤝 Contributing

This project follows professional coding practices:
- TypeScript for type safety
- Component-based architecture
- Reusable and maintainable code
- Clear documentation and comments
- Responsive and accessible design

## 📜 License

This is a shell project for educational and development purposes.

## 👥 Contact

For questions or support, please refer to the contact information in the footer of the application.

---

**Built with ❤️ for the judicial system modernization initiative**
