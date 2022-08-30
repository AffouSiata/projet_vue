import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import inscription from '../views/inscription.vue'
import connexion from '../views/connexion.vue'
import consulte from '../views/consulte.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
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
  },
  {
    path: '/consulte',
    name: 'consulte',
    component: consulte
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
