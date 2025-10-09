import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: '/Pass-CTET-Exam-easily/', // Updated for new repository name
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
