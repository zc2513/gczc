
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

