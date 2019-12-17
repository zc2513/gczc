<template>
  <!-- 底部联系人部分 -->
  <div class="link-man-box">
    <div class="QR">
      <img src="../../../assets/imgs/floor/ewm.jpg" alt="">
    </div>
    <div class="relation">
      <div v-for="(item,index) in FooterInfos.Contacts" :key="index" class="relation-item">
        <div class="item-left">
          <em><img src="../../../assets/imgs/floor/ewm.jpg" alt=""></em>{{ item.Type }}：
        </div>
        <div class="lx">
          <div v-for="(ele,k) in item.Info" :key="k">{{ ele.Name }} {{ ele.Tel }}</div>
        </div>
      </div>
      <div class="other" style="margin-top:6px;">
        E-mail：{{ FooterInfos.Email }}
      </div>
      <div class="other">
        地 址：{{ FooterInfos.Address }}
      </div>
    </div>
  </div>
</template>

<script>
import { getfooter } from '@/api/public/footer'
export default {
  props: {
    links: {
      type: Object
    }
  },
  data() {
    return {
      FooterInfos: {}
    }
  },
  created() {
    getfooter().then(res => {
      this.FooterInfos = res.FooterInfo
    })
  }
}
</script>

<style lang="scss" scoped>
$height:24px;
.link-man-box{
    width: 425px;
    display: flex;
    .QR{
        width: 105px;
        img{
            width: 100%;
        }
    }
    .relation{
        margin-top: 6px;
        margin-left: 20px;
        font-size: 14px;
        color: #666;
        flex-grow: 1;
        .relation-item{
            display: flex;
            .item-left{
                height: $height;
                color: #FFBB03;
                width: 100px;
                display: flex;
                align-items: center;
                em{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-right: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 100%;
                    }
                }
            }
            .lx{
                flex-grow: 1;
                >div{
                    height: $height;
                    line-height: $height;
                }
            }
        }
        .other{
            line-height: 20px;
        }
    }
}
</style>
