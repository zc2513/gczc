import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layou from '@/layou'

/**
 * hidden: true                   true不显示路由,默认为false
 * redirect: noRedirect           如果设置noRedirect将不会在面包屑中重定向
 * name:'router-name'             路由名称，在<keep-alive>中使用(必须设置)
 * meta : {
    roles: ['admin','editor']    控制页面角色(您可以设置多个角色)
    title: 'title'               侧栏和面包屑展示的名称
    icon: 'svg-name'             图标
    breadcrumb: false            面包屑设置：(默认为true)，如果设置为false，则不再面包屑中显示
    activeMenu: '/example/list'  如果设置路径，侧栏将突出显示您设置的路径
  }
 */

/**
 * constantRoutes
 * 无权限要求的配置数据，所以路由用户均可访问
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/home/index',
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/home',
    component: Layou,
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'form' }
      }
    ]
  },
  {
    path: '/gotomarket',
    component: Layou,
    redirect: '/gotomarket/index',
    name: 'gotomarket',
    meta: { title: '工程赶集', icon: 'form' },
    children: [
      {
        path: 'index',
        name: 'gotomarket',
        component: () => import('@/views/gotomarket/index'),
        meta: { title: '工程赶集首页', icon: 'form' },
        hidden: true
      },
      {
        path: 'jump',
        name: 'queryModule',
        component: () => import('@/views/gotomarket/jumptype/queryModule/index'),
        hidden: true
      },
      {
        path: 'info',
        name: 'info',
        component: () => import('@/views/gotomarket/jumptype/infos/index'),
        meta: { title: '详情页面', icon: 'form' },
        hidden: true
      }
    ]
  },
  {
    path: '/crowdsourcing',
    component: Layou,
    children: [
      {
        path: 'index',
        name: 'crowdsourcing',
        component: () => import('@/views/crowdsourcing/index'),
        meta: { title: '众包工厂', icon: 'form' }
      }
    ]
  },
  {
    path: '/oncall',
    component: Layou,
    children: [
      {
        path: 'index',
        name: 'oncall',
        component: () => import('@/views/oncall/index'),
        meta: { title: '电招大厅', icon: 'form' }
      }
    ]
  },
  {
    path: '/entrust',
    component: Layou,
    children: [
      {
        path: 'index',
        name: 'entrust',
        component: () => import('@/views/entrust/index'),
        meta: { title: '一站委托', icon: 'form' }
      }
    ]
  },
  {
    path: '/academy',
    component: Layou,
    children: [
      {
        path: 'index',
        name: 'academy',
        component: () => import('@/views/academy/index'),
        meta: { title: '工程学院', icon: 'form' }
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/components/pagination'),
    meta: { title: '组件测试', icon: 'form' }
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // 需要后端开启服务支持
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
