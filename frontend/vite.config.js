import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
    strictPort: true,
    host: true,
    hmr: {
      overlay: false
    },
    origin: "http://0.0.0.0:4200",
  },
})