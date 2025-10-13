<template>
  <section class="education reveal">
    <h2>Education</h2>
    <div class="section-shell more-defined">
      <div class="edu-list">
        <RouterLink class="edu-item tile reveal delay-1" :to="{ path: '/education', hash: '#college' }">
          <h3>B.Sc. Computer Science & Engineering</h3>
          <p class="muted">University Politehnica of Bucharest — 2024 - Present</p>
          <p>Bucharest, Romania</p>
        </RouterLink>

        <RouterLink class="edu-item tile reveal delay-2" :to="{ path: '/education', hash: '#highschool' }">
          <h3>High School Diploma, Mathematics & Computer Science</h3>
          <p class="muted">Cantemir Voda National College — 2020 - 2024</p>
          <p>Bucharest, Romania</p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
// static content for now; can be converted to props or data later
</script>

<style scoped>
.education { padding: 0.8rem 0 }
.education h2 { font-size: 1.25rem; margin-bottom: 0.6rem; border-bottom: 1px solid rgba(255,255,255,0.04); padding-bottom: 0.4rem }
.edu-list { display: grid; gap: 0.6rem }
.edu-item { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding: 1.2rem; border-radius: 12px; min-height: 120px; display:flex; flex-direction:column; justify-content:center }
.edu-item h3 { margin: 0 0 0.15rem }
.muted { color: rgba(255,255,255,0.6); margin: 0 0 0.2rem }

@media (min-width: 900px) {
  .edu-list { grid-template-columns: 1fr 1fr }
}
</style>
