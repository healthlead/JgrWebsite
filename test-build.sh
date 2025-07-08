#!/bin/bash

# Test build script for GitHub Pages
echo "Testing GitHub Pages build..."

# Build with GitHub Pages base path
npx vite build --outDir dist --base /JrgWebsite/

# Copy essential files
cp public/404.html dist/
cp -r attached_assets dist/ 2>/dev/null || true
cp public/*.mp4 dist/ 2>/dev/null || true
cp public/*.png dist/ 2>/dev/null || true

echo "Build complete. Contents of dist:"
ls -la dist/

# Check if index.html exists and contains correct base
if [ -f "dist/index.html" ]; then
  echo "Checking index.html base tag..."
  grep -E "(base|script src)" dist/index.html | head -5
fi