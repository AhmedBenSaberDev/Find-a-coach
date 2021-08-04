import Vue from 'vue'
import VueRouter from 'vue-router'

import PageNotFound from '../pages/PageNotFound';
import CoachesList from '../pages/coaches/CoachesList';
import CoachDetail from '../pages/coaches/CoachDetail';
import CoachRegistration from '../pages/coaches/CoachRegistration';
import ContactCoach from '../pages/requests/ContactCoach';

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/coaches'
  },
  {
    path:'/coaches',
    component:CoachesList,
    name:'coaches'
  },
  {
    path:'/coaches/:id',
    props:true,
    component:CoachDetail,
    children:[{path:'contact',component:ContactCoach}]
  },
  {
    path:'/register',
    component:CoachRegistration
  },
  {
    path:'/requests',
    component:null
  },
  {
    path:'/:notfound(.*)',
    component:PageNotFound,
    name:'Page'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
