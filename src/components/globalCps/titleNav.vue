<template>
  <div class="title-nav-box">
    <div class="title" :class="{wireb:iswireb}">
      <div
        :class="{verticalLine:titleObj.isLine}"
        :style="{
          color:titleObj.color ? titleObj.color:'#ff6620',
          fontSize:titleObj.fontSize ? titleObj.fontSize:'20px'
        }"
      >
        {{ titleObj.con }}
        <slot name="title" />
      </div>
      <div class="describe">
        {{ titleObj.describe }}
        <slot name="con" />
      </div>
      <div v-if="titleObj.ismore ? false:true" class="right">
        <el-button type="text" @click="save(titleObj.con)">
          更多<i class="el-icon-arrow-right el-icon--right" />
        </el-button>
        <slot name="btn" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TitleNav',
  props: {
    titleObj: {
      type: Object,
      default: function() {
        return {
          color: '#ff6620',
          fontSize: '20px',
          con: '默认标题',
          describe: '默认描述',
          ismore: false
        }
      }
    },
    iswireb:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    save(con) {
      this.$message.success(`${con}--待处理`)
    }
  }
}
</script>

<style lang="scss" scoped>
.title-nav-box{
    .title{
        height: 40px;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        display: flex;
        align-items: center;
        .describe{
            margin-left: 20px;
            flex:1;
            font-size: 14px;
            color: #999;
        }
        .right{
            .el-button--text{
                color: #666;
                &:hover{
                    color:  #ff6620;
                }
                .el-icon--right{
                    margin: 0;
                }
            }
        }
    }
}
</style>
