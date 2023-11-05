import { defineConfig } from 'vite';
import * as dotenv from 'dotenv';
// import tailwindcss from 'tailwindcss';
import vue from '@vitejs/plugin-vue';
dotenv.config({ path: '../../assembly-line.env' });

export default defineConfig({
  mode: 'development',
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss()],
  //   }
  // },
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../../src/assetbundles/dist',
    rollupOptions: {
      input: {
        'little-layout': './little-layout.ts',
      },
    }
  },
  plugins: [vue()],
  server: {
    port: 3100,
  },
});
