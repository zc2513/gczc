<template>
  <div>
    我是首页：众创工厂
    <el-button @click="goto">跳转到后台BIM 测试连接</el-button>
  </div>
</template>

<script>
export default {
    methods: {
        goto() {
            location.href = '/Bim/Index'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
