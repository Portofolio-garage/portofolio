import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EducationView from '../views/EducationView.vue'
import WorkView from '../views/WorkView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', name: 'home', component: HomeView },
  { path: '/education', name: 'education', component: EducationView },
  { path: '/work', name: 'work', component: WorkView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  ],
  scrollBehavior(to, _from, _saved) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
