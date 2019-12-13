<template>
  <div>
    <div class="typeArea">
      <!-- 公司服务 -->
      <serve />
      <!-- 关于公司部分信息 -->
      <about />
    </div>
    <!-- 底部版权 -->
    <copyright />
  </div>
</template>

<script>
import serve from './serve'
import about from './about'
import copyright from './copyright'
export default {
  components: {
    serve, about, copyright
  }
}
</script>

<style lang="scss" scoped>
</style>
