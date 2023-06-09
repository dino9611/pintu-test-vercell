/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    threads: true,
    reporters: 'verbose',
    globals: true,
  },
});
