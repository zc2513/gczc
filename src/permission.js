import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration 是否开启圆滚滚

const whiteList = ['/personal'] // 个人中心路由权限拦截

router.beforeEach(async(to, from, next) => {
    // 打开进度条加载
    NProgress.start()
    next()
    // 页面标题设置
    document.title = getPageTitle(to.meta.title)

    if (whiteList.indexOf(to.path) !== -1) { // 个人中心内功能跳转验证拦截
    // 获取用户登录标识token
        const hasToken = getToken()
        if (hasToken) {
            // 用户登录处理

            // 1.1 获取用户信息，并存储，之后跳转页面
            const hasGetUserInfo = store.getters.name
            if (hasGetUserInfo) {
                // 获取到跳入个人中心页面
                next()
            } else {
                // 获取不到，则根据用户标识token重新拉取信息并跳转
                try {
                    // 异步token获取用户信息
                    await store.dispatch('user/getInfo')
                    next()
                } catch (error) {
                    // 获取用户信息失败，则删除用户标识token
                    await store.dispatch('user/resetToken')
                    Message.error(error || 'Has Error--获取用户信息失败请重新登录')
                    // next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        } else {
            // 否则跳回登录页面登录-或者弹窗登录
            // next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    } else { // 非权限页面直接跳转，功能性拦截，以axios请求拦截为准
        next()
    }
})

router.afterEach(() => {
    NProgress.done()
})

