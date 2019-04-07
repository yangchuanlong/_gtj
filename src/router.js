import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: 'overview',
        alias: '',
        component: () => import("./views/pages/overview.vue")
      }, {
        path: 'current-situation',
        component: () => import("./views/pages/currentSituation.vue")
      }, {
        path: 'ledger',
        component: () => import("./views/pages/ledger.vue")
      },
      {
        path: 'data-center',
        component: () => import("./views/pages/dataCenter.vue")
      }, {
        path: 'auxiliary-analyse',
        component: () => import("./views/pages/auxiliaryAnalyse.vue")
      }, {
        path: 'document',
        component: () => import("./views/pages/document.vue")
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ "./views/Login.vue")
    }
  ]
})
