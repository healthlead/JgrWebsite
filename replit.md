# JGR Construction Inc. - Company Website

## Overview

This is a full-stack web application for JGR Construction Inc., a premier structural contracting company specializing in concrete and masonry construction in South Florida. The application showcases the company's services, projects, and provides a contact form for potential clients.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with development server integration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution
- **Production**: esbuild for server bundling

### Database & ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with drizzle-kit for migrations
- **Validation**: Zod schemas for type-safe data validation

## Key Components

### Frontend Structure
```
client/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── contact-form.tsx # Contact form with validation
│   │   ├── featured-projects.tsx
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── pages/               # Route components
│   ├── lib/                 # Utilities and configurations
│   └── hooks/               # Custom React hooks
```

### Backend Structure
```
server/
├── index.ts                 # Express server setup
├── routes.ts               # API route definitions
├── storage.ts              # Data access layer
└── vite.ts                 # Vite development integration
```

### Shared Types
```
shared/
└── schema.ts               # Drizzle schemas and Zod validators
```

## Data Flow

### API Endpoints
- `GET /api/projects` - Fetch all projects
- `GET /api/projects/featured` - Fetch featured projects only
- `GET /api/projects/:id` - Fetch specific project
- `GET /api/services` - Fetch all services
- `POST /api/contact` - Submit contact inquiry

### Database Schema
- **Projects**: Company portfolio with featured flag
- **Services**: Service offerings with icons and descriptions
- **Contact Inquiries**: Client contact submissions

### Data Storage Strategy
- Development: In-memory storage with seeded data
- Production: PostgreSQL with Drizzle ORM
- Migrations: Handled via drizzle-kit

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Development Tools
- **Vite**: Build tool with HMR and development server
- **Replit Integration**: Development environment support
- **TypeScript**: Type safety across the stack

### Database
- **Neon Database**: Serverless PostgreSQL provider
- **Connection Pooling**: Built-in with @neondatabase/serverless

## Deployment Strategy

### Development
- Single command: `npm run dev`
- Vite dev server with Express API proxy
- Hot module replacement for frontend
- TypeScript compilation via tsx

### Production Build
1. Frontend: Vite builds static assets to `dist/public`
2. Backend: esbuild bundles server code to `dist/index.js`
3. Database: Drizzle migrations via `npm run db:push`

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

## Changelog

- July 07, 2025. Fixed navigation and Instagram feed layout:
  - Removed "Contact" from navigation bar (logo serves as homepage link)
  - Fixed Contact page Button import error and restored proper two-column layout with map
  - Improved Instagram feed on Hard Hat Hub with clean three-column grid layout above the fold
  - Eliminated duplicate Instagram sections and broken image links
  - Enhanced Instagram posts with proper descriptions and hashtags
- July 07, 2025. Major website expansion and enhancements:
  - Added clickable phone number (305) 262-7306 to header navigation (desktop and mobile)
  - Updated footer copyright to 2025 JGR Construction Inc.
  - Created comprehensive FAQ page with 12+ frequently asked questions about construction services, safety, licensing, and project management
  - Built Hard Hat Hub blog index page showcasing industry insights, technical articles, and company expertise with categorized content
  - Enhanced Contact page with interactive Leaflet map showing company headquarters location in Medley, FL
  - Added detailed company contact information including business hours, licensing details, and emergency contact
  - Replaced footer placeholder boxes with professional certifications section (OSHA, CGC License, AGC Membership, BBB A+ Rating)
  - Updated navigation menu to include FAQ and Hard Hat Hub links
  - Integrated all new pages into routing system for seamless navigation
- July 07, 2025. Added dynamic video background to homepage hero section:
  - Replaced static background image with user's uploaded construction video
  - Configured Express server to serve video files from public directory
  - Video plays automatically with fallback to original image if needed
- July 07, 2025. Updated to authentic JGR Construction brand colors:
  - Implemented company's authentic color palette (#773B3C burgundy primary, #E7B008 sunflower yellow, #002642 prussian blue, #C3B8B6 silver gray, #111827 rich black)
  - Updated all hero sections, buttons, and key UI elements to use brand colors
  - Maintained professional construction industry aesthetic with authentic branding
- July 07, 2025. Major website implementation completed:
  - Built comprehensive 5-page multipage website (Home, Services, Projects, Contact, About)
  - Implemented interactive map component for Projects page with custom SVG solution
  - Added project location data with coordinates for Miami area visualization
  - Enhanced Contact page with detailed headquarters information and interactive office map
  - Improved Services page with process workflow and advanced capabilities section
  - Enhanced Home page with achievements section and comprehensive company introduction
  - Separated projects into Completed and Upcoming categories
- July 07, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.