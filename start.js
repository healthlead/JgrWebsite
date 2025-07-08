import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function startServer() {
  try {
    console.log('🏗️  Building Astro site...');
    await execAsync('npx astro build');
    console.log('✅ Build complete!');
    
    console.log('🚀 Starting server...');
    // Use serve to serve the dist directory
    const { spawn } = await import('child_process');
    const server = spawn('npx', ['serve', 'dist', '-l', '5000'], {
      stdio: 'inherit'
    });
    
    server.on('error', (err) => {
      console.error('Server error:', err);
    });
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

startServer();