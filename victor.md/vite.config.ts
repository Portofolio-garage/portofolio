import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For GitHub Pages deployment set the base to the repository name, e.g. '/my-repo/'.
// This reads from the environment variable GHP_BASE so you can set it locally
// when building. Example: GHP_BASE='/my-repo/' npm run build
// NOTE: repository was renamed — update the default base below to match your
// current GitHub repo name. Assumption: new repo name is 'portfolio'. If it's
// different, either set the GHP_BASE env var during build or change this value.
const base = process.env.GHP_BASE || '/portfolio/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
})
