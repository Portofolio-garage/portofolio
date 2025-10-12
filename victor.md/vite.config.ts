import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For GitHub Pages deployment set the base to the repository name, e.g. '/my-repo/'.
// This reads from the environment variable GHP_BASE so you can set it locally
// when building. Example: GHP_BASE='/my-repo/' npm run build
const base = process.env.GHP_BASE || '/portofolio/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
})
