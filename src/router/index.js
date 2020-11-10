import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Mine from '../views/Mine.vue'
import Expand from '../views/Expand.vue'
import SeekAgent from '../views/SeekAgent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Index
  },
  {
    path:'/mine',
    component:Mine
  },{
    path:'/expand',
    component:Expand
  },{
    path:'/seekagent',
    component:SeekAgent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
