<template>
  <vue-seamless-scroll
    :data="listData"
    :class-option="{
      direction,
      step,
      hoverStop,
      singleHeight,
      waitTime,
      autoPlay
    }"
    class="seamless-warp"
  >
    <!-- <ul class="item">
            <li v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </li>
        </ul> -->
    <slot />
  </vue-seamless-scroll>
</template>
<script>
/**
 * @props 接收参数
 *  自动播放：autoPlay: false/true
 *  滚动方向：direction->参数：0,1,2 0:向下滚动 1:向上 2:水平方向滚动
 *  向左滚动: direction:2    limitMoveNum: 2
 *  向右滚动: direction:2    limitMoveNum: 4
 *  速度：    step：正数向上移动；负数向下移动
 *  鼠标悬停：hoverStop:Boolen; ture停 false
 *  每步停留时间：  waitTime 单位毫秒
 *  每次移动距离:   singleHeight 结合waitTime使用
 */
export default {
    props: {
        autoPlay: {
            type: Boolean,
            default: true
        },
        direction: {
            type: Number,
            default: 1
        },
        step: {
            type: Number,
            default: 1
        },
        hoverStop: {
            type: Boolean,
            default: true
        },
        waitTime: {
            type: Number,
            default: 0
        },
        singleHeight: {
            type: Number,
            default: 0
        },
        listData: {
            type: Array,
            default: function() {
                return []
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .seamless-warp {
        height: 100%;
        width: 100%;
        overflow: hidden;
        ul{
            padding: 0;
            width: 100%;
            background-color: #666;
            list-style: none;
            >li{
                width: 100%;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
                &:hover{
                    background-color: #fff;
                }
            }
        }
    }
</style>
