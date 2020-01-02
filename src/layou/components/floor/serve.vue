<template>
  <!-- 公司服务  -->
  <div class="serve">
    <div v-for="(item,index) in list" :key="index" class="serve-item">
      <div class="left flcc">
        <img :src="require(`../../../assets/imgs/${item.src}.jpg`)" alt="">
      </div>
      <div class="right">
        <div class="h4" v-text="item.title" />
        <div class="describe elps" v-text="item.describe" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    src: 'gjrz',
                    title: '资质认证',
                    describe: '企业100%实名审核认证'
                },
                {
                    src: 'gjrz',
                    title: '信息安全',
                    describe: '保密性、完整性、可用性、可控性'
                },
                {
                    src: 'gjrz',
                    title: '一对一服务',
                    describe: '明确把握每一位顾客的需求'
                },
                {
                    src: 'gjrz',
                    title: '全程无忧',
                    describe: '服务出问题客服全程跟踪'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.serve{
    padding-top: 20px;
    height: 104px;
    border-top: 1px solid #dcdcdc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .serve-item{
        width: 228px;
        height: 42px;
        display: flex;
        .left{
            width: 42px;
            height: 42px;
            img{
                max-width: 100%;
            }
        }
        .right{
            width: 186px;
            padding-left: 6px;
            color: #666;
            .h4{
                font-weight: bold;
                font-size: 20px;
            }
            .describe{
                font-size: 12px;
            }
        }
    }
}
</style>
