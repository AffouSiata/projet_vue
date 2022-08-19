import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about  from "../views/about.vue";
import contact from '../views/contact.vue'
import connexion from '../views/connexion.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
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
