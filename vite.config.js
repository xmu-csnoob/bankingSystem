import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 8081,
    host: '0.0.0.0',
    cors: true,
    proxy: {
      '/transaction': {
        target: 'http://192.168.101.47:8080',
        changeOrigin: true
      }
    }
  }
})
