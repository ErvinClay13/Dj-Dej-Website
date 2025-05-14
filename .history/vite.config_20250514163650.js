import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Dj-Dej-Website/',  // 👈 Add this line (use your repo name)
  plugins: [react()],
})