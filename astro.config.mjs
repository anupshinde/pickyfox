import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const SITE_URL = 'https://www.pickyfox.com';
const siteHostname = new URL(SITE_URL).hostname;
const baseHostname = siteHostname.replace(/^www\./, '');
const internalHostnames = new Set([siteHostname, baseHostname, `www.${baseHostname}`]);

function isExternalHttpLink(href) {
  try {
    const url = new URL(href, SITE_URL);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    return !internalHostnames.has(url.hostname);
  } catch {
    return false;
  }
}

function externalLinksInNewTab() {
  return (tree) => {
    const walk = (node) => {
      if (!node || typeof node !== 'object') return;

      if (node.type === 'element' && node.tagName === 'a') {
        const properties = node.properties || (node.properties = {});
        const href = typeof properties.href === 'string' ? properties.href : '';

        if (href && isExternalHttpLink(href)) {
          properties.target = '_blank';

          const relValues = new Set();
          if (typeof properties.rel === 'string') {
            properties.rel.split(/\s+/).filter(Boolean).forEach((value) => relValues.add(value));
          } else if (Array.isArray(properties.rel)) {
            properties.rel.filter((value) => typeof value === 'string').forEach((value) => relValues.add(value));
          }

          relValues.add('noopener');
          relValues.add('noreferrer');
          properties.rel = Array.from(relValues).join(' ');
        }
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(walk);
      }
    };

    walk(tree);
  };
}

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [externalLinksInNewTab]
  },
  integrations: [tailwind()],
  server: {
    host: '0.0.0.0'
  }
});
