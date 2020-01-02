<template>
  <div v-if="compDeptList&&compDeptList.Rows" class="team-box">
    <div class="title"> 优秀团队推荐 </div>
    <ul>
      <li
        v-for="(item,index) in compDeptList.Rows"
        :key="index"
        class="elps"
        @click="skip(item.ID)"
      >
        {{ item.CompDetpName }}
      </li>
    </ul>
  </div>
</template>

<script>
import skip from './mixin'
export default {
    mixins: [skip],
    // eslint-disable-next-line vue/require-prop-types
    props: ['compDeptList']
}
</script>

<style lang="scss" scoped>
.team-box{
    margin-top: 20px;
    width: 100%;
    border: 1px solid #e5e5e5;
    padding: 15px;
    .title{
        color: #333;
        font-size: 16px;
        padding-left: 6px;
        border-left: 2px solid #21a0f5;
    }
    ul{
        font-size: 14px;
        color: #666;
        max-height: 450px;
        li{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px dashed #e5e5e5;
            cursor: pointer;
            &:hover{
                color: #f60;
            }
        }
    }
}
</style>
