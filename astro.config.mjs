import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  },
  site: 'https://jgrdemo.replit.app',
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});