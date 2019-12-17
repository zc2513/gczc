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
          <search-bar :team-type="pageData.TeamType" @teamChange='getselet' />
          <!-- 展示列表 -->
          <show-list @changePage='getPage' :comp-list-result="pageData.CompListResult" />
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
      pageData: {},
      reqData:{
        OP:'teamList',
        page_size: 10,
        page_index: 1,
        famousNumbers: 6,
        groupNumbers: 10
      },
      page_size:10,
      type:null,
      OP:'teamList',
      searchData:null
    }
  },
  created() {
    this.init()
  },
  methods: {
    init(index,type) {
      let data = {
        OP:this.OP,
        page_size: this.page_size,
        page_index: index || 1,
        famousNumbers: 6,
        groupNumbers: 10,
        type:this.type,
        searchData:this.searchData,
      }
      GetSubstation(data).then(res => { 
        if(type == 'search'){
          this.pageData.CompListResult = res.CompListResult
        }else{
          this.pageData =  res
        } 
      })
    },
    getPage({type,size}){//分页处理 
      if(type == 'page'){
        this.search(size)  
      }
      if(type == 'strip'){
        this.page_size = size
        this.search()
      }
      
    },
    getselet(e){ 
      this.type = e.type
      this.searchData = e.searchData
      if(e.type || e.searchData){ 
        this.OP = 'PlaList'
        this.init(1,'search')
      }else{
          this.OP = 'teamList'
          this.init() 
      }
    },
    search(size = 1){
      if(this.OP == 'PlaList'){
        this.init(size,'search') 
      }else{
        this.init(size) 
      }
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
