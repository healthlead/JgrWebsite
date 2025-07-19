import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  },
  // Configured for Cloudflare Pages deployment
  site: 'https://jgr-construction.pages.dev',
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});