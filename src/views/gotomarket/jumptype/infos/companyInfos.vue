<template>
  <div class="company-box">
    <!-- 公司信息展示 -->
    <div class="company-info">
      <div class="ileft t-b">
        <div class="logo">
          <div class="logo-left">
            <img src="../../../../assets/imgs/40.jpg" alt="">
          </div>
          <div class="logo-right">
            内蒙古君正能源化工集团股份有限公司
          </div>
        </div>
        <div class="principal">
          <span class="bold">
            团队负责人：
          </span>
          <span>小王</span>
          <span class="bold">团队负责人电话：</span>
          <span class="phone">187****5633 </span>
          <el-button class="phone" size="mini" type="text">登录后可见</el-button>
        </div>
        <div class="">
          <span><svg-icon icon-class="eye-show" /></span> 2126 次
        </div>
        <div class="address">
          <div>
            <span class="bold">地区：内蒙古包头市</span>
          </div>
          <div class="report">
            <span><svg-icon icon-class="warning" /></span>举报
          </div>
        </div>
      </div>
      <div class="iright">
        <div>联系TA</div>
        <div> <span><svg-icon icon-class="collection" /></span> 收藏</div>
      </div>
    </div>
    <!-- 团队介绍 -->
    <title-nav :title-obj="teamIntroduce">
      <div class="border teamIntroduceCls" style="margin:10px 0; ">
        兴泰地产集团是内蒙古兴泰集团旗下的产业集团，下辖内蒙古兴泰房地产开发有限责任公司、鄂尔多斯市同泰项目管理有限公司及鄂尔多斯市国泰商务广场项目管理有限公司等三家子公司。目前，兴泰地产集团现已形成资源储备、产品研发、专业化管理、售后服务等高度关联、相互依存、相对独立的运营格局，是兴泰集团投资项目资金保障的有力支柱。集团成员企业成功开发的房地产项目达240余万平方米，累积完成投资约90亿元。
      </div>
    </title-nav>
    <!-- 业绩展示 -->
    <title-nav :title-obj="performance">
      <div class="border performanceCls" style="margin:10px 0; ">
        <div class="show">
          暂无数据
        </div>
      </div>
    </title-nav>
    <!-- 团队动态 -->
    <title-nav :title-obj="dynamic">
      <div class="border dynamicCls" style="margin:10px 0; ">
        我是描述
      </div>
    </title-nav>
    <!-- 团队动态 -->
    <title-nav :title-obj="messageBoard" :iswireb="true">
      <div style="margin:10px 0; ">
        <comment />
      </div>
    </title-nav>
  </div>
</template>

<script>
import comment from './comment'
export default {
    components: { comment },
    data() {
        return {
            teamIntroduce: {
                con: '团队介绍',
                isLine: true,
                ismore: true
            },
            performance: {
                con: '业绩展示',
                isLine: true,
                ismore: true
            },
            dynamic: {
                con: '团队动态',
                isLine: true,
                ismore: true
            },
            messageBoard: {
                con: '留言',
                isLine: true,
                ismore: true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$color: #e6e6e6;
    .company-box{
        color: #666666;
        font-size: 14px;
        .company-info{
            border: 1px solid $color;
            width: 100%;
            height: 230px;
            padding: 10px;
            display: flex;
            .ileft{
                width: 70%;
                font-size: 14px;
                border-right: 1px solid $color;
                .logo{
                    display: flex;
                    align-items: center;
                    .logo-left{
                        width: 100px;
                        height: 100px;
                        img{
                            width: 100%;
                        }
                    }
                    .logo-right{
                        margin-left: 20px;
                        width: calc(100% - 120px);
                        color: #f65f10;
                        font-size: 18px;
                        font-weight: 700;
                    }
                }
                .principal{
                    >span{
                        margin-right: 6px;
                    }
                    .phone{
                        color: #f65f10;
                        font-size: 18px;
                    }
                }
                .address{
                    display: flex;
                    justify-content: space-between;
                    .report{
                        cursor: pointer;
                        padding-right: 10px;
                        color: #f65f10;
                        span{
                            margin-right: 4px;
                        }
                    }
                }
            }
            .iright{
                width: 30%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
                >div{
                    background-color: #f66a12;
                    color: #FFF;
                    width: 190px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    cursor: pointer;
                    span{
                        font-size: 20px;
                    }
                }
            }
        }
        .teamIntroduceCls{
            padding:18px;
            line-height: 26px;
            min-height: 26px;
        }
        .performanceCls{
            min-height: 160px;
            .show{
                text-align: center;
                min-height: 100px;
                line-height: 100px;
                border-bottom: 1px solid #e6e6e6;

            }
        }

    }
</style>
