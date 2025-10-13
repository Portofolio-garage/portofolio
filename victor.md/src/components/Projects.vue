<template>
  <section class="projects reveal">
    <h2>Selected Projects</h2>
    <div class="proj-list">
  <RouterLink class="proj-item tile orange-outline reveal delay-1" :to="{ path: '/projects' }">
        <h3>BetterMaps — AI-Powered Route Planning System</h3>
        <p class="muted">Python, Vue.js, Google Maps APIs, Gemini AI</p>
        <p>Developed intelligent routing with personalized POIs and secure dashboard with Google OAuth2.</p>
      </RouterLink>

  <RouterLink class="proj-item tile orange-outline reveal delay-2" :to="{ path: '/projects' }">
        <h3>Smart Receipts — AI Expense Management</h3>
        <p class="muted">Python, PaddleOCR, Spring, Kafka, Flutter</p>
        <p>Automated receipt scanning and LLM-based data extraction with real-time pipelines.</p>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.proj-list { display: grid; gap: 0.6rem }
.proj-item { padding: 1.0rem; background: transparent; border-radius: 12px; border:1px solid rgba(255,255,255,0.03); backdrop-filter: blur(8px) saturate(1.02) }
.proj-item h3 { margin: 0 0 0.15rem }
</style>
