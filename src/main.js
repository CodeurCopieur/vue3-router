import { createApp } from 'vue'
import 'uno.css'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {path: '/', component: () => import('./pages/Home.vue')},
    {path: '/about', component: () => import('./pages/About.vue')},
    {
      path: '/post', 
      name: 'posts',
      component: () => import('./pages/Posts.vue'), 
      children: [
        { 
          path: ':id', 
          name: 'singlePost',
          component: () => import('./pages/SinglePost.vue')
        }
      ]
    },
    // {path: '/:productName+', component: () => import('./pages/ProductComponent.vue')},
    // {path: '/:id(\\d+)', component: () => import('./pages/SinglePost.vue')},
    // {path: '/posts/:id', component: () => import('./pages/SinglePost.vue')},
    {path: '/:pathMatch(.*)', component: () => import('./pages/NotFound.vue')}
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true
});

const application = createApp(App)

application.use(router)
application.mount('#app')
