
/**
 * @description elemetn-ui 按需引入
 * @location https://element.eleme.cn/2.13/#/zh-CN/component/quickstart
*/
import Vue from 'vue'
import {
    Button,
    Menu,
    Submenu,
    MenuItem,
    Carousel,
    CarouselItem,
    Cascader,
    Input,
    Pagination,
    Message
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 1000 }
Vue.prototype.$message = Message

export default {
    install: function(Vue) {
        Vue.use(Button)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItem)
        Vue.use(Carousel)
        Vue.use(CarouselItem)
        Vue.use(Cascader)
        Vue.use(Input)
        Vue.use(Pagination)
    }
}

