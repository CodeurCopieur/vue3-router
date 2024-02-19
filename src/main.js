import { createApp } from 'vue'
import 'uno.css'
import './style.css'
import App from './App.vue'
import LeftSideBar from './components/LeftSideBar.vue'
import RightSideBar from './components/RightSideBar.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    { path: '/', 
      // component: () => import('./pages/Home.vue'),
      components: {
        default: () => import('./pages/Home.vue'),
        // LeftSideBar,
        // RightSideBar,
        header: () => import('./components/HeaderComponent.vue')
      },
      props: { name: 'Codwerk'}
    },  
    { path: '/about/:id', 
      components: {
        default: () => import('./pages/About.vue'),
        LeftSideBar: () => import('./pages/Home.vue'),
        RightSideBar: LeftSideBar,
        header: () => import('./components/HeaderComponent.vue')
      },
      props: {default: true, RightSideBar: true, LeftSideBar: true}
    },
    {
      path: '/search',
      name: 'search',
      components: {
        default:() => import('./pages/SearchUser.vue'),
        header: () => import('./components/HeaderComponent.vue')
      },
      props: (route) => ({query: route.query.q})
    },
    {
      path: '/post', 
      name: 'posts',
      components: {
        default:() => import('./pages/Posts.vue'),
        header: () => import('./components/HeaderComponent.vue')
      }, 
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
