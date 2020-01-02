/**
 *轮播图及插槽配置
 *@height 走马灯的高度
 *@list 轮播图数据
 *@type 轮播图类型： 参数1:'';参数二：'card'
 *@autoplay 是否自动切换
 *@direction 走马灯展示的方向 horizontal/vertical
 *@interval 自动切换的时间间隔，单位：毫秒
 *@trigger 指示器触发方式
 *@indicatorPosition 指示器位置 outside/none
 *@initIndex 初始化展示的数组索引
 *@arrow 切换箭头是否展示：always->始终显示 hover->获取焦点显示 never->从不显示
 *@loop 是否循环轮播
 *@pubSlotCls   {公用插槽样式，接收样式对象
                  left: 0,
                  right:0,
                  top:0,
                  bottom:0,
                  backgroundColor: '#F00'
                }
*/

export default {
    list: {
        type: Array,
        default: function() {
            return [1, 2, 3]
        }
    },
    type: {// 轮播图类型： 参数1:'';参数二：'card'
        type: String,
        default: ''
    },
    autoplay: {// 是否自动切换
        type: Boolean,
        default: true
    },
    direction: {// 走马灯展示的方向 horizontal/vertical
        type: String,
        default: 'horizontal'
    },
    interval: {// 自动切换的时间间隔，单位：毫秒
        type: Number,
        default: 5000
    },
    trigger: {// 指示器触发方式
        type: String,
        default: 'hover'
    },
    indicatorPosition: {// 指示器位置
        type: String,
        default: ''
    },
    initIndex: {// 初始化展示的数组索引
        type: Number,
        default: 0
    },
    height: {// 走马灯的高度
        type: Number,
        default: 300
    },
    arrow: {// 切换箭头是否展示：always->始终显示 hover->获取焦点显示 never->从不显示
        type: String,
        default: 'never'
    },
    loop: {// 是否循环轮播
        type: Boolean,
        default: true
    },
    pubSlotCls: {// 公用插槽样式
        type: Object
    }
}
