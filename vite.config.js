import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: true,
    proxy: {
      '/apis': {
        target: 'https://localhost:8080',
        secure: false
      }
    }
  }
})
