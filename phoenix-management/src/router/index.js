import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
          path: '/home',
          component: () => import('../components/common/Home.vue'),
          meta: { title: '自述文件' },
          children: [
              {
                path: '/',
                component: () => import('../components/page/HelloWorld.vue'),
                meta: { title: 'Helloworld' }
              },
              {
                  path: '/home/helloworld',
                  component: () => import('../components/page/HelloWorld.vue'),
                  meta: { title: 'Helloworld' }
              },
              {
                path: '/home/table',
                component: () => import('../components/page/BaseTable.vue'),
                meta: { title: '用户管理' }
              },
            ]
        }, 
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
    ]
  }
)