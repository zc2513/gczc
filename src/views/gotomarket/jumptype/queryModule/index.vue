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
          <search-bar :team-type="pageData.TeamType" />
          <!-- 展示列表 -->
          <show-list :comp-list-result="pageData.CompListResult" />
        </div>
        <div class="right">
          <!-- 广告位 -->
          <qy :team-rec-list="pageData.CompDeptList" />
          <team :comp-dept-list="pageData.TeamRecList" />
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
import { GetSubstation } from '@/api/gotomarket/queryModule'
export default {
  components: { navSwiper, searchBar, showList, qy, team },
  data() {
    return {
      pageData: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    init(OP = 'teamList') {
      const data = {
        OP,
        page_size: 10,
        page_index: 1,
        famousNumbers: 6,
        groupNumbers: 10
      }
      GetSubstation(data).then(res => { 
        this.pageData = res 
      })
    },
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
