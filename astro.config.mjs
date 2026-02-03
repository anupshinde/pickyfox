import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.pickyfox.com',
  trailingSlash: 'always',
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0'
  }
});
