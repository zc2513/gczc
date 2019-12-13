<template>
  <div class="show-list">
    <div class="title">{{ list.title }}</div>
    <div v-for="(item,index) in list.data" :key="index" class="con">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.show-list{
    min-width: 50%;
    max-width: 180px;
    .title,.con{
        height: 30px;
        line-height: 30px;
    }
    .title{
        font-size: 16px;
        color: #595757;
        font-weight: 700;
    }
    .con{
        font-size: 14px;
        color: #666;
        cursor: pointer;
        &:hover{
            color: #F65F10;
        }
    }
}
</style>
