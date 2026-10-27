// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

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

  integrations: [react(), mdx()],
  adapter: vercel(),
  // Cambia la configuracion por defecto de SSG a SSR
  // output: "server"
});