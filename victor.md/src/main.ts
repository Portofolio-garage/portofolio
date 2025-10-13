import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

// small helper to ensure reveal animations run on route changes
function runReveal() {
	const els = Array.from(document.querySelectorAll('.reveal'))
	els.forEach(e => e.classList.remove('is-visible'))
	// give the browser a tick then add class so animation runs
	requestAnimationFrame(() => els.forEach(e => e.classList.add('is-visible')))
}

router.afterEach(() => {
	// run the reveal logic after navigation
	setTimeout(runReveal, 60)
})

app.mount('#app')
