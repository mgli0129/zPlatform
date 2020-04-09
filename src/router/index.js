import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Dashboard = () => import('../views/Dashboard.vue')
const Projects = () => import('../views/Projects.vue')
const Team = () => import('../views/Team.vue')
const Color = () => import('../views/Color.vue')

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/color',
    name: 'color',
    component: Color
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
