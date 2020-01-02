<template>
  <div class="cls-logo-box typeArea">
    <div class="cls-logo-box">
      <div class="flcb">
        <div class="logo-left"><img src="../../../assets/imgs/logo.jpg" alt=""></div>
        <div class="logo-right"><img src="../../../assets/imgs/gjrz.jpg" alt=""></div>
      </div>
      <div>
        <div class="logo-search-top">
          输入框部分----欠缺插件
        </div>
        <div class="logo-search-bottom">
          <el-button type="success" size="mini">免费注册</el-button>
          <el-button type="primary" size="mini">项目订阅</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LogoSeach'
}
</script>

<style lang="scss" scoped>
.cls-logo-box{
    box-sizing: border-box;
    height: 130px;
    background-color: #fff;
    .cls-logo-box{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div{
            &:first-of-type{
                width: 590px;
                min-width: 560px;
                display: flex;
                justify-content: space-between;
                .logo-left{
                    width: 415px;
                    height: 77px;
                    cursor: pointer;
                }
                .logo-right{
                    width: 140px;
                    height: 90px;
                }
            }
            &:last-of-type{
                flex-grow: 1;
                height: 80px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                flex-direction: column;
                .logo-search-top{
                    height: 32px;
                    background-color: #e2e2e2;
                }
                .logo-search-bottom{
                    height: 29px;
                    background-color: #ccc;
                    text-align: right;
                }
            }
        }
    }
}
</style>
