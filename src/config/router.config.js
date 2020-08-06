import BasicLayout from "@/layout/BasicLayout";

//const RouteView = {name: 'RouteView', render: h => h('router-view')}

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: 'form',
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
        meta: { title: '图表', icon: 'dot-chart', keepAlive: true },
        component: () => import('@/views/chart')
      },
      {
        path: '/recommend',
        name: 'recommend',
        meta: { title: '业务推荐', icon: 'like', keepAlive: true },
        component: () => import('@/views/recommend'),
        redirect: '/recommend/search',
        children: [
          {
            path: '/recommend/search',
            name: 'SearchStudent',
            component: () => import('@/views/recommend/SearchStu'),
            meta: { title: '查找', icon: 'monitor'}
          },
          {
            path: '/recommend/scholarship',
            name: 'Scholarship',
            component: () => import('@/views/recommend/Scholarship'),
            meta: { title: '奖学金情况', icon: 'bank'}
          },
          {
            path: '/recommend/subsidy',
            name: 'Subsidy',
            component: () => import('@/views/recommend/Subsidy'),
            meta: { title: '补贴情况', icon: 'qq'}
          },
        ]
      },
    ]
  }
]
