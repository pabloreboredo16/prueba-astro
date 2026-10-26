// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['.trycloudflare.com']
  },

  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false
  },

  integrations: [react(), mdx()]
});