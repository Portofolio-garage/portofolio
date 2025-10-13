<template>
  <main class="container">
    <h1>Education timeline</h1>
    <div class="timeline">
      <div v-for="(item, idx) in items" :key="idx" class="tile timeline-item">
        <!-- only allow toggle if the item is not highschool (we'll identify by title containing 'High School' or date range) -->
        <div class="timeline-head" @click="(isHighSchool(item) ? null : toggle(idx))">
          <div class="date">{{ item.date }}</div>
          <div class="head-content">
            <h3>{{ item.title }}</h3>
            <p class="short">{{ item.short }}</p>
          </div>
        </div>

        <transition name="fade-slide">
          <div v-show="item.open" class="timeline-body">
            <div class="expanded-shell">
              <div class="vertical-timeline">
                <!-- Flatten and render semesters in order: Year1 S1, Year1 S2, Year2 S1, Year2 S2, ... -->
                <template v-if="item.entries && item.entries.some(e => 'semesters' in e)">
                  <template v-for="(s, si) in getFlatSemesters(item)" :key="si">
                    <div class="vt-entry">
                      <div class="vt-year">{{ getYearLabel(si) }}</div>
                      <div class="vt-content">
                        <div class="sem-head"><span class="sem-label">{{ s.sem }}</span> — <strong>{{ s.title }}</strong></div>
                        <ul>
                          <li v-for="(c, ci) in s.classes" :key="ci">{{ c }}</li>
                        </ul>
                      </div>
                    </div>
                  </template>
                </template>
                <template v-else>
                  <!-- Non-semester entries (e.g. high school years) -->
                  <template v-for="entry in getNonSemesterEntries(item)" :key="entry.year">
                    <div class="vt-entry">
                      <div class="vt-year">{{ entry.year }}</div>
                      <div class="vt-content">
                        <h4>{{ entry.title }}</h4>
                        <ul>
                          <li v-for="(c, k) in entry.classes" :key="k">{{ c }}</li>
                        </ul>
                      </div>
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// helper removed (unused)

const items = reactive([
      {
    date: '2025 - Present',
    title: 'B.Sc. Computer Science & Engineering',
    short: 'University Politehnica of Bucharest — focused on systems, embedded and AI.',
    details: '',
    open: true,
    // entries are years; mapping per your choice B: group1->2025 S1, group2->2026 S2, group3->2027 S1
    entries: [
      { year: '2027', semesters: [
        { sem: 'S1', title: 'Year 3 - Semester 1', classes: [
          'Linear Electronic Circuits',
          'Object-Oriented Programming',
          'Numerical Methods',
          'Signals & Systems',
          'Web Design',
          'Analysis Techniques in Systems Engineering',
        ] },
      ]},
      { year: '2026', semesters: [
        { sem: 'S2', title: 'Year 2 - Semester 2', classes: [
          'Special Mathematics (Complex Analysis)',
          'Physics',
          'Electrical Engineering',
          'Algorithm Design',
          'Chemistry',
        ] },
      ]},
      { year: '2025', semesters: [
        { sem: 'S1', title: 'Year 1 - Semester 1', classes: [
          'Real Analysis',
          'Linear Algebra',
          'Analytic Geometry & Differential Equations',
          'Computer Programming & Languages',
          'Mechanics',
          'Operating Systems',
        ] },
      ]},
    ],
  },
  {
    date: '2020 - 2024',
    title: 'High School Diploma, Math & CS',
    short: 'Cantemir Voda National College — advanced math and computer science track.',
    details: '',
    open: false,
    // highschool entries: list each year with sample classes (remove 2020)
    entries: [
      { year: '2021', title: 'Year 2', classes: ['Advanced Math II', 'Intro to Programming'] },
      { year: '2022', title: 'Year 3', classes: ['Algebra II', 'Algorithms basics'] },
      { year: '2023', title: 'Year 4', classes: ['Math Olympiad prep', 'Projects'] },
      { year: '2024', title: 'Graduation', classes: ['Final Project'] },
    ],
  },
])

function toggle(i: number) {
  if (!items || items[i] === undefined) return
  items[i].open = !items[i].open
}

function getNonSemesterEntries(item: any) {
  if (!item || !item.entries) return []
  return item.entries.filter((e: any) => !('semesters' in e))
}

function isHighSchool(item: any) {
  // simple heuristic: title contains 'High School' or date range includes 2020-2024
  if (!item || !item.title) return false
  const t = String(item.title).toLowerCase()
  if (t.includes('high school')) return true
  if (item.date && String(item.date).includes('2020')) return true
  return false
}

// Flatten semesters in natural chronological order: entry list currently holds year groups,
// but we want a sequence like: Year1 S1, Year1 S2, Year2 S1, ...
function getFlatSemesters(item: any) {
  const flat: any[] = []
  // items.entries may already be ordered oldest->newest; preserve that order and push their semesters in order
  for (const e of item.entries.slice()) {
    if (e.semesters && Array.isArray(e.semesters)) {
      for (const s of e.semesters) flat.push(s)
    }
  }
  // Now ensure the sequence follows: S1, S2, S1, S2... by grouping pairs if needed.
  // If semesters are already in correct order (S1 then S2), this will be a no-op.
  return flat
}

// Compute a left-year label for a given semester index (si).
// Requirement: the left-year label should appear on the second semester of each year (i.e., indices 1,3,5...)
// and should display the start year (2025) incremented every two semesters. For now user requested to show only 2025,
// so this function will return 2025 for the first year-separator and increment thereafter if the data includes more.
function getYearLabel(semIndex: number) {
  const startYear = 2025
  // semIndex 0 -> Year1 S1 (no label), semIndex 1 -> Year1 S2 (label startYear), semIndex 2 -> Year2 S1 (no label), semIndex 3 -> Year2 S2 (label startYear+1)
  if ((semIndex + 1) % 2 === 0) {
    const yearOffset = Math.floor((semIndex + 1) / 2) - 1
    return String(startYear + yearOffset)
  }
  return ''
}
</script>

<style scoped>
section { padding: 2rem 0 }
.timeline { display:grid; gap:1rem; margin-top:1rem }
.timeline-item { overflow:hidden; padding: 18px; border-radius: 14px; background: linear-gradient(180deg, rgba(255,255,255,0.012), rgba(0,0,0,0.04)); border: 1px solid rgba(255,255,255,0.03) }
.timeline-head { display:flex; gap:1rem; align-items:flex-start; cursor:pointer }
.timeline-head .date { color:var(--muted); min-width:160px; font-weight:600 }
.head-content { flex:1 }
.head-content h3 { margin:0; font-size:1.2rem }
.short { margin:0.45rem 0 0; color:var(--muted) }
.timeline-body { margin-top:1rem }

.expanded-shell { background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.15)); padding:1.25rem; border-radius:12px; border:1px solid rgba(255,255,255,0.02) }
.vertical-timeline { position:relative; display:flex; flex-direction:column; gap:1.25rem; padding-left:96px }

/* vertical line centered where content now sits (years/dots removed) */
.vertical-timeline:before { content:''; position:absolute; left:28px; top:12px; bottom:12px; width:2px; background: linear-gradient(180deg, var(--accent), rgba(255,255,255,0.02)) }

.vt-entry { display:flex; gap:1rem; align-items:center; padding:0.9rem; border-radius:8px; background: rgba(0,0,0,0.12); position:relative }
/* remove the blue dot marker */
.vt-entry:before { content:none }
/* hide years entirely */
.vt-year { display:none }
.vt-content { flex:1; display:flex; flex-direction:column }
.sem-label { float:right; color:var(--muted); margin-right:8px }
.vt-content h4 { margin:0 0 0.2rem }
.vt-content .small { margin:0 0 0.6rem }
.vt-content ul { margin:0; padding-left:1.1rem }
.semester { margin-bottom:0.6rem }

@media (min-width:900px) {
  .expanded-shell { padding:1.5rem }
  .vertical-timeline { gap:1.5rem; padding-left:120px }
  .vt-entry { padding:1.1rem }
}

/* transition */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all .28s cubic-bezier(.2,.9,.2,1) }
.fade-slide-enter-from { opacity:0; transform: translateY(-6px) }
.fade-slide-enter-to { opacity:1; transform:none }
.fade-slide-leave-from { opacity:1 }
.fade-slide-leave-to { opacity:0; transform: translateY(-6px) }

@media (min-width:900px) {
  .timeline { gap:1.25rem }
}
</style>
