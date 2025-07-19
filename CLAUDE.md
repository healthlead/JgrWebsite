# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Commands
- `npm run dev` - Start Astro development server
- `npm run build` - Build Astro static site for production
- `npm run preview` - Preview Astro production build
- `npm run check` - TypeScript type checking

## Architecture Overview

This is now a **pure Astro static site** optimized for Cloudflare Pages deployment:

### Current Stack (Astro Static Site)
- **Framework**: Astro with React integration for interactive components
- **Styling**: Tailwind CSS with custom variables
- **Build**: Static site generation (SSG)
- **Deployment**: Cloudflare Pages ready

### Key Directories
- `src/` - Astro pages, components, and layouts
- `public/` - Static assets (video, images, logo)
- `dist/` - Build output (7 static pages)

### Path Aliases
- `@/` → `src/`

## Important Notes

### Pure Static Site
This project is now a pure Astro static site with no backend dependencies.

### No Test Framework
No test files exist in the project root - avoid assuming specific testing frameworks are available.

### Environment
- Development runs on default Astro port (4321+)
- Uses TypeScript with strict mode
- Configured for Cloudflare Pages deployment

### Build Process
- Astro static site generation
- Output goes to `dist/` directory (7 pages)
- Ready for Cloudflare Pages deployment

## MIGRATION STATUS - React to Astro Conversion

### Project Goal
Converting hybrid React/Express + Astro to pure Astro static site for Cloudflare Pages deployment.

### ✅ COMPLETED PAGES (7/7)
1. **Homepage** (`src/pages/index.astro`) 
   - Video background hero, services grid, featured projects, stats section
   - Pixel-perfect match to React version

2. **Services** (`src/pages/services.astro`)
   - Custom SVG icon renderer using exact Lucide paths
   - 6 core services with proper descriptions from `server/storage.ts`
   - Process steps and capabilities sections

3. **Projects** (`src/pages/projects.astro`) 
   - Interactive Leaflet map with real Miami geography
   - Featured, completed, and upcoming project sections
   - Project data from `server/storage.ts` with exact coordinates

4. **About** (`src/pages/about.astro`)
   - Company story, growth stats, safety training
   - Values section with custom icons
   - Professional styling matching React version

5. **FAQ** (`src/pages/faq.astro`)
   - Interactive accordion with numbered badges
   - 12 FAQs with exact content from React version
   - Enhanced styling with professional images

6. **Contact** (`src/pages/contact.astro`)
   - Contact form with proper validation
   - Company headquarters information with interactive map
   - Service coverage areas and business hours

7. **Blog/Hard Hat Hub** (`src/pages/blog.astro`)
   - Featured and recent articles layout
   - Instagram feed integration
   - Newsletter subscription section

### ✅ RECENT IMPROVEMENTS
- **Navigation Fixed**: Resolved 404 errors by removing GitHub Pages BASE_URL references
- **Color Consistency**: Standardized gradient colors across all page banners
- **Layout Polish**: Improved Contact page layout and spacing consistency
- **Border Radius**: Unified all rounded corners to `rounded-xl` throughout the site
- **FAQ Enhancements**: Removed duplicate CTA section and fixed color scheme

### ✅ CLEANUP COMPLETED (July 19, 2025)
1. **Code Review & Cleanup**:
   - ✅ Removed all legacy React/Express code (`client/`, `server/`, `shared/`)
   - ✅ Cleaned up unused config files (`components.json`, `.github/workflows/`)
   - ✅ Removed development files (`temp.txt`, `deployment-checklist.md`, `replit.md`)
   - ✅ Eliminated duplicate assets (`attached_assets/` directory - 24 files, ~15MB)
   - ✅ Removed development screenshots (`screenshots/` - 8 files, ~6MB)
   - ✅ Fixed Hero video path from `/attached_assets/...` to `/construction-video.mp4`
   - ✅ Verified all 7 pages build successfully
   - ✅ Project optimized for Cloudflare Pages deployment

### 🎯 KEY ACCOMPLISHMENTS
- **Data Migration**: Complete extraction from `server/storage.ts`
- **Styling System**: Full CSS variables and Tailwind config migration
- **Interactive Components**: Custom icon system, map integration, accordions
- **Visual Fidelity**: Pixel-perfect replication of React designs

### 📁 FINAL PROJECT STRUCTURE
- **Astro Pages**: `src/pages/` (7 pages - index, services, projects, about, faq, contact, blog)
- **Components**: `src/components/` (Navbar, Footer, Hero, ProjectsMap, etc.)
- **Data**: `src/data/` (projects.ts, services.ts)
- **Styling**: `src/styles/global.css`, `tailwind.config.ts`
- **Static Assets**: `public/` (construction-video.mp4, jgr-logo.png, images/)

### 🚀 STATUS
**PROJECT COMPLETE** - Pure Astro static site with pixel-perfect fidelity. All legacy code removed. Optimized and ready for Cloudflare Pages deployment.