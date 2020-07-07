import BasicLayout from "@/layout/BasicLayout";

const RouteView = {name: 'RouteView', render: h => h('router-view')}

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: RouteView,
        meta: { title: 'menu.dashboard', keepAlive: true, icon: 'qq' },
      },
      {
        path: '/form',
        name: 'form',
        meta: { title: '表单', keepAlive: true, icon: 'form' },
        component: () => import('@/views/form')
      }
    ]
  }
]
