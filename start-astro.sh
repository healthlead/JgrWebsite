#!/bin/bash

echo "🚀 Starting JGR Construction Astro Website..."
echo "Stopping any running servers..."

# Kill any existing servers
pkill -f "tsx server/index.ts" 2>/dev/null || true
pkill -f "node.*express" 2>/dev/null || true

echo "Starting Astro development server..."

# Start Astro server
npx astro dev --host 0.0.0.0 --port 5000

echo "✅ Astro server started! Your website should be available in the preview."