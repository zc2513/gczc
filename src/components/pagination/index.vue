<template>
  <!-- 分页功能 -->
  <div>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, // 当前页数
      pageSize: 10// 每页的数据数量
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.$emit('changePage', { val })
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.$emit('changePage', { val })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
