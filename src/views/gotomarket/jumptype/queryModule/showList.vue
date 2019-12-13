<template>
<!-- 展示区域 -->
    <div class="border show-box">
        <div class="show-item" v-for="(item,index) in 10" :key="index">
            <div class="left flcc" @click="goto">
                <img src="../../../../assets/imgs/floor/ewm.jpg" alt="">
            </div>
            <div class="con">
                <div class="top">
                    <span class="address">
                        [内蒙古呼和浩特市]
                    </span> 
                    <span class="gs">
                        兴泰地产集团
                    </span>
                </div>
                <div class="middle elps"> 
                    兴泰地产集团是内蒙古兴泰集团旗下的产业集团，下辖内蒙古兴泰房地产开发有限责任公司、鄂尔多斯市同泰项目管理有限公司及鄂尔/下辖内蒙古兴泰房地产开发有限责任公司
                </div>
                <div class="bottom">
                    <div class="btn-tap">
                        <el-tag type="success" size="small">标签一</el-tag>
                        <el-tag type="success" size="small">标签二</el-tag>
                    </div>
                    <div class="describe">
                        团队人数：101人以上 &nbsp; 成功案例：1例
                    </div>
                </div>
            </div>
            <div class="right t-b">
                <div>
                    <el-button type="success" size="mini">雇佣他</el-button>
                </div>
                <div class="ic-show">
                    <span><svg-icon icon-class="eye-show" /></span> 2238 次
                </div>
            </div>
        </div>
        <div class="page-box">
            <pagination />
        </div>
    </div>
</template>

<script>
import pagination from '@/components/pagination'
    export default {
        components:{pagination},
        methods:{
            goto() {
                this.$router.push({
                    path: 'info'
                })
            },
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