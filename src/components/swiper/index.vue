<template>
  <div class="swiper-box" :style="{'height':`${height}px`}">
    <div class="header-slot" :style="pubSlotCls">
      <slot name="header">
        <!-- 公用UI插槽 -->
      </slot>
    </div>
    <el-carousel
      :interval="interval"
      :height="`${height}px`"
      :initial-index="initIndex"
      :autoplay="autoplay"
      :trigger="trigger"
      :type="type"
      :loop="loop"
      :indicator-position="indicatorPosition"
      :arrow="arrow"
    >
      <el-carousel-item
        v-for="item in list"
        :key="item"
      >
        <div :style="{'height':`${height}px`}">
          <div class="flcc hfull">
            <h3>{{ item }}</h3>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import props from './props'
export default {
  name: 'NavSwiper',
  props
}
</script>
<style lang="scss" scoped>
  .swiper-box{
    width: 100%;
    position: relative;
    .header-content{
      position: absolute;
    }
    .header-slot{
      position: absolute;
      z-index: 100;
    }
  }
</style>
<style>
  .swiper-box .el-carousel__item h3 {
    color: #f00;
    font-size: 18px;
    opacity: 0.75;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: rgba(0,0,0,0.2);
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
