<template>
  <div>
    众包工厂部分
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
