<template>
    <div class="company-box">
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
                右侧
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
$color: #e6e6e6;
    .company-box{ 
        .company-info{
            border: 1px solid $color;
            width: 100%;
            height: 230px;
            padding: 10px;
            display: flex; 
            .ileft{
                width: 70%;
                font-size: 14px;
                color: #666;
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
            }
        }
    }
</style>