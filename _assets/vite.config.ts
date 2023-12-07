import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    transformer: 'lightningcss',
  },
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
  server: {
    port: 3100,
  },
})
