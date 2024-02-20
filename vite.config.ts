import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'

export default defineConfig({
  base: '/hws2/',
  plugins: [react(), sassDts()],
  server: { port: 3000 },
  build: {
    cssMinify: false,
    rollupOptions: {
      output: {
        manualChunks: (path) =>
          path.split('/').reverse()[
            path.split('/').reverse().indexOf('node_modules') - 1
          ]
      }
    }
  }
})
