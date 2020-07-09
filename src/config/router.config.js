import BasicLayout from "@/layout/BasicLayout";

//const RouteView = {name: 'RouteView', render: h => h('router-view')}

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    children: [
      {
        path: '/form',
        name: 'form',
        meta: { title: '表单', keepAlive: true, icon: 'form' },
        component: () => import('@/views/form')
      },
      {
        path: '/history',
        name: 'history',
        meta: { title: '历史记录', keepAlive: true, icon: 'history' },
        component: () => import('@/views/history')
      },
      {
        path: '/chart',
        name: 'chart',
        meta: { title: '图表', icon: 'pie-chart', keepAlive: true },
        component: () => import('@/views/chart')
      },
      {
        path: '/recommend',
        name: 'recommend',
        meta: { title: '业务推荐', icon: 'like', keepAlive: true }
      }
    ]
  }
]
