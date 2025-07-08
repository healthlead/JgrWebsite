# JGR Construction Website

A modern, professional website for JGR Construction Inc., a premier structural contracting company specializing in concrete and masonry construction in South Florida.

## 🏗️ Built With Astro

This website is built with [Astro](https://astro.build), optimized for static site generation and perfect for GitHub Pages deployment.

## 🚀 Quick Start

### Development (Recommended)
```bash
./start-astro.sh
```
This script will:
- Stop any conflicting servers
- Start the Astro development server
- Make your site available in the Replit preview

### Alternative Development
```bash
npm install
npx astro dev --host 0.0.0.0 --port 5000
```

### Build for Production
```bash
npx astro build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── images/          # Static images
│   ├── videos/          # Video assets
│   └── .nojekyll        # GitHub Pages configuration
├── src/
│   ├── components/      # Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── .github/
│   └── workflows/       # GitHub Actions
└── astro.config.mjs     # Astro configuration
```

## 🎨 Features

- **7 Complete Pages**: Home, Services, Projects, Contact, About, FAQ, Hard Hat Hub
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Authentic Branding**: JGR Construction's official colors and styling
- **Interactive Elements**: Contact forms, FAQ toggles, image galleries
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **GitHub Pages Ready**: Automated deployment workflow

## 🔧 Deployment

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to the `astro` branch

### Automatic Deployment
The site will automatically deploy when you push changes to the `astro` branch.

## 📞 Contact Information

**JGR Construction Inc.**  
8200 NW 52nd Terrace  
Medley, FL 33166  
Phone: (305) 262-7306  
Email: info@jgrconstruction.com

## 📄 License

© 2025 JGR Construction Inc. All rights reserved.