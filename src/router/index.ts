import { createRouter, createWebHistory } from 'vue-router'
import DocsView from '../views/docs/DocsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/docs/:tag',
      name: 'docs',
      component: DocsView,
    },
  ],
})

export default router
