import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: { 
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'about/about.html'),
        service: resolve(__dirname, 'service/service.html')
      },
    },
  },
})