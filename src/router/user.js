import layoutDashboard from "../layouts/dashboard.vue"
export default [
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/perfil/index.vue'),
    meta: {
      layout: layoutDashboard
    }
  },
]