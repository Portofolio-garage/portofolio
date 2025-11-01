<template>
  <div>
    <Hero />
    <div class="social-bar">
      <a class="social-card" href="https://github.com/VictorINT" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.18 9.06 7.59 10.52.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.95-3.09.67-3.75-1.5-3.75-1.5-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.71 2.6 1.22 3.24.94.1-.73.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.4.11-2.9 0 0 .95-.3 3.11 1.14a10.8 10.8 0 0 1 2.84-.38c.96 0 1.92.13 2.84.38 2.15-1.44 3.1-1.14 3.1-1.14.62 1.5.24 2.62.12 2.9.72.79 1.15 1.77 1.15 3 0 4.27-2.61 5.22-5.09 5.5.4.35.75 1.05.75 2.12 0 1.53-.02 2.77-.02 3.15 0 .3.2.64.77.53A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z"/></svg>
        <span class="label">GitHub</span>
      </a>
      <a class="social-card" href="https://www.linkedin.com/in/victor-florescu-a94261217/" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h3.98V24H.5zM8.5 8.5h3.82v2.07h.05c.53-1 1.83-2.07 3.77-2.07 4.03 0 4.78 2.64 4.78 6.07V24H17.5v-7.4c0-1.77-.03-4.04-2.46-4.04-2.48 0-2.86 1.93-2.86 3.92V24H8.5V8.5z"/></svg>
        <span class="label">LinkedIn</span>
      </a>
    </div>

    <section class="home-grid-section">
      <div class="home-grid rich-layout">
        <article class="card card-skills">
          <h3>Technically, I work with</h3>
          <ul>
            <li>Java, Spring</li>
            <li>AI / ML / LLMs</li>
            <li>Python</li>
            <li>C / C++ (STM32)</li>
            <li>Embedded systems / robotics</li>
          </ul>
        </article>

        <article class="card card-skills">
          <h3>Currently learning</h3>
          <ul>
            <li>A2A and building complex agentic systems</li>
            <li>Signal processing theory</li>
            <li>NNs, CNNs, RNNs, LLMs (mathematically)</li>
            <li>Quantum computing — core physics & mathematics</li>
          </ul>
        </article>

        <article class="card card-skills">
          <h3>In my free time</h3>
          <ul>
            <li>Cooking</li>
            <li>Hiking</li>
            <li>F1</li>
            <li>Biking</li>
            <li>Gym</li>
          </ul>
        </article>

        <article class="card card-skills">
          <h3>Looking forward to</h3>
          <ul>
            <li>2026 F1 engine regulations</li>
            <li>Second semester Autonomous Systems course</li>
          </ul>
        </article>

        <article class="card card-skills">
          <h3>Trying to</h3>
          <ul>
            <li>Get an internship</li>
            <li>Get better at Tennis</li>
            <li>Wake up earlier</li>
          </ul>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/Hero.vue'

</script>

<style scoped>
/* home grid styles */
.home-grid-section { padding: 6vh 2vw; }
.home-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2.4vw; max-width: 1200px; margin: 0 auto; align-items: start; align-content: start; grid-auto-rows: auto; }
.home-grid > * { align-self: start }
.card { display:flex; flex-direction:column; position:relative; z-index:1 }
.card > ul { flex: 1 1 auto }
.card { padding: clamp(18px, 2.6vh, 36px); border-radius: 14px; background: linear-gradient(180deg, rgba(18,18,18,0.6), rgba(10,10,10,0.55)); border: 1px solid rgba(255,255,255,0.04); box-shadow: 0 18px 60px rgba(0,0,0,0.45); backdrop-filter: blur(6px); transition: transform .22s ease, box-shadow .22s ease }
.card h3 { margin: 0 0 0.8rem; font-size: clamp(1.15rem, 1.8vw, 1.6rem); color: #fff; position:relative; padding-bottom:6px }

/* small accent bar under headings */
.card h3::after { content: ""; position:absolute; left:0; bottom:0; width:48px; height:4px; border-radius:4px; background: linear-gradient(90deg, #ffb07a, #ff7a95); opacity:0.95 }

.card:hover { transform: translateY(-6px); box-shadow: 0 30px 90px rgba(0,0,0,0.6); z-index: 5 }
.card ul { margin: 0; padding-left: 1.05rem }
.card li { margin-bottom: 0.6rem; color: var(--muted) }

.card .card-list { display:flex; flex-direction:column; gap:0.8rem }
.card-item { background: linear-gradient(180deg, rgba(224,138,90,0.06), rgba(0,0,0,0.06)); padding: 10px 14px; border-radius: 8px; color: var(--muted) }

.project-list { display:flex; flex-direction:column; gap: 12px }
.proj-pill { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.06)); padding: 14px 18px; border-radius: 10px; border:1px solid rgba(255,255,255,0.02) }
.proj-title { font-weight:600; color: #ffb07a }
.proj-sub { margin-top:6px }
.exp-meta, .edu-meta { font-size: 0.92rem; color: var(--muted); margin-bottom:8px }

.personal-list { margin: 0; padding: 0; }
.personal-list dt { font-weight:700; color:#fff; margin-top:10px }
.personal-list dd { margin: 6px 0 12px 0; color: var(--muted); margin-left: 0 }

.card-personal { background: linear-gradient(180deg, rgba(34,24,18,0.6), rgba(12,8,6,0.5)); border: 1px solid rgba(255,160,120,0.06) }
.card-exp { border: 1px solid rgba(120,150,255,0.04) }
.card-projects { border: 1px solid rgba(255,120,160,0.04) }
.card-edu { border: 1px solid rgba(120,255,180,0.04) }
.card-skills { border: 1px solid rgba(200,180,255,0.04) }

/* education details styling */
.edu-details { margin-top: 8px; color: var(--muted) }
.edu-details summary { cursor: pointer; list-style: none; padding: 8px 0; font-weight:600; color: #fff }
.edu-details summary::-webkit-details-marker { display:none }
.edu-section { margin-top: 12px }
.edu-section h4 { margin: 0 0 6px; font-size: 1rem; color: #fff }
.edu-section ul { margin: 0 0 12px 1rem }
.edu-section li { color: var(--muted); margin-bottom: 6px }

@media (min-width: 1500px) {
  .home-grid { grid-template-columns: 1fr 0.9fr 1fr }
}

@media (max-width: 1100px) {
  .rich-layout { grid-template-areas: "exp" "proj" "edu" "skills" "lang" }
  .home-grid { grid-template-columns: 1fr; gap: 1.6rem }
  .card-projects { min-height: auto }
}

@media (max-width: 780px) {
  .home-grid { grid-template-columns: 1fr }
}

</style>

