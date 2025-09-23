import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/CTET-Study/', // Ensure assets load from correct path on GitHub Pages
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
