import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView/index.vue'
import AboutView from '../views/AboutView/index.vue'
import SignIn from '../views/SignIn/index.vue'
import ContactView from '../views/ContactView/index.vue'
import Features from '../views/Features/index.vue'
import Blog from '../views/Blog/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})

export default router
