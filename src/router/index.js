import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Dashboard = () => import('../views/Dashboard.vue')
const Projects = () => import('../views/Projects.vue')
const Team = () => import('../views/Team.vue')
const Color = () => import('../views/Color.vue')
const Positioning = () => import('../views/layout/childComps/Positioning.vue')
const FloatButton = () => import('../views/layout/childComps/FloatButton.vue')
const FloatButton1 = () => import('../views/layout/childComps/FloatButton1.vue')

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
  },
  {
    path: '/positioning',
    name: 'positioning',
    component: Positioning
  },
  {
    path: '/floatbutton',
    name: 'floatbutton',
    component: FloatButton
  },
  {
    path: '/floatbutton1',
    name: 'floatbutton1',
    component: FloatButton1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes
})

export default router
