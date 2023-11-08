import { createRouter, createWebHistory } from 'vue-router'
import auth from './auth'
const Fetchurl = () => import('./views/Fetchurl.vue')

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Nostromo',
        // Lazy-load components
        component: () => import('@/views/Nostromo.vue'),
      },
    ],
  },
  {
    component: Fetchurl,
    path: '/fetchurl',
    meta: {
      title: 'Fetch URL',
    }
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
