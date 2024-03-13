import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/Main.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: 'faq',
          name: 'faq',
          component: () => import('@/views/FAQ.vue')
        },
        {
          path: 'security',
          name: 'security',
          component: () => import('@/views/Security.vue')
        },
        {
          path: 'document',
          name: 'document',
          component: () => import('@/views/Document.vue')
        }
      ]
    }
  ]
})

export default router
