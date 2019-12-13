<template>
  <div class="link-man-box">
    <div class="QR">
      <img src="../../../assets/imgs/floor/ewm.jpg" alt="">
    </div>
    <div class="relation">
      <div v-for="(item,index) in links.data" :key="index" class="relation-item">
        <div class="item-left">
          <em><img src="../../../assets/imgs/floor/ewm.jpg" alt=""></em>{{ item.type }}：
        </div>
        <div class="lx">
          <div v-for="(ele,k) in item.links" :key="k">{{ ele.name }} {{ ele.phone }}</div>
        </div>
      </div>
      <div class="other" style="margin-top:6px;">
        E-mail：huachunzhch@163.com
      </div>
      <div class="other">
        地 址：西安市南二环西段58号成长大厦8层
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Object
    }
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
