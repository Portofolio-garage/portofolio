import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '../views/EducationView.vue'
import WorkView from '../views/WorkView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import CompetitionsView from '../views/CompetitionsView.vue'
// Note: several routes are kept in the repo but temporarily disabled below.
// import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', name: 'home', component: HomeView },
  { path: '/education', name: 'education', component: EducationView },
  { path: '/work', name: 'work', component: WorkView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/competitions', name: 'competitions', component: CompetitionsView },
  // Blog and Certifications are temporarily disabled
  // { path: '/blog', name: 'blog', component: BlogView },
  { path: '/competitions', name: 'competitions', component: CompetitionsView },
  // { path: '/certifications', name: 'certifications', component: CertificationsView },
  ],
  scrollBehavior(to, _from, _saved) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
