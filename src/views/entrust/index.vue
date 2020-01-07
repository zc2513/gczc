<template>
  <div>
    一站委托部分
  </div>
</template>

<script>
import { routReset } from '@/mixin/r.js'
export default {
    mixins: process.env.NODE_ENV === 'production' ? [routReset] : []
}
</script>

<style lang="scss" scoped>

</style>
