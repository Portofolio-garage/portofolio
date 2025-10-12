<script setup lang="ts">
import Hero from './components/Hero.vue'
import Education from './components/Education.vue'
import { onMounted } from 'vue'

// small global observer to reveal sections with the .reveal class
onMounted(() => {
  const els = Array.from(document.querySelectorAll('.reveal'))
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('is-visible'))
    return
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })
  els.forEach(e => io.observe(e))
})
</script>

<template>
  <div id="app">
    <Hero />
    <Education />

    <!-- Future sections: Work Experience, Projects, Skills, Contact -->
  </div>
</template>

<style scoped>
/* keep App-level centering minimal; components handle their own layout */
#app {
  padding: 1rem 2rem;
  text-align: left;
}

@media (min-width: 700px) {
  #app { padding: 2rem 3rem }
}
</style>
