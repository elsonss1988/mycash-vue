import { createRouter, createWebHistory } from 'vue-router'
import Lancamento from '@/views/Lancamento/Lancamentos'
import Usuarios from '@/views/Usuario/Usuarios'
import Login from '@/views/login/Login'


const routes = [
  {
    path: '/',
    name: 'Lancamento',
    component: Lancamento
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
