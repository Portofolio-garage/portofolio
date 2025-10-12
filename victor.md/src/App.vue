<script setup lang="ts">
import Hero from './components/Hero.vue'
import Education from './components/Education.vue'
import Work from './components/Work.vue'
import Projects from './components/Projects.vue'
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
    <header class="topnav">
      <div class="container topnav-row">
        <div class="brand">Victor</div>
        <nav class="links">
          <a href="#hero">Home</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <section id="hero"><Hero /></section>
      <section id="education"><Education /></section>
      <section id="work"><Work /></section>
      <section id="projects"><Projects /></section>
    </main>
  </div>
</template>

<style scoped>
/* keep App-level centering minimal; components handle their own layout */

#app {
  padding: 1.6rem 2rem 2rem 2rem;
  padding-top: 88px; /* offset for fixed top nav */
  text-align: left;
}

@media (min-width: 700px) {
  #app { padding: 2rem 3rem }
}
</style>
