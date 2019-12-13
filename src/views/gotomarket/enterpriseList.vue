<template>
  <div class="enterprise-list-box">
    <ul>
      <li v-for="(item,index) in 18" :key="index" @mouseenter="hoverin(index)" @mouseleave="hoverout">
        <div class="item">
          <div class="img-box">
            <div class="img" />
          </div>
          <div class="h4">
            工程咨询
          </div>
          <div class="describe elps">
            工程项目可行性研究报告公司
          </div>
        </div>
        <transition name="checkIn">
          <div v-show="nowIndex == index" class="pop-up" @click="save">
            <span>工程咨询</span>
            <span>31</span>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      nowIndex: null
    }
  },
  methods: {
    save() {
      this.$message.success('点击事件处理')
    },
    hoverin(index) {
      this.nowIndex = index
    },
    hoverout() {
      this.nowIndex = null
    }
  }
}
</script>

<style lang="scss" scoped>
    .enterprise-list-box{
        width: 100%;
        padding: 1px;
        ul{
            width: 100%;
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            >li{
                overflow: hidden;
                width: calc(100% / 6);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
                border: 1px solid #fff;
                position: relative;
                cursor: pointer;
                .item{
                    width: 212px;
                    height: 186px;
                    text-align: center;
                    .img-box{
                        height: 114px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .img{
                            width: 104px;
                            height: 104px;
                            border-radius: 50%;
                            background-color: #ccc;
                        }
                    }
                    .h4{
                        height: 34px;
                        line-height: 34px;
                        font-size: 18px;
                        font-weight: 700;
                    }
                    .describe{
                        margin-top: 10px;
                        font-size: 12px;
                    }
                }
                &:hover{
                    border: 1px solid #4cbfb8;
                }
                .pop-up{
                    position: absolute;
                    height: 50px;
                    line-height: 50px;
                    background-color: #999;
                    overflow: hidden;
                    text-align: center;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
            }
        }

    }
</style>
