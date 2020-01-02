<template>
  <!-- 详情页面 -->
  <div class="typeArea">
    <div class="n-title">
      当前位置：首页/工程赶集/详情
      <el-button size="mini" type="warning" @click="goBack"> 返回 </el-button>
    </div>
    <div class="layout" style="margin-bottom:20px;">
      <div class="left">
        <company-info />
      </div>
      <div class="right">
        <teamsl />
      </div>
    </div>
  </div>
</template>

<script>
import companyInfo from './companyInfos'
import teamsl from './teamsl'
export default {
    components: { companyInfo, teamsl },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
.n-title{
    height: 40px;
    line-height: 40px;
    color: #999;
    font-size: 14px;
}
.layout{
    width: 100%;
    display: flex;
    .left{
        width: calc(100% - 270px);
        margin-right: 10px;
    }
    .right{
        width: 260px;
    }
}
</style>
