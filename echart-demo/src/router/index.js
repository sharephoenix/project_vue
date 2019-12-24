import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/Test.vue')
    }
  ]
})