import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
          path: '/',
          component: () => import('../components/common/Home.vue'),
          meta: { title: '自述文件' },
          children: [
              {
                  path: '/dashboard',
                  component: () => import('../components/page/HelloWorld.vue'),
                  meta: { title: '系统首页' }
              },
              {
                path: '/table',
                component: () => import('../components/page/BaseTable.vue'),
                meta: { title: '系统首页' }
              },
            ]
        }
    ]
  }
)