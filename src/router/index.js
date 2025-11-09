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
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('@/views/BlogList.vue')
        },
        {
          path: 'blog/:slug',
          name: 'blog-detail',
          component: () => import('@/views/BlogDetail.vue')
        }
      ]
    }
  ]
})

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)
})

export default router
