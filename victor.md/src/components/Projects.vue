<template>
  <section class="projects reveal">
  <h2 class="section-heading">Projects</h2>
    <div class="section-shell more-defined">
      <div class="proj-list">
  <div v-for="(p, idx) in items" :key="idx" :id="p.id ? p.id : undefined" class="proj-item tile reveal" :class="{ 'delay-1': idx===0, 'delay-2': idx===1 }">
          <div class="timeline-head" role="button" tabindex="0" @click="toggle(idx)" @keyup.enter="toggle(idx)" :aria-expanded="p.open">
            <div class="head-content">
              <h3>{{ p.title }}</h3>
              <p class="muted">{{ p.tech }}</p>
            </div>
          </div>

          <transition name="fade-slide">
            <div v-show="p.open" class="timeline-body">
              <div class="expanded-shell">
                <div class="vertical-timeline">
                  <div v-for="(e, ei) in p.entries" :key="ei" class="vt-entry">
                    <div class="vt-content">
                      <h4>{{ e.title }}</h4>
                          <ul>
                            <li v-for="(d, di) in e.details" :key="di">
                              <template v-if="typeof d === 'string'">
                                {{ d }}
                              </template>
                              <template v-else-if="d.type === 'link'">
                                <a :href="d.href" target="_blank" rel="noopener">{{ d.text }}</a>
                              </template>
                              <template v-else-if="d.type === 'text'">
                                {{ d.text }}
                              </template>
                              <template v-else>
                                {{ d }}
                              </template>
                            </li>
                          </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const items = reactive([
  {
    title: 'BetterMaps — AI-Powered Route Planning System',
    tech: 'Python, Vue.js, Google Maps APIs, Gemini AI',
    open: false,
    entries: [
      { title: 'Overview', details: ['Intelligent routing and POI personalization', 'Secure dashboard with Google OAuth2'] },
      { title: 'Tech & Architecture', details: ['Backend in Python', 'Integration with Google Maps APIs', 'LLM for POI ranking'] },
    ],
  },
  {
    title: 'Smart Receipts — AI Expense Management',
    tech: 'Python, PaddleOCR, Spring, Kafka, Flutter',
    open: false,
    entries: [
      { title: 'Overview', details: ['Automated receipt scanning', 'LLM-based structured data extraction'] },
      { title: 'Pipeline', details: ['PaddleOCR for OCR', 'Kafka for event streaming', 'Mobile app in Flutter'] },
    ],
  },
  {
    id: 'smart-home',
    title: 'Smart Autonomous Home',
    tech: 'STM32, Raspberry Pi, IoT, Embedded C',
    open: false,
    entries: [
      { title: 'Overview', details: [
        'A modular IoT-driven smart home prototype focused on autonomy, energy efficiency and local decision-making.',
        'Combines embedded controllers (STM32) with a Raspberry Pi gateway and a Spring Boot backend for telemetry, control and user dashboards.',
        { type: 'link', text: 'Smart Autonomous Home post', href: 'https://www.linkedin.com/pulse/building-smart-autonomous-passive-house-victor-florescu-dkcrf/?trackingId=QWzY9mOoRSm3gTK5K903UA%3D%3D' },
  /* Hard & Soft link removed per request (kept on Competitions page) */
      ] },
      { title: 'Design timeline', details: [
        'Phase 1 — Concept & requirements: system-level specs, security and power budgets.',
        'Phase 2 — Hardware selection & prototyping: select STM32 families, prototype PCBs, and sensors.',
        'Phase 3 — Firmware & comms: implement DMA/USART patterns, robust serial protocol and object-pool memory model.',
        'Phase 4 — Gateway & dashboard: Pi gateway, Spring backend, and Vue.js dashboard integration.',
        'Phase 5 — Integration & field testing: power-management tuning, CV and access control validation.',
        'Phase 6 — Optimization & scaling: CAN/ROS2 planning, predictive models and deployment readiness.'
      ] },
      { title: 'Key Features', details: [
        'Local decision node using Raspberry Pi for real-time control and a web dashboard in Vue.js.',
        'Secure Google OAuth2 login for the dashboard and role-based access to controls and logs.',
        'Custom C serial library (struct-based) to handle JSON-over-serial between STM32 and Raspberry Pi.',
        'Computer vision for license plate recognition (YOLO fine-tuned on Romanian plates) and RFID-based door access.'
      ] },
      { title: 'Hardware & Software', details: [
        'STM32 NUCLEO boards for sensor reading, DMA-based USART with interrupt-driven non-blocking comms.',
        'Raspberry Pi as gateway and dashboard host; Spring Boot backend (Dockerized) with MySQL and SSE/WebSocket components.',
        'Actuators: servos, relays, neopixel LEDs, solenoids; power-management with MOSFET switching (fallback to off-the-shelf module).' 
      ] },
      { title: 'What I learned', details: [
        'Practical embedded patterns: DMA, interrupts, and modular firmware design.',
        'System design and scaling: from single-board proof-of-concept to distributed STM32 network + CAN/ROS2 ideas.',
        'Security and infra: OAuth2 integration, observability plans (logs, metrics, traces), and moving from self-signed to DV TLS.'
      ] },
      { title: 'Next steps', details: [
        'Replace dynamic allocation in serial library with object pools; integrate Kafka for scalable service communication.',
        'Move toward distributed STM32 nodes with CAN bus and potentially migrate Pi components to ROS2 nodes.',
        'Add prediction models for autonomous optimization (anticipate window openings, occupancy, and energy use).'
      ] },
    ],
  },
])

function toggle(i: number) {
  if (!items || !items[i]) return
  items[i].open = !items[i].open
}

// auto-expand when hash matches a project's id
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(() => {
  if (route.hash) {
    const target = route.hash.replace('#', '')
    const idx = items.findIndex(it => it.id === target)
    if (idx >= 0) {
      // wait a bit so the router finishes scroll, then open
      setTimeout(() => {
        if (items[idx]) items[idx].open = true
      }, 250)
    }
  }
  // If opened via navbar (sessionStorage flag) and no hash navigation happened, open first
  try {
    const nav = sessionStorage.getItem('navEntry')
    if (nav === '/projects' && !route.hash) {
      if (items[0]) items[0].open = true
    }
  } catch (e) {}
  try { sessionStorage.removeItem('navEntry') } catch (e) {}
})
</script>

<style scoped>
.proj-list { display: grid; gap: 0.6rem; grid-template-columns: 1fr }
.proj-item { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding: 1.2rem; border-radius: 12px; min-height: 120px; display:flex; flex-direction:column; justify-content:center }
.proj-item h3 { margin: 0 0 0.15rem }

.timeline-head { display:flex; gap:1rem; align-items:flex-start; cursor:pointer }
.head-content { flex:1 }
.timeline-body { margin-top:0.8rem }
.expanded-shell { background: linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.16)); padding:1rem; border-radius:12px; border:1px solid rgba(255,255,255,0.025) }
.vertical-timeline { position:relative; display:flex; flex-direction:column; gap:1rem; padding-left:36px }
.vertical-timeline:before { content:''; position:absolute; left:12px; top:8px; bottom:8px; width:2px; background: linear-gradient(180deg, var(--accent), rgba(255,255,255,0.02)) }
.vt-entry { display:flex; gap:1rem; align-items:flex-start; padding:0.6rem; border-radius:8px; background: rgba(0,0,0,0.06); position:relative }
.vt-entry:before { content:none }
.vt-content { flex:1 }
.vt-content h4 { margin:0 0 0.35rem }
.vt-content ul { margin:0; padding-left:1.05rem }

@media (min-width: 900px) {
  /* keep single-column stack on wide screens to match Education layout */
  .proj-list { grid-template-columns: 1fr }
  .expanded-shell { padding:1.25rem }
  .vertical-timeline { padding-left:56px }
}

/* transition copied from EducationView */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all .28s cubic-bezier(.2,.9,.2,1) }
.fade-slide-enter-from { opacity:0; transform: translateY(-6px) }
.fade-slide-enter-to { opacity:1; transform:none }
.fade-slide-leave-from { opacity:1 }
.fade-slide-leave-to { opacity:0; transform: translateY(-6px) }

</style>
