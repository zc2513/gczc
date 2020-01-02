<template>
  <!-- 展示区域 -->
  <div class="border show-box">
    <template v-if="compListResult && compListResult.Rows">
      <div v-for="(item,index) in compListResult.Rows" :key="index" class="show-item">
        <div class="left flcc" @click="goto">
          <img src="../../../../assets/imgs/floor/ewm.jpg" alt="">
        </div>
        <div class="con">
          <div class="top">
            <span class="address">
              [{{ item.AreaName }}]
            </span>
            <span class="gs">
              {{ item.CompDetpName }}
            </span>
          </div>
          <div class="middle elps">
            {{ item.CompContent }}
          </div>
          <div class="bottom">
            <div class="btn-tap">
              <el-tag v-for="(ele,k) in item.CompType" :key="k" type="success" size="mini">{{ ele.CompTypeName }}</el-tag>
            </div>
            <div class="describe">
              团队人数：101人以上 &nbsp; 成功案例：1例
            </div>
          </div>
        </div>
        <div class="right t-b">
          <div>
            <el-button type="success" size="mini" @click="hire(item.ID)">雇佣他</el-button>
          </div>
          <div class="ic-show">
            <span><svg-icon icon-class="eye-show" /></span> {{ item.BrowseVolume }} 次
          </div>
        </div>
      </div>
    </template>
    <div class="page-box">
      <pagination :total="compListResult.Total" @changePage="getPage" />
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
export default {
    components: { pagination },
    props: {
        compListResult: {
            type: Object,
            default: function() {
                return { total: 0, Rows: [] }
            }
        }
    },
    methods: {
        hire(id) {
            this.$message.success(id)
        },
        getPage(e) {
            this.$emit('changePage', e)
        },
        goto() {
            this.$router.push({
                path: 'info'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.show-box{
    margin-top: 10px;
    padding: 15px;
    .show-item{
        width: 100%;
        display: flex;
        padding: 30px 10px;
        height: 155px;
        border-bottom: 1px solid #e6e6e6;
        &:hover{
            border-bottom-color:  #ff5c01;
        }
        .left{//图片
            cursor: pointer;
            width: 95px;
            img{
                width: 80px;
                height: 80px;
            }
        }
        .con{ //内容部分
            width: calc(100% - 185px);
            max-width: calc(100% - 185px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 14px;
            .top{
                .address{
                    color: #00a0e9;
                    margin-right: 15px;
                    line-height: 22px;
                }
                .gs{
                    color: #f66a12;
                    font-size: 16px;
                    font-weight: 700;
                }
            }
            .middle{
                max-width: 100%;
                height: 30px;
                line-height: 30px;
            }
            .bottom{
                display: flex;
                justify-content: space-between;
                padding-right: 10px;
                .btn-tap{
                    span{
                        margin-right: 10px;
                        margin-top: 4px;
                    }
                }
                .describe{
                    display: flex;
                    align-items: center;
                    color: #f66a12;
                }
            }
        }
        .right{//按钮部分
            width: 90px;
            font-size: 13px;
            color: #686868;
            >div{
                text-align: center;
            }
            .ic-show{
                height: 24px;
                line-height: 24px;
                span{
                    margin-right: 6px;
                }
            }
        }

    }
    .page-box{
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
