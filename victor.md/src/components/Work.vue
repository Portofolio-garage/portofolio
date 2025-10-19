<template>
  <section class="work reveal">
  <h2 class="section-heading">Work</h2>
    <div class="section-shell more-defined">
      <div class="work-list">
        <div v-for="(item, idx) in items" :key="idx" class="work-item tile reveal" :class="{ 'delay-1': idx===0, 'delay-2': idx===1 }">
          <div class="timeline-head" role="button" tabindex="0" @click="toggle(idx)" @keyup.enter="toggle(idx)" :aria-expanded="item.open">
            <div class="head-content">
              <h3>{{ item.title }}</h3>
              <p class="muted">{{ item.subtitle }}</p>
            </div>
          </div>

          <transition name="fade-slide">
            <div v-show="item.open" class="timeline-body">
              <div class="expanded-shell">
                <div class="vertical-timeline">
                  <template v-for="entry in item.entries" :key="entry.title">
                    <div class="vt-entry">
                      <div class="vt-content">
                        <h4>{{ entry.title }}</h4>
                        <ul>
                          <li v-for="(d, di) in entry.details" :key="di">
                            <template v-if="isLink(d)">
                              <button class="link-like" @click.stop.prevent="openProjectLink(d.typeLink)">{{ d.typeLink.text }}</button>
                              <span v-if="d.text"> — {{ d.text }}</span>
                            </template>
                            <template v-else-if="d.text">{{ d.text }}</template>
                            <template v-else>{{ d }}</template>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </template>
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
    title: 'Programming Teaching Assistant',
    subtitle: 'Faculty of Automatic Control and Computers, UPB',
    open: false,
    entries: [
      { title: 'Month 1', details: [ { type: 'text', text: 'Taught foundational C programming concepts: variables, control flow, functions, and basic compilation workflows.' } ] },
  { title: 'Month 2', details: [ { type: 'text', text: 'Introduced primitive data structures and algorithmic applications; students implemented algorithms using arrays and simple structs.' } ] },
      { title: 'Month 3', details: [ { type: 'text', text: 'Covered linked lists; students implemented a small list library from scratch and used it in practical assignments.' } ] },
    ],
  },
  {
    title: 'Robotics Engineer',
    subtitle: 'HBFS Robotics Club',
    open: false,
    entries: [
  { title: 'Month 1', details: [ { type: 'text', text: "Completed the third-year ARM programming course at my college to deepen embedded systems expertise." } ] },
      { title: 'Month 2', details: [ { type: 'text', text: 'Completed 3D modelling coursework: learned to assemble parts, design enclosures, and gained practical PCB assembly experience.' } ] },
  { title: 'Month 3', details: [ { type: 'text', text: 'Started work on the Smart Autonomous Home project', typeLink: { text: 'Smart Autonomous Home', id: 'smart-home', path: '/projects', hash: '#smart-home' } } ] },
      { title: 'Month 4', details: [ { type: 'text', text: 'Participated in the Hard and Soft International Robotics Conquest — secured 4th place with the team.' } ] },
    ],
  },
])

import { useRouter } from 'vue-router'
const router = useRouter()
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

function toggle(i: number) {
  if (!items || !items[i]) return
  items[i].open = !items[i].open
}

function openProjectLink(link: any) {
  // link expected to have { id, path, hash }
  if (!link || !link.path) return
  router.push({ path: link.path, hash: link.hash || '' })
}

function isLink(d: any): d is { typeLink: { text: string, id?: string, path: string, hash?: string } } {
  return d && typeof d === 'object' && 'typeLink' in d
}

onMounted(() => {
  try {
    const nav = sessionStorage.getItem('navEntry')
    if (nav === '/work' && !route.hash) {
      if (items[0]) items[0].open = true
    }
  } catch (e) { /* ignore */ }
  try { sessionStorage.removeItem('navEntry') } catch (e) {}
})
</script>

<style scoped>
.work-list { display: grid; gap: 0.6rem; grid-template-columns: 1fr }
.work-item { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding: 1.2rem; border-radius: 12px; min-height: 120px; display:flex; flex-direction:column; justify-content:center }
.work-item h3 { margin: 0 0 0.15rem }

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

/* hide years completely to follow request */
.vt-year { display:none }

@media (min-width: 900px) {
  /* keep single-column stack on wide screens to match Education layout */
  .work-list { grid-template-columns: 1fr }
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
