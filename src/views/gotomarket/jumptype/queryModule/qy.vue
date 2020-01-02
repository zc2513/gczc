<template>
  <div class="qy-box">
    <div class="title">
      <span>优秀企业推荐</span>
    </div>
    <div v-if="teamRecList&&teamRecList.Rows" class="list">
      <div v-for="(item,index) in teamRecList.Rows" :key="index" @click="skip(item.ID)">
        <div class="img-box flcc">

          <img v-if="item.logo" :src="item.logo" alt="">
          <img v-else src="../../../../assets/imgs/floor/ewm.jpg" alt="">
        </div>
        <div class="describe elps">
          {{ item.CompDetpName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skip from './mixin'
export default {
    mixins: [skip],
    props: {
        // eslint-disable-next-line vue/require-default-prop
        teamRecList: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin border{
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
}
$color:#f60;
.qy-box{
    width: 100%;
    border-top: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
    .title{
        @include border;
        padding: 15px;
        span{
            color: #333;
            font-size: 16px;
            padding-left: 6px;
            border-left: 2px solid #21a0f5;
        }
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        :hover{
            color: $color;
        }
        >div{
            @include border;
            width: 50%;
            height: 124px;
            cursor: pointer;
            text-align: center;
            position: relative;
            &:hover{
              &::after{
                    content: '';
                    position: absolute;
                    width: 1px;
                    background-color: $color;
                    left: 0;
                    top: 0;
                    bottom: 0;
                }
            }
            .img-box{
                height: 100px;
                img{
                    width: 80px;
                }
            }
            .describe{
                font-size: 14px;
            }
        }
    }
}
</style>
