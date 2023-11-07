import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {path: '/', component: () => import('./pages/Home.vue')},
    {path: '/about', component: () => import('./pages/About.vue')},
    {path: '/:pathMatch(.*)', component: () => import('./pages/NotFound.vue')}
  ],
  history: createWebHistory(import.meta.env.BASE_URL),

});

const application = createApp(App)

application.use(router)
application.mount('#app')
