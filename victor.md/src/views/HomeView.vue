<template>
  <div>
    <Hero />
    <div class="social-bar">
      <a class="social-card" href="https://github.com/VictorINT" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.18 9.06 7.59 10.52.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.95-3.09.67-3.75-1.5-3.75-1.5-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.71 2.6 1.22 3.24.94.1-.73.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.4.11-2.9 0 0 .95-.3 3.11 1.14a10.8 10.8 0 0 1 2.84-.38c.96 0 1.92.13 2.84.38 2.15-1.44 3.1-1.14 3.1-1.14.62 1.5.24 2.62.12 2.9.72.79 1.15 1.77 1.15 3 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.05.75 2.12 0 1.53-.02 2.77-.02 3.15 0 .3.2.64.77.53A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z"/></svg>
        <span class="label">GitHub</span>
      </a>
      <a class="social-card" href="https://www.linkedin.com/in/victor-florescu-a94261217/" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h3.98V24H.5zM8.5 8.5h3.82v2.07h.05c.53-1 1.83-2.07 3.77-2.07 4.03 0 4.78 2.64 4.78 6.07V24H17.5v-7.4c0-1.77-.03-4.04-2.46-4.04-2.48 0-2.86 1.93-2.86 3.92V24H8.5V8.5z"/></svg>
        <span class="label">LinkedIn</span>
      </a>
    </div>

    <div class="section-shell">
      <div class="tile">
        <h2>About</h2>
        <p class="muted">I've been building since I was a child, first with Lego and Mindstorms and later with microcontrollers and code. That curiosity grew into a lifelong appetite for systems: from embedded hardware to backend services and the mathematics that bind them. I explore every field as a new map to study, a problem to solve, and a system to optimize.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'
</script>

<style scoped>
/* no-op; components provide styling */
</style>

