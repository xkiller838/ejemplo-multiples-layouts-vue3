import layoutDashboard from "../layouts/dashboard.vue"
import layoutDefault from "../layouts/default.vue"

export default [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../views/welcome/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta:{
      layout: layoutDashboard
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/post/index.vue'),
    meta: {
      layout: layoutDefault
    }
  },
]
