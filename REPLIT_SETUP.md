# How to Run Your JGR Construction Website on Replit

## The Problem
Your project has both React and Astro versions. The default Replit workflow runs the React version (Express server), but your current website is built with Astro and has all the latest updates including logo and video fixes.

## The Solution

### Method 1: Use the Helper Script (Easiest)
1. Open the Shell tab in Replit
2. Run: `./start-astro.sh`
3. Wait for the message "ready in XXXms"
4. Your website will be available in the preview

### Method 2: Manual Start
1. Open the Shell tab
2. Run: `npx astro dev --host 0.0.0.0 --port 5000`
3. Access the URL shown (usually with /JrgWebsite at the end)

### What You'll See
- ✅ JGR Construction logo in the navbar
- ✅ Video background on homepage
- ✅ All 7 pages working correctly
- ✅ Authentic company branding

### For GitHub Pages Deployment
- The Astro build works perfectly for GitHub Pages
- All your assets and fixes are included
- Just push your changes to trigger the deployment

## Why This Happens
- Replit workflows are configured for the React version
- Your website source code is now Astro-based
- Both versions exist but Astro has your latest updates

## Future Workflow
- Always use `./start-astro.sh` to run your website
- This ensures you see the correct version with all fixes