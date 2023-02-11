// vite.config.js
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

export default {
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  }
}

// # 文件夹图标插件
// # vscode-icons
// # Helium Icon Theme
// # Material Icon Theme