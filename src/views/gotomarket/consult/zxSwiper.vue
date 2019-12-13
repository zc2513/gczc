<template>
  <el-carousel
    height="285px"
    arrow="never"
    class="information-swiper"
  >
    <el-carousel-item
      v-for="(item,index) in 5"
      :key="index"
    >
      <div class="flcc hfull img">
        <div class="bar">
          描述信息
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.information-swiper{
    .img{
        background-image: url('../../../assets/imgs/banner.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        .bar{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 12px;
            padding-left: 20px;
            color: #FFF;
            overflow: hidden;
            background-color: rgba(0,0,0,.3);
        }
    }
}

</style>
<style>
.information-swiper .el-carousel__indicators{
    bottom: 36px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

}
.information-swiper .el-carousel__indicator .el-carousel__button{
    height: 6px;
    background-color: #FFF;
    opacity: 1;
}
.information-swiper .is-active .el-carousel__button{
    background-color: #ff6600;
}
</style>
