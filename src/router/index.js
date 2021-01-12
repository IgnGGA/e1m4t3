import Vue from 'vue'
import VueRouter from 'vue-router'
import Cover from '../views/Cover.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Info from '../views/Info.vue'
import Registration from '../views/Registration.vue'
import Rules from '../views/Rules.vue'
import PageTestView from '../views/PageTestView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path :"/",
    name:Cover,
    component:Cover
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  },
  {
    path:'/info',
    name:'Info',
    component:Info
  },
  {
    path:'/registration',
    name:'Registration',
    component:Registration
  },
  {
    path:'/rules',
    name:'Rules',
    component:Rules
  },
  {
    path:'/PageTestView',
    name:'PageTestView',
    component:PageTestView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router