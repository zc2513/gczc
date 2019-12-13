<template>
  <!-- 咨询中心/选项卡部分 -->
  <div class="tbs-box">
    <div class="nav-title">
      <div
        v-for="(item,index) in btns"
        :key="index"
        :class="{'isAdvisory':istrue == index}"
        @click="pitchOn(index)"
      >
        {{ item }}</div>
    </div>
    <ul class="news-list">
      <li v-for="(item,index) in 6" :key="index">
        <div class="left elps">
          逐梦雁塔”创业行暨文化企业融资对接会在华春众创工场成功召开
        </div>
        <div> [2019-08-13] </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btns: ['工程资讯', '企业新闻', '行业资讯'],
      istrue: 0
    }
  },
  methods: {
    pitchOn(e) {
      this.istrue = e
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin isAdvisory {
    background-color: #d8292e;
    color: #FFF;
}
.tbs-box{
    .nav-title{//选项
        display: flex;
        justify-content: space-between;
        >div{
            width: 32%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            color: #d8292e;
            background-color: #cdcbcc;
            &:hover{
                @include isAdvisory
            }
        }
        .isAdvisory{
            @include isAdvisory
        }
    }
    .news-list{//列表
        >li{
            box-sizing: border-box;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            font-size: 14px;
            color: #666;
            padding: 0 10px;
            display: flex;
            .left{
                flex-grow: 1;
                padding-left: 20px;
                position: relative;
                &:hover{
                    color: #f60;
                }
                &::after{
                    content: '';
                    position:absolute;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    left: 0;
                    top: calc(50% - 2.5px);
                    background-color: #666;
                }
            }
        }
    }
}
</style>
