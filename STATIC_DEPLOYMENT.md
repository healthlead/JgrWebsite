# Static Deployment Guide for JGR Construction Website

## Overview
Your JGR Construction website can be deployed as a static website using several popular hosting platforms. The current setup uses React with Vite, which is perfect for static builds.

## Recommended Static Hosting Platforms

### 1. **Netlify** (Recommended)
- **Why**: Automatic builds from Git, great for React apps
- **Steps**:
  1. Connect your GitHub repository to Netlify
  2. Set build command: `npm run build`
  3. Set publish directory: `dist`
  4. Deploy automatically on Git pushes

### 2. **Vercel**
- **Why**: Optimized for React/Next.js apps
- **Steps**:
  1. Import your project to Vercel
  2. It will auto-detect the React setup
  3. Build command: `npm run build`
  4. Output directory: `dist`

### 3. **GitHub Pages**
- **Why**: Free hosting for GitHub repositories
- **Steps**:
  1. Add GitHub Actions workflow for building
  2. Deploy to `gh-pages` branch
  3. Enable GitHub Pages in repository settings

### 4. **Firebase Hosting**
- **Why**: Google's reliable hosting with CDN
- **Steps**:
  1. Install Firebase CLI: `npm install -g firebase-tools`
  2. Initialize: `firebase init hosting`
  3. Build: `npm run build`
  4. Deploy: `firebase deploy`

## Current Project Structure

```
JGR Construction Website/
├── client/src/          # React frontend source
├── server/              # Express backend (not needed for static)
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Build Configuration

The project uses Vite for building. The current build command builds both frontend and backend, but for static deployment you only need the frontend.

### Build Command for Static Deployment:
```bash
npx vite build
```

This will create a `dist` folder with all static files.

## Important Notes

1. **API Dependencies**: The current site uses API calls to fetch projects and services data. For static deployment, you have two options:
   - **Option A**: Keep the data as static imports (recommended for static sites)
   - **Option B**: Use a headless CMS or external API

2. **Contact Form**: The contact form currently posts to `/api/contact`. For static deployment, you'll need:
   - **Netlify Forms**: Add `netlify` attribute to form
   - **Formspree**: External form handling service
   - **EmailJS**: Client-side email service

3. **Environment Variables**: Any `VITE_` prefixed environment variables will be included in the build.

## Quick Deploy to Netlify

1. **Drag and Drop Method**:
   - Run `npx vite build` locally
   - Drag the `dist` folder to Netlify's deploy page
   - Your site will be live instantly

2. **Git Integration**:
   - Push your code to GitHub
   - Connect repository to Netlify
   - Set build settings and deploy

## Contact Form Solution for Static Deployment

Add this to your contact form in `client/src/components/contact-form.tsx`:

```jsx
// For Netlify Forms - add this attribute to your form
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  // ... your existing form fields
</form>
```

## Static Assets

Your images and assets in the `public` folder will be copied to the build directory automatically.

## Performance Benefits

Static deployment offers:
- **Faster Loading**: No server processing time
- **Better SEO**: Pre-rendered HTML
- **Global CDN**: Faster worldwide access
- **Cost Effective**: Many platforms offer free tiers
- **High Reliability**: No server maintenance needed

## Next Steps

1. Choose your preferred hosting platform
2. Modify the contact form for static deployment
3. Run the build command
4. Deploy your static files

The website is already optimized for static deployment and should work perfectly once built!