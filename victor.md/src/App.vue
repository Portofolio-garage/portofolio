<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

function markNav(path: string) {
  try { sessionStorage.setItem('navEntry', path) } catch (e) { /* ignore */ }
}

const route = useRoute()
const router = useRouter()
const isHome = computed(() => route.path === '/')

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
    <!-- decorative background patches (purely visual, non-interactive) -->
    <div class="bg-patches" aria-hidden="true">
      <span class="bg-patch"></span>
      <span class="bg-patch"></span>
      <span class="bg-patch"></span>
      <span class="bg-patch"></span>
      <span class="bg-patch"></span>
      <span class="bg-patch"></span>
      <span class="bg-patch"></span>
    </div>
    <header class="topnav">
      <div class="container topnav-row">
        <div class="left-slot">
          <button v-if="!isHome" class="back-btn" @click="router.back()">← Back</button>
        </div>
        <nav class="links">
          <RouterLink to="/" @click="markNav('/')">Home</RouterLink>
          <RouterLink to="/education" @click="markNav('/education')">Education</RouterLink>
          <RouterLink to="/work" @click="markNav('/work')">Work</RouterLink>
          <RouterLink to="/projects" @click="markNav('/projects')">Projects</RouterLink>
          <RouterLink to="/competitions" @click="markNav('/competitions')">Competitions</RouterLink>
          <!-- Navbar items temporarily hidden -->
          <!-- <RouterLink to="/certifications" @click="markNav('/certifications')">Certifications</RouterLink> -->
          <!-- <RouterLink to="/blog" @click="markNav('/blog')">Blog</RouterLink> -->
        </nav>
      </div>
    </header>

    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app { padding-top: 60px }
.topnav { padding: 2px 0 }
.links a { color: var(--muted); text-decoration: none; padding: 8px 12px; border-radius: 8px; font-size: 1.15rem }
.links a:hover { color: var(--fg); background: rgba(255,255,255,0.02) }
</style>
