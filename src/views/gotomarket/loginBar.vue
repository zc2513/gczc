<template>
  <div class="login-bar-box">
    <div class="top">
      <div class="total">累计工场动态   <span>1799701</span> 个</div>
      <div class="btn">
        <el-button size="medium">免费发布</el-button>
      </div>
      <div class="ljdl">
        已有账号? <a href="javascript:void(0);">立即登录</a>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <i class="circle" />
          <div class="elps">十一月快报丨全国布局速度可以这样快！</div>
        </li>
        <li>
          <i class="circle" />
          <div class="elps">热烈祝贺八家甲级联盟单位入驻华春众创工场！</div>
        </li>
        <li>
          <i class="circle" />
          <div class="elps">华春众创工场合作会员单位融合之路</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LoginBar'
}
</script>

<style lang="scss" scoped>
.login-bar-box{
  font-size: 12px;
  color: #676767;
  .top{
    .total{
      margin-top: 40px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      span{
        font-size: 22px;
        font-weight: bold;
        color: #fe5200;
      }
    }
    .btn{
      height: 70px;
      line-height: 70px;
      text-align: center;
      button{
        background-color: #fe6722;
        color: #FFF;
        width: 160px;
        font-size: 18px;
      }
    }
    .ljdl{
      text-align: center;
      a{
        color: #3094ED;
      }
    }
  }
  .bottom{
    width: 100%;
    margin-top: 26px;
    border-top: 1px solid #d3e632;
    height: 100px;
    ul{
      padding: 10px;
      height: 100%;
      overflow: hidden;
      >li{
        height: 24px;
        line-height: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        i{
          margin-right: 6px;
        }
      }
    }
  }

}
</style>
