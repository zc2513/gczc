<template>
  <div>
    我是首页：众创工厂
    <el-button @click="goto">跳转到后台BIM 测试连接</el-button>
  </div>
</template>

<script>
import { routReset } from '@/mixin/r.js'
export default {
    mixins: process.env.NODE_ENV === 'production' ? [routReset] : [],
    methods: {
        goto() {
            // console.log(process.env.NODE_ENV)
            // location.href = '/Bim/Index'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
