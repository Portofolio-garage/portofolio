<template>
  <section class="projects reveal">
    <h2>Selected Projects</h2>
    <div class="proj-list">
      <article class="proj-item">
        <h3>BetterMaps — AI-Powered Route Planning System</h3>
        <p class="muted">Python, Vue.js, Google Maps APIs, Gemini AI</p>
        <p>Developed intelligent routing with personalized POIs and secure dashboard with Google OAuth2.</p>
      </article>

      <article class="proj-item">
        <h3>Smart Receipts — AI Expense Management</h3>
        <p class="muted">Python, PaddleOCR, Spring, Kafka, Flutter</p>
        <p>Automated receipt scanning and LLM-based data extraction with real-time pipelines.</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.proj-list { display: grid; gap: 0.6rem }
.proj-item { padding: 0.7rem; background: rgba(255,255,255,0.02); border-radius: 8px }
.proj-item h3 { margin: 0 0 0.15rem }
</style>
