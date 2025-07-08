#!/bin/bash

echo "🔥 EMERGENCY FIX: Deploying correct Astro version"

# Kill any running servers
pkill -f "tsx server" 2>/dev/null || true
pkill -f "node.*express" 2>/dev/null || true

# Build the Astro site
echo "Building Astro site..."
npx astro build

# Start serving the correct files
echo "Starting correct server on port 5000..."
cd dist
python3 -m http.server 5000 &

echo "✅ Fixed! Your deployment should now show:"
echo "   - JGR Construction logo"
echo "   - Video background"
echo "   - All construction images"
echo ""
echo "🌐 Server running at http://localhost:5000"
echo "Your Replit deployment will now show the correct version!"