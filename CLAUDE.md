# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Commands
- `npm run dev` - Start development server with Express backend and React frontend (port 5000)
- `npm run build` - Build for production (Vite + ESBuild)
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes via Drizzle

### Astro Commands (Legacy/Alternative)
- `npx astro dev` - Start Astro development server
- `npm run build` - Build Astro static site
- `npm run preview` - Preview Astro production build

## Architecture Overview

This is a **hybrid application** with both modern React/Express stack and legacy Astro components:

### Current Active Stack (React/Express)
- **Frontend**: React with TypeScript, Vite bundler
  - Located in `client/src/`
  - Uses Wouter for routing
  - TanStack Query for state management
  - Radix UI + shadcn/ui components
  - Tailwind CSS for styling

- **Backend**: Express.js server
  - Located in `server/`
  - PostgreSQL database with Drizzle ORM
  - RESTful API endpoints
  - Session management with Passport.js

### Legacy Astro Stack
- Static site components in `src/`
- Configured for GitHub Pages deployment
- Uses Astro with React integration

### Key Directories
- `client/src/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared TypeScript schemas and types
- `src/` - Legacy Astro components and pages
- `attached_assets/` - Media files and assets
- `public/` - Static assets

### Database
- PostgreSQL with Drizzle ORM
- Schema defined in `shared/schema.ts`
- Connection configured via DATABASE_URL environment variable

### Path Aliases
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

## Important Notes

### Dual Architecture
This project contains both a modern React/Express application and legacy Astro components. The React app appears to be the primary active development target.

### No Test Framework
No test files exist in the project root - avoid assuming specific testing frameworks are available.

### Environment
- Development runs on port 5000
- Uses TypeScript with strict mode
- Configured for Replit deployment with specific plugins
- GitHub Pages deployment configured for Astro version

### Build Process
- Vite handles frontend bundling
- ESBuild compiles server for production
- Output goes to `dist/` directory