import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { patchCssModules } from 'vite-css-modules'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tsconfigPaths(),
    patchCssModules({
      generateSourceTypes: true,
    })
  ],
  server: {
    port: 3003,
  },
  cacheDir: ".yarn/.vite",
});
