<template>
  <div class="team-box">
    <div class="title">
      <span class="bold">团队实力</span>
    </div>
    <div>
      团队人数：66
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.team-box{
    width: 100%;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    >div{
        padding: 15px;
    }
    .title{
        border-bottom: 1px solid #e5e5e5;

        span{
            color: #333;
            font-size: 16px;
            padding-left: 6px;
            border-left: 2px solid #21a0f5;
        }
    }
}
</style>
