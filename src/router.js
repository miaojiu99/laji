import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('./views/My.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('./views/Searchresult.vue')
    },
    {
      path: '/found',
      name: 'found',
      component: () => import('./views/Searchfound.vue')
    },
    {
      path: '/serve',
      name: 'serve',
      component: () => import('./views/Serve.vue')
    },
    {
      path: '/family',
      name: 'family',
      component: () => import('./views/Servefamily.vue')
    },
    {
      path: '/enterprise',
      name: 'enterprise',
      component: () => import('./views/Serveenterprise.vue')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('./views/Classify.vue')
    },
    {
      path: '/valued',
      name: 'valued',
      component: () => import('./views/Valued.vue')
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('./views/Brand.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('./views/Book.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/Address.vue')
    },
    
  ]
})
