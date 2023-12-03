import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
    emptyOutDir: true,
    manifest: true,
    outDir: '../src/assetbundles/dist',
    rollupOptions: {
      input: {
        'little-layout': './little-layout.ts',
      },
    },
  },
  mode: 'development',
  server: {
    port: 3100,
  },
})
