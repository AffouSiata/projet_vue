import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import inscription from '../views/inscription.vue'
import services from '../views/services.vue'
import connexion from '../views/connexion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: inscription
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: connexion
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
