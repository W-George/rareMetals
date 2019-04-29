import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import List from './views/List'
import Details from './views/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/list/:id',
      name: 'list',
      component:List
    },
    {
      path: '/details',
      name: 'details',
      component:Details
    },
  ]
})
