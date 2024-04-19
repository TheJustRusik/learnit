import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MainView.vue'
import { useQuizesStore } from '@/stores/quizes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/quiz',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizView.vue')
    }
  ]
})
router.beforeEach((to) => {
  const store = useQuizesStore()
})

export default router
