import Vue from 'vue'

import 'normalize.css/normalize.css' // CSS resets

import 'element-ui/lib/theme-chalk/index.css'
import element from './plugins/element.js'

import '@/styles/index.scss' // global css
import '@/styles/element-variables.scss' // element-ui 全局样式文件

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // 权限
import '@/utils/components' // 全局组件注册

import scroll from 'vue-seamless-scroll'

Vue.use(scroll)
Vue.use(element)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
