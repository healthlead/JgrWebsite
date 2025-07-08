# GitHub Pages Deployment Checklist

## What You Need to Push to GitHub

To ensure your GitHub Pages site matches exactly what you see on Replit, make sure these files/folders are pushed:

### Essential Files:
- [ ] `astro.config.mjs` - Astro configuration
- [ ] `package.json` - Dependencies
- [ ] `package-lock.json` - Lock file
- [ ] `.github/workflows/deploy.yml` - GitHub Actions workflow

### Source Code:
- [ ] `src/` folder (all pages, components, layouts)
- [ ] `public/` folder with ALL assets:
  - [ ] `construction-video.mp4` (11MB)
  - [ ] `jgr-logo.png`
  - [ ] `favicon.svg`
  - [ ] `images/` folder with all construction photos

### Important Notes:
1. The `dist/` folder should NOT be pushed (it's in .gitignore)
2. GitHub Actions will build the site from source
3. Make sure you're on the `astro` branch when pushing

## Verify Before Push:
```bash
# Check all images are present
ls -lh public/images/

# Check video is present
ls -lh public/construction-video.mp4

# Verify build works locally
npx astro build
```

## Push Commands:
```bash
git add .
git commit -m "Update Astro site with all assets"
git push origin astro
```

The GitHub Action will automatically build and deploy to GitHub Pages.