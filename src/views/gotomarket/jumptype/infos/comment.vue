<template>
  <div class="border dynamicCls">
    <div class="ly-item">
      <div class="img">
        <img src="../../../../assets/imgs/floor/ewm.jpg" alt="">
      </div>
      <div class="con">
        <div>
          <span class="bold" style="margin-right:10px;">名字</span>
          2019-12-03 16:53
        </div>
        <div class="exps">
          我有业务，我们合作吧！
        </div>
      </div>
    </div>
    <div class="page-fy">
      <pagination style="margin-top:20px;" />
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
export default {
  components: { pagination }
}
</script>

<style lang="scss" scoped>
    .dynamicCls{
        min-height: 26px;
        line-height: 26px;
        padding: 20px;
        .ly-item{
            padding: 15px;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            .img{
                width: 50px;
                height: 50px;
                margin-right: 20px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .con{

            }
        }
        .page-fy{
            text-align: center;
        }
    }
</style>
