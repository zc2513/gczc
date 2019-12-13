<template>
<!-- 查询与展示页面 -->
  <div>
    <!-- 轮播 -->
    <nav-swiper :list="[1, 2]" :height="280" indicator-position="none" />

    <div class="typeArea">
      <!-- 当前位置 -->
      <div class="n-title">
        当前位置：首页/工程赶集/找团队 
        <el-button size="mini" type="warning" @click="goBack"> 返回 </el-button>
      </div>

      <!-- 布局部分 -->
      <div class="layout" style="margin-bottom:20px;">
        <div class="left">
          <!-- 筛选插件1 -->
          <search-bar /> 
          <!-- 展示列表 -->
          <show-list></show-list>
        </div>
        <div class="right">
          <!-- 广告位 -->
          <qy></qy>
          <team></team>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navSwiper from '@/components/swiper'
import searchBar from '@/views/common/searchBar'
import showList from './showList'
import qy from './qy'
import team from './team'
export default {
  components: { navSwiper, searchBar, showList, qy ,team},
  methods: { 
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.n-title{
    height: 40px;
    line-height: 40px;
    color: #999;
    font-size: 14px;
}
.layout{
    width: 100%; 
    display: flex;
    .left{
        width: calc(100% - 270px);
        margin-right: 10px;
    }
    .right{
        width: 260px; 
    }
}
</style>
