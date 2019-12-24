import Vue from 'vue'
import Router from 'vue-router'
import Encryption from '@/components/Encryption'
import LysRequest from '@/components/LysRequest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Encryption
    },
    {
      path: '/request',
      name: 'Request',
      component: LysRequest
    }
  ]
})