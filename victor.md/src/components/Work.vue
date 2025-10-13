<template>
  <section class="work reveal">
    <h2>Work Experience</h2>
    <div class="work-list">
  <RouterLink class="work-item tile orange-outline reveal delay-1" :to="{ path: '/work', hash: '#ta' }">
        <h3>Programming Teaching Assistant</h3>
        <p class="muted">Faculty of Automatic Control and Computers, UPB</p>
        <ul>
          <li>Assisted students learning C programming, low-level concepts, and algorithms during lab sessions.</li>
        </ul>
      </RouterLink>

  <RouterLink class="work-item tile orange-outline reveal delay-2" :to="{ path: '/work', hash: '#hbfs' }">
        <h3>Member — HBFS Robotics Club</h3>
        <p class="muted">Worked on embedded systems, IoT and 3D modeling</p>
        <ul>
          <li>Main Project: Smart Autonomous Passive House — IoT-based smart home with STM32, Raspberry Pi and real-time monitoring.</li>
        </ul>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.work-list { display: grid; gap: 0.9rem }
.work-item { padding: 1.1rem; min-height: 120px; background: transparent; border-radius: 12px; display:flex; flex-direction:column; justify-content:center; border:1px solid rgba(255,255,255,0.03); backdrop-filter: blur(8px) saturate(1.02); }
.work-item h3 { margin: 0 0 0.15rem }
</style>
