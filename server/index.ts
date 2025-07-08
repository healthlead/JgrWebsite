import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the root directory (where Astro files are)
app.use(express.static(path.join(__dirname, '..')));

// Handle all routes by serving the appropriate HTML file or index.html
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, '..', req.path);
  
  // Check if it's a directory route that should serve an index.html
  if (req.path.endsWith('/') || !path.extname(req.path)) {
    const indexPath = path.join(filePath, 'index.html');
    res.sendFile(indexPath, (err) => {
      if (err) {
        // Fallback to root index.html
        res.sendFile(path.join(__dirname, '..', 'index.html'));
      }
    });
  } else {
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(404).send('File not found');
      }
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 JGR Construction website running on port ${PORT}`);
  console.log(`🌐 Deployment URL: https://jgrdemo.replit.app`);
  console.log('✅ Serving Astro static files with logo and video');
});