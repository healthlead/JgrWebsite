# JGR Construction Website - Static Version

## Project Overview
A static website for JGR Construction Inc., a construction company based in Medley, Florida. The website showcases the company's services, projects, and contact information.

## Directory Structure

### Root Level
- `src/` - Astro source files (main static site)
- `src/data/` - Static data files (company info, projects, services, etc.)
- `public/` - Static assets (images, videos, favicon)
- `attached_assets/` - Additional media files

### Key Files
- `astro.config.mjs` - Astro configuration (set to static output)
- `package.json` - Dependencies and scripts (cleaned for static build)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Technologies Used
- **Astro** - Static site generator
- **React** - UI components (via @astrojs/react)
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Radix UI** - Component library

## Current Implementation Stage
The project has been successfully converted to a completely static website. All server-side functionality has been removed and replaced with static data files. The website is now ready for deployment to any static hosting platform.

## Data Flow
All data will be converted to static JSON files or inline data within components, removing any database dependencies.

## Entry Points
- `src/pages/index.astro` - Home page
- `src/pages/about.astro` - About page
- `src/pages/services.astro` - Services page
- `src/pages/projects.astro` - Projects page
- `src/pages/contact.astro` - Contact page
- `src/pages/blog.astro` - Blog page
- `src/pages/faq.astro` - FAQ page

## Components
- `src/components/Navbar.astro` - Navigation
- `src/components/Hero.astro` - Hero section
- `src/components/ServicesGrid.astro` - Services display
- `src/components/FeaturedProjects.astro` - Featured projects
- `src/components/Footer.astro` - Footer 