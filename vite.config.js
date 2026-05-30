import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/DeepRL-Explorer/',
  plugins: [react()],
})
