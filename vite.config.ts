import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 4200,
    host: true,
  },
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@app/config': path.resolve(__dirname, 'src/config'),
      '@app/router': path.resolve(__dirname, 'src/router'),
      '@app/assets': path.resolve(__dirname, 'src/assets'),
      '@app/pages': path.resolve(__dirname, 'src/pages'),
      '@libs': path.resolve(__dirname, 'src/libs'),
    },
  },
});
