import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // 用代理对象配置
      '/api': {
        target: 'https://localhost:8080', // 后端服务地址
        changeOrigin: true, // 必须设置为true
        secure: false, // 关闭证书验证
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})
