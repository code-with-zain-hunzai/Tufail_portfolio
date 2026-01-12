# Tufail Portfolio

A modern, responsive portfolio website showcasing the work and expertise of Tufail Ahmad, a B2B Growth & Digital Marketing Specialist focused on building predictable lead pipelines through SEO, paid media, and high-converting funnels.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations powered by Framer Motion
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Interactive Sections**:
  - Hero section with call-to-action
  - About section with resume download
  - Projects showcase with case studies
  - Tech stack and toolkit display
  - Experience timeline
  - Testimonials section
  - Blog section
  - Contact form
- **Performance Optimized**: Built with Next.js 16 for optimal performance and SEO
- **Type-Safe**: Written in TypeScript for better code quality and developer experience

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI Components
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library

### Additional Libraries
- **next-themes** - Theme management
- **react-hook-form** - Form handling
- **zod** - Schema validation
- **sonner** - Toast notifications

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/code-with-zain-hunzai/Tufail_portfolio.git
   cd tufail_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
tufail_portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── about.tsx            # About section
│   ├── blog-section.tsx     # Blog section
│   ├── contact.tsx          # Contact form
│   ├── experience.tsx       # Experience timeline
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section
│   ├── navbar.tsx           # Navigation bar
│   ├── projects.tsx         # Projects showcase
│   ├── tech-stack.tsx       # Tech stack display
│   ├── testimonials-section.tsx  # Testimonials
│   ├── theme-provider.tsx   # Theme context provider
│   └── theme-toggle.tsx     # Theme toggle button
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── styles/
    └── globals.css          # Additional global styles
```

## 🎨 Customization

### Update Personal Information
- Edit `components/about.tsx` to update your bio and information
- Update `components/hero.tsx` to change the hero section content
- Modify `components/contact.tsx` to update contact information

### Add Projects
Edit the `projectsData` array in `components/projects.tsx`:

```typescript
const projectsData = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "/project-image.png",
    tags: ["Tag1", "Tag2"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  // Add more projects...
]
```

### Update Tech Stack
Modify the `techStack` array in `components/tech-stack.tsx` to reflect your tools and technologies.

### Theme Customization
Edit `tailwind.config.ts` to customize colors, fonts, and other design tokens.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is private and proprietary.

## 👤 Author

**Tufail Ahmad**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ using Next.js and TypeScript
