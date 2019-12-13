<template>
  <div class="partner-box">
    <div class="typeArea">
      <h2>合作伙伴</h2>
      <div class="img-List-cls">
        <div v-for="(item,index) in 23" :key="index">
          <img src="../../assets/imgs/gjrz.jpg" alt="">
        </div>
      </div>
      <!-- 友情链接 -->
      <div class="links-box">
        <h4>友情链接</h4>
        <div class="link">
          <a href="javascript:vaid(0);">华春建设</a>
          <a href="javascript:vaid(0);">华春建设</a>
          <a href="javascript:vaid(0);">华春建设</a>
          <a href="javascript:vaid(0);">华春建设</a>
          <a href="javascript:vaid(0);">华春建设</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.partner-box{
    background-color: #f5f5f5;
    h2{
       color: #d8292e;
       text-align: center;
       height: 60px;
       line-height: 60px;
       font-size: 20px;
    }
    .img-List-cls{
        display: flex;
        flex-wrap: wrap;
        >div{
            width: calc(100% / 11);
            height: 90px;
            border-right: 1px solid #f5f5f5;
            border-bottom: 1px solid #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &:hover{
                border-bottom-color: #d8292e;
            }
            img{
                width: 100%;
                max-width: 84px;
                height: 62px;
            }
        }
        background-color: #fff;
    }

    //友情链接
    .links-box{
        margin-top: 40px;
        padding: 0 20px 14px;
        border-top: 1px solid #dcdcdc;

        h4{
            color: #595758;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
        }
        .link{
            height: 30px;
            line-height: 30px;
            a{
                font-size: 12px;
                margin-right: 10px;
                &:hover{
                    color: #f60;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
