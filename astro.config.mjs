import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.pickyfox.com',
  trailingSlash: 'always',
  server: {
    host: '0.0.0.0'
  }
});
