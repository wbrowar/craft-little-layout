import { defineConfig } from 'vite';
import * as dotenv from 'dotenv';
import vue from '@vitejs/plugin-vue';
dotenv.config({ path: '../../assembly-line.env' });

export default defineConfig({
  mode: 'development',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../../src/assetbundles/dist',
    rollupOptions: {
      input: './main.ts',
    }
  },
  plugins: [vue()],
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue'
      }
    }
  },
});
