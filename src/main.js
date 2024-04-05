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
        RightSideBar,
        header: () => import('./components/HeaderComponent.vue')
      },
      props: { name: 'Codwerk'},
      beforeEnter: [auth1, auth2]
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
    {
      path: '/:pathMatch(.*)', 
      components: {
        default: () => import('./pages/NotFound.vue'),
        header: () => import('./components/HeaderComponent.vue')
      }
    }
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true
});

function authAccess(to) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      if (to.path.includes('post') || to.path.includes('notfound')) {
        resolve(true)
      } else {
        resolve(false)
      }
    }, 500)
  })
}

function auth1(to, from) {
  console.log('auth1');
  return false;
}

function auth2(to, from) {
  console.log('auth2');
  return true
}

router.beforeEach(async(to, from, next) => {
  console.log('beforeEach');
  next(true)
  // const hasAccess = await authAccess(to)
  // if (!hasAccess) {
  //   // return { path: '/notfound'}
  //   next({path: '/notfound'})
  // } else {
  //   next(true)
  // }
  // return true
  
})

router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log('afterEach');
})  

router.beforeResolve(async(to)=> {
  console.log('beforeResolve');
  if (to.path.includes('post')){
    // await authAccess(to)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    application.provide('postsData', await res.json())
  }
  
})

const application = createApp(App)

application.use(router)
application.mount('#app')
