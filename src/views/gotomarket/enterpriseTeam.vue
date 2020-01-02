<template>
  <div style="margin-top:15px;">
    <div class="twoSides">
      <title-nav :title-obj="enterprise">
        <div class="con">
          <el-carousel
            height="184px"
            indicator-position="none"
          >
            <el-carousel-item
              v-for="(item,index) in list"
              :key="index"
            >
              <div class="flcc hfull enterpriseSwiper-cls">
                <div class="flcc left">
                  <img src="../../assets/imgs/gjrz.jpg" alt="描述">
                </div>
                <div class="right">
                  <h4>公司名称</h4>
                  <div class="describe">
                    借款分类的时间浪费靠的就是
                    借款分类的时间浪费靠的就是
                    借款分类的时间浪费靠的就是
                    借款分类的时间浪费靠的就是
                    借款分类的时间浪费靠的就是
                    借款分类的时间浪费靠的就是
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <ul class="ul-list">
            <li v-for="(item,index) in 5" :key="index">
              <em class="circle" />
              <span class="address elps">陕西省西安市</span>
              <span class="gs elps">华春建设工程项目管理有限公司</span>
              <span class="type elps">勘察设计 工程咨询 施工图标 招标代理 材料供给 勘察设计</span>
            </li>
          </ul>
        </div>
      </title-nav>
      <title-nav :title-obj="team">
        <div class="con">
          <el-carousel
            height="384px"
            indicator-position="none"
          >
            <el-carousel-item
              v-for="(item,index) in list"
              :key="index"
            >
              <div class="hfull teamSwiper-cls">
                <div class="person-box">
                  <div v-for="(ele,k) in 4" :key="k" class="person-item">
                    <div class="img">
                      <img src="../../assets/imgs/person.png" alt="">
                    </div>
                    <div class="nr">
                      <div class="elps">内蒙古自治区呼和浩特市西安市</div>
                      <div class="elps">工程队伍</div>
                      <div class="elps fred">内蒙古哈伦能源集团</div>
                      <div class="elps">团队人数：0~10人</div>
                    </div>
                  </div>
                </div>
                <ul class="ul-list" style="margin-top:10px;">
                  <li v-for="(ele,k) in 4" :key="k">
                    <em class="circle" />
                    <span class="address elps">陕西省西安市</span>
                    <span class="gs elps">华春建设工程项目管理有限公司</span>
                    <span class="type elps">勘察设计 工程咨询 施工图标 招标代理 材料供给 勘察设计</span>
                  </li>
                </ul>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </title-nav>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            enterprise: {
                con: '优秀企业推荐'
            },
            team: {
                con: '优秀团队推荐'
            },
            list: [1, 2, 3]
        }
    }
}
</script>

<style lang="scss" scoped>
    $hoverColor:#f60;
    .twoSides{
        display: flex;
        justify-content: space-between;
        >div{
            width: 49%;
            .con{
                margin: 20px 0;
                padding: 15px 15px 10px;
                border: 1px solid #e6e6e6;
                // 企业推荐
                .enterpriseSwiper-cls{
                  display: flex;
                  justify-content: space-between;
                  >div{
                    height: 141px;
                  }
                  .left{
                    width: 200px;
                    min-width: 200px;
                    margin-left: 25px;
                    // background-image: url('../../assets/imgs/gjrz.jpg');
                    // background-repeat: no-repeat;
                    // background-size: cover;
                    img{
                      width: 100%;
                    }
                  }
                  .right{
                    flex-grow: 1;
                    margin:0 25px;
                    h4{
                      height: 40px;
                      line-height: 40px;
                      font-weight: bold;
                      font-size: 16px;
                      color: #565656;
                    }
                    .describe{
                      width: 310px;
                      height: 103px;
                      line-height: 20px;
                      font-size: 14px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                    }
                  }
                }
                .ul-list{//列表样式
                  >li{
                    height: 40px;
                    line-height: 40px;
                    overflow: hidden;
                    color: #666;
                    display: flex;
                    align-items: center;
                    &:hover{
                      color: $hoverColor;
                    }
                    span{
                      box-sizing: border-box;
                      padding: 0 10px;
                      display: inline-block;
                      font-size: 14px;
                      cursor: pointer;
                    }
                    .address{
                      width: 125px;
                    }
                    .gs{
                      width: 160px;
                      position: relative;
                      &::after{
                        content: '|';
                        position: absolute;
                        left: 0;
                      }
                      &::before{
                        content: '|';
                        position: absolute;
                        right: 0;
                      }
                    }
                  }
                }
                // 团队推荐
                .teamSwiper-cls{
                  .person-box{//人员列表
                    display: flex;
                    flex-wrap: wrap;
                    .person-item{
                      width: 50%;
                      height: 103px;
                      overflow: hidden;
                      border: 1px solid rgba(0,0,0,0);
                      cursor: pointer;
                      display: flex;
                      &:hover{
                        border-color: $hoverColor;
                      }
                      .img{
                        display: flex;
                        align-items: center;
                        height: 100%;
                        padding: 0 10px;
                        img{
                          width: 96px;
                          height: 92px;
                        }
                      }
                      .nr{
                        width: calc(100% - 116px);
                        font-size: 14px;
                        >div{
                          max-width: 96%;
                          height: 25px;
                          line-height: 25px;
                        }
                      }
                    }
                  }
                }
            }
        }

    }
</style>
