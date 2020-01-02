<template>
  <!-- 分页功能 -->
  <div>
    <el-pagination
      :current-page.sync="currentPage"
      :page-sizes="[5, 10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            currentPage: 1, // 当前页数
            pageSize: 10// 每页的数据数量
        }
    },
    methods: {
        handleSizeChange(val) { // 每页n条
            this.currentPage = 1
            this.$emit('changePage', {
                type: 'strip',
                size: val
            })
        },
        handleCurrentChange(val) { // 当前页
            this.$emit('changePage', {
                type: 'page',
                size: val
            })
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
