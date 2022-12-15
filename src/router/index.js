import { createRouter, createWebHistory } from 'vue-router'

//layout por default si no tiene asignado un meta
import layoutDefault from "../layouts/default.vue"
// importacion de archivo de rutas comunes
import common from './common'
// importacion de rutas del usuario
import user from './user'
//rutas del usuario auth
import auth from './auth'

// Crear un arreglo con todas las rutas
let routes = [
  ...common,
  ...user,
  ...auth
]

//asigna un layout por defecto a la ruta que no tenga meta
routes =  routes.map((route)=>{
  //condicion if para validar si el layout tiene meta
  if(!route.meta?.layout){
    route.meta = Object.assign({}, route.meta, { layout: layoutDefault})
  }
  return route
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
