<template>
  <section class="hero reveal">
    <div class="hero-inner">
      <div class="hero-text">
        <p class="greeting">Hello, I'm</p>
        <h1 class="name">Victor-Stefan Florescu</h1>
        <p class="role">Computer Science & Engineering Student</p>
        <p class="desc">I work on embedded systems, AI-assisted web apps, and robotics. This site is a live CV — scroll to learn more.</p>
      </div>
      <div class="hero-photo">
        <img src="/images/photo.jpg" alt="Victor's photo placeholder" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keep this component simple for now. Replace the image at /public/images/photo.svg with your real photo later.
</script>

<style scoped>
.hero { padding: 3rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
.hero-inner { display: flex; gap: 2rem; align-items: center; flex-direction: column-reverse; }
.hero-text { max-width: 58ch; }
.greeting { margin: 0; opacity: 0.85; font-weight: 500; }
.name { margin: 0.2rem 0 0.4rem; font-size: 2.4rem; letter-spacing: -0.02em; }
.role { margin: 0 0 0.8rem; color: #9aa6b2; font-weight: 500 }
.desc { margin: 0; color: inherit; }
.hero-photo img { width: 160px; height: 160px; object-fit: cover; border-radius: 16px; border: 2px solid rgba(255,255,255,0.06); box-shadow: 0 6px 30px rgba(0,0,0,0.45); }

@media (min-width: 700px) {
  .hero-inner { flex-direction: row; }
  .name { font-size: 3.2rem }
}

/* reveal animation */
.reveal { opacity: 0; transform: translateY(18px) scale(0.995); transition: opacity 520ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.9,.2,1); }
.reveal.is-visible { opacity: 1; transform: none; }
</style>
