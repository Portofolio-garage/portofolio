<template>
  <main class="container">
    <section class="competitions reveal">
      <h2 class="section-heading">Competitions</h2>
      <div class="section-shell more-defined">
        <div class="proj-list">
          <div class="proj-item tile reveal">
            <div class="timeline-head">
              <div class="head-content">
                <h3>Hard & Soft 2025 — Robotics Engineering Challenge</h3>
                <p class="muted">May 2025 — Team placement: 4th (international)</p>
              </div>
            </div>

            <div class="expanded-shell">
            <div class="vertical-timeline">
              <div class="vt-entry">
                <div class="vt-content">
                  <h4>Overview</h4>
                  <ul>
                    <li>Autonomous maze robot using Pi + LiDAR + camera.</li>
                    <li>DFS pathfinder with odometry-LiDAR alignment and holonomic PID control.</li>
                    <li>Encrypted telemetry to remote dashboard.</li>
                  </ul>
                </div>
              </div>

              <div class="vt-entry">
                <div class="vt-content">
                  <h4>Design & Mechanics</h4>
                  <ul>
                    <li>CAD + Gazebo validation; 3D-printed mechanisms for reliable wall/exit handling.</li>
                  </ul>
                </div>
              </div>

              <div class="vt-entry">
                <div class="vt-content">
                  <h4>Perception</h4>
                  <ul>
                    <li>Lightweight YOLO model for object detection; live overlays in UI.</li>
                  </ul>
                </div>
              </div>

              <div class="vt-entry">
                <div class="vt-content">
                  <h4>Networking & Security</h4>
                  <ul>
                    <li>Reverse SSH and hybrid encryption for resilient, encrypted telemetry.</li>
                  </ul>
                </div>
              </div>

              <div class="vt-entry">
                <div class="vt-content">
                  <h4>Backend</h4>
                  <ul>
                    <li>ROS2 + multithreaded Python inference; containerized services with PostgreSQL for logs.</li>
                  </ul>
                </div>
              </div>

              <div class="vt-entry">
                <div class="vt-content">
                  <h4>Hardware</h4>
                  <ul>
                    <li>Pi + Arduino offload for reliable sensing; power budget kept ~22–35W.</li>
                  </ul>
                </div>
              </div>

              <div class="vt-entry">
                <div class="vt-content">
                  <h4>Lessons & Credits</h4>
                  <ul>
                    <li>Expect chaos — design for resilience and recoverability.</li>
                    <li>Team: Marius Antache, Remus Ioan Comeaga & Mihaela Popescu.</li>
                    <li><a href="https://www.linkedin.com/pulse/hard-soft-2025-robotics-engineering-challenge-victor-florescu-nwixf/?trackingId=ZI%2BmHkCuQaioH7piyHQsrg%3D%3D" target="_blank" rel="noopener">Read the full Hard & Soft post</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- CTAs removed; link included in the Lessons & Credits section above. -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Expanded shell styling copied from Projects to match layout exactly */
.expanded-shell { background: linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.16)); padding:1rem; border-radius:12px; border:1px solid rgba(255,255,255,0.025) }
.vertical-timeline { position:relative; display:flex; flex-direction:column; gap:1rem; padding-left:36px }
.vertical-timeline:before { content:''; position:absolute; left:12px; top:8px; bottom:8px; width:3px; background: linear-gradient(180deg, rgba(224,138,90,1), rgba(255,90,40,0.85)); }
.vt-entry { display:flex; gap:1rem; align-items:flex-start; padding:0.6rem; border-radius:8px; background: rgba(0,0,0,0.06); position:relative }
.vt-entry:before { content:none }
.vt-content { flex:1; font-size: 0.95rem; color: var(--muted) }
.vt-content h4 { margin:0 0 0.35rem; font-size: 1.02rem }
.vt-content ul { margin:0; padding-left:1.05rem }
.vt-content li { margin-bottom: 0.28rem }

@media (min-width: 900px) {
  .expanded-shell { padding:1.25rem }
  .vertical-timeline { padding-left:56px }
}

@media (max-width: 780px) {
  .vt-content { font-size: 0.94rem }
  .vertical-timeline { padding-left:36px }
  .vertical-timeline:before { left:12px }
}
</style>
