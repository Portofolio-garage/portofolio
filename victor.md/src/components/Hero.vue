<template>
  <section class="hero reveal">
    <div class="hero-inner container">
      <div class="hero-text">
  <p class="greeting">Hello, I'm</p>
  <h1 class="name">Victor-Stefan Florescu</h1>
        <p class="role">Computer Science & Engineering Student</p>
        <p class="desc">I build embedded systems, web apps with AI components, and robotics projects. This page is a scrollable CV — keep scrolling.</p>

        <div class="cv-preview">
          <!-- match actual filename (case-sensitive) -->
          <a class="cv-card" :href="base + 'cv/CV.pdf'" download>
            <div class="cv-title">Download CV</div>
            <div class="cv-sub">PDF</div>
          </a>
        </div>
      </div>

      <div class="hero-photo">
        <img :src="base + 'images/photo.jpg'" alt="Victor's photo" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Use Vite's base so links work when the app is served from /portofolio/
const base = import.meta.env.BASE_URL || '/'
</script>

<style scoped>
.hero { padding: 2.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.04); }
.hero-inner { display:flex; gap:1.6rem; align-items:center; flex-direction:column-reverse }
.hero-text { flex:1 }
.greeting { margin: 0; opacity: 0.9; font-weight: 600; color: var(--accent) }
.name { margin: 0.2rem 0 0.6rem; font-size: 5rem; letter-spacing: -0.02em; color: var(--fg); font-family: var(--serif-font); font-weight:600 }
.role { margin: 0 0 0.6rem; color: var(--muted); font-weight: 600 }
.desc { margin: 0; color: var(--muted); max-width: 60ch }
.hero-photo { width: 160px; flex:0 0 160px }
.hero-photo img { width:100%; height:100%; object-fit:cover; border-radius:14px; border: 1px solid rgba(255,255,255,0.04); box-shadow: 0 10px 30px rgba(0,0,0,0.6) }
.cv-preview { margin-top:1rem }
.cv-card { display:inline-grid; grid-auto-flow:row; gap:4px; padding:0.7rem 1rem; background:linear-gradient(135deg,var(--accent) 0%, #4755ff 100%); color:white; border-radius:10px; text-decoration:none; box-shadow: 0 8px 24px rgba(71,85,255,0.12); transition: transform .18s ease, box-shadow .18s }
.cv-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(71,85,255,0.18) }
.cv-title { font-weight:700 }
.cv-sub { font-size:0.82rem; opacity:0.95 }

@media (min-width: 860px) {
  .hero-inner { flex-direction:row }
  .name { font-size:3rem }
}

/* reveal animation */
.reveal { opacity: 0; transform: translateY(18px) scale(0.995); transition: opacity 520ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.9,.2,1); }
.reveal.is-visible { opacity: 1; transform: none; }
</style>
