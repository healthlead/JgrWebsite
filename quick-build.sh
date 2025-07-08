#!/bin/bash

echo "Quick test build for GitHub Pages..."

# Clean and create dist
rm -rf dist
mkdir -p dist

# Create a simple test page
cat > dist/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JGR Construction - Test</title>
    <base href="/JrgWebsite/">
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .test-content {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 { color: #773B3C; }
        .status { color: green; font-weight: bold; }
        .debug { background: #f0f0f0; padding: 10px; margin: 20px 0; font-family: monospace; }
    </style>
</head>
<body>
    <div class="test-content">
        <h1>JGR Construction</h1>
        <p class="status">✓ HTML is loading correctly</p>
        <p>If you see this page, the basic deployment is working.</p>
        
        <div class="debug">
            <p>Debug Info:</p>
            <p>Location: <span id="location"></span></p>
            <p>Base URL: /JrgWebsite/</p>
            <p>Time: <span id="time"></span></p>
        </div>
        
        <p>The React app should load here. If not, check the browser console for errors.</p>
        
        <div id="root">
            <p style="color: orange;">⚠️ React app not yet loaded</p>
        </div>
    </div>
    
    <script>
        document.getElementById('location').textContent = window.location.href;
        document.getElementById('time').textContent = new Date().toISOString();
        console.log('Test page loaded successfully');
        console.log('Waiting for React app...');
    </script>
    
    <!-- React app bundle would go here -->
    <script type="module" src="./assets/index.js"></script>
</body>
</html>
EOF

# Copy 404.html
cp public/404.html dist/

echo "Test build complete. Contents:"
ls -la dist/