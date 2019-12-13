<template>
  <div>
    <!-- 轮播图 -->
    <nav-swiper :list="swiperData.list" :height="357" :pub-slot-cls="swiperData.pubSlotCls">
      <div slot="header">
        <login-bar />
      </div>
    </nav-swiper>
    <div class="typeArea">
      <!-- 跳转模块 -->
      <jump-type />
      <!-- 工程动态/招标信息 -->
      <vertical-swiper />
      <!-- 广告banner -->
      <div class="banner" />
      <!-- 入住企业 -->
      <title-nav :title-obj="checkIn">
        <enterprise-list />
      </title-nav>
      <!-- 优秀企业/优秀团队-推荐 -->
      <enterprise-team />
      <!-- 创业团队 -->
      <title-nav :title-obj="ESTPTeam">
        <div class="ESTPTeam-BOX" />
      </title-nav>
      <!-- 咨询中心 -->
      <title-nav :title-obj="advisory">
        <consult />
      </title-nav>
    </div>
    <!-- 合作伙伴部分 -->
    <partner />
  </div>
</template>

<script>
import navSwiper from '@/components/swiper'
import loginBar from './loginBar'
import jumpType from './jumptype/index'
import verticalSwiper from './verticalSwiper'
import enterpriseList from './enterpriseList'
import enterpriseTeam from './enterpriseTeam'
import consult from './consult'
import partner from '@/views/common/partner'
export default {
  components: {
    navSwiper,
    loginBar,
    jumpType,
    verticalSwiper,
    enterpriseTeam,
    enterpriseList,
    consult,
    partner
  },
  data() {
    return {
      swiperData: {// 轮播图数据
        list: [1, 2],
        pubSlotCls: {// 公用部分定位及大小
          width: '245px',
          height: '280px',
          top: '40px',
          right: '20%',
          backgroundColor: '#fafce6'
        }
      },
      radio1: '上海',
      checkIn: {
        con: '入住企业',
        describe: '最新入驻企业292家'
      },
      ESTPTeam: {
        con: '创业团队',
        describe: '最新入驻创业团队125家'
      },
      advisory: {
        con: '资讯中心',
        describe: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
    background-image: url('../../assets/imgs/banner.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 220px;
    margin-bottom: 20px;
    cursor: pointer;
}
.ESTPTeam-BOX{
    height:360px;
    margin-top:20px;
    margin-bottom:20px;
    background-image: url('../../assets/imgs/td-bg.jpg');
}

</style>
