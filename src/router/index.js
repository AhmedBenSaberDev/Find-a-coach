import Vue from 'vue'
import VueRouter from 'vue-router'

import PageNotFound from '../pages/PageNotFound';
import CoachesList from '../pages/coaches/CoachesList';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/coaches'
  },
  {
    path:'/coaches',
    component:CoachesList
  },
  {
    path:'/coaches/:id',
    component:null,
    children:[{path:'contact',component:null}]
  },
  {
    path:'/register',
    component:null
  },
  {
    path:'/requests',
    component:null
  },
  {
    path:'/:notfound(.*)',
    component:PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
