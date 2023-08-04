/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { createClient } from 'contentful';

const client = createClient({
  space: 'bk8otr7phnfm',
  accessToken: 'NDf_OoMjD1VJo0siqo5Xy3jJy1pWCYLJgH089z7jt34',
  environment: 'master',
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      nitro: {
        serveStatic: false,
      },
      prerender: {
        routes: async () => {
          const pages = await client.getEntries({
            content_type: 'page',
          });
          const routes = pages.items.map((page) => page.fields['slug'] || '');

          return routes as any;
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
