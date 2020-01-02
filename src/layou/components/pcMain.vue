<template>
  <!--主体内容展示部分 -->
  <section class="pc-main">
    <transition name="el-fade-in-linear" mode="out-in">
      <!-- <transition name="fade-transform" mode="out-in"> -->
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
    name: 'PcMain',
    computed: {
        key() {
            return this.$route.path
        }
    }
}
</script>

<style scoped>
.pc-main {
   /**
   * 40 = header
   * 130= logoseach
   * 36 = nav-menu
   */

  min-height: calc(100vh - 206px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
