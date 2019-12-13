<template>
  <div style="margin-top:15px;">
    <div class="twoSides">
      <title-nav :title-obj="ECN">
        <seam-scroll class="con" :list-data="listData">
          <ul class="ECN-Ul">
            <li v-for="(item,index) in listData" :key="index">
              <div class="left elps">
                名称
              </div>
              <div class="right">
                <div class="address">
                  地址 &nbsp; |
                </div>
                <div class="center elps" v-text="item.title" />
                <div class="time" v-text="item.date" />
              </div>
            </li>
          </ul>
        </seam-scroll>
      </title-nav>
      <title-nav :title-obj="zbInfo">
        <seam-scroll class="con" :list-data="listData">
          <ul class="zbInfo-Ul">
            <li v-for="(item,index) in listData" :key="index">
              <!-- <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
                             -->
              <div class="left elps">
                左侧健康管理师就开了个副驾驶的两个房间个副驾驶的两个房间
              </div>
              <div class="right">
                <div>竞争性谈判</div>
                <div>地址</div>
                <div v-text="item.date" />
              </div>
            </li>
          </ul>
        </seam-scroll>
      </title-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ECN: {
        con: '工场动态',
        isLine: true,
        describe: '最新工场动态发布3919条'
      },
      zbInfo: {
        con: '招标信息',
        isLine: true,
        describe: '最新招标信息发布32187个'
      },
      listData: [
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        },
        {
          'title': '无缝滚动第一行无缝滚动第一行',
          'date': '2017-12-16'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .twoSides{
        display: flex;
        justify-content: space-between;
        >div{
            width: 49%;
            .con{
                margin: 20px 0;
                height: 336px;
                padding: 15px 15px 10px;
                border: 1px solid #e6e6e6;
                ul{//轮播样式
                    font-size: 14px;
                    color: #444;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    list-style: none;
                    >li{
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        cursor: pointer;
                    }
                }
                .ECN-Ul{//工程动态
                    >li{
                        display: flex;
                        .left{
                            width: 100px;
                        }
                        .right{
                            width: calc(100% - 100px);
                            display: flex;
                            .address{
                                width: 80px;
                            }
                            .center{
                                flex: 1;
                                overflow: hidden;
                            }
                            .time{
                                width: 86px;
                            }
                            &:hover{
                                color: #fe6720;
                            }
                        }
                    }
                }
                .zbInfo-Ul{//招标信息
                    >li{
                        display: flex;
                        .left{
                            width: 56%;
                        }
                        .right{
                            width: 44%;
                            display: flex;
                            >div{
                                box-sizing: border-box;
                                &:first-of-type{
                                    width: 100px;
                                    padding: 0 10px;
                                }
                                &:nth-of-type(2){
                                    flex: 1;
                                    padding: 0 4px;
                                }
                                &:last-of-type{
                                    width: 90px;
                                }
                            }
                        }
                        &:hover{
                            color: #fe6720;
                        }
                    }
                }
            }
        }
    }
</style>
