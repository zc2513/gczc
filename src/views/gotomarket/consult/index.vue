<template>
  <!-- 咨询中心布局 -->
  <div class="advisory-BOX">
    <div>
      <tabs />
    </div>
    <div>
      <zx-swiper />
    </div>
  </div>
</template>

<script>
import tabs from './tbas'
import zxSwiper from './zxSwiper'
export default {
  components: {
    tabs,
    zxSwiper
  }
}
</script>

<style lang="scss" scoped>
.advisory-BOX{
  display: flex;
  margin: 20px 0;
  height: 285px;
  justify-content: space-between;
  >div{
    width: 49%;
  }
}
</style>
