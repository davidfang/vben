import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: '菜单管理',
    },
    name: 'MenuManage',
    path: '/menu',
    children: [
      {
        meta: {
          title: '菜单列表',
        },
        name: 'MenuList',
        path: '/menu/list',
        component: () => import('#/views/menu/index.vue'),
      },
    ],
  },
];

export default routes;
