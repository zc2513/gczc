<template>
  <div class="input-element-ui">
    <el-input
      v-model="value"
      class="search-header"
      type="text"
    >
      <el-select slot="prepend" v-model="value" placeholder="请选择" popper-class="test-cls" :popper-append-to-body="false">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <div slot="suffix" class="hearder-icon">
        <svg-icon icon-class="password" class="cls-icon-pas" />
        <i class="v-line" />
      </div>
    </el-input>
  </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '选项1'
        }
    }
}
</script>

<style lang="scss" scoped>
.input-element-ui{
    margin: 0 auto;
    /deep/ .search-header {
        .el-input__prefix{
            left: 0 !important;
        }
        .el-select .el-input {
            width: 100px;
        }
        .el-input-group__prepend {
            background-color: #fff;
        }
        .el-input__inner{
            border-left-color: #fff;
            &:hover,&:focus{
                border-color: #DCDFE6;
                border-left-color: #fff;
            }
        }
        .hearder-icon{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 70px;
        }
    }
    .v-line{
        width: 1px;
        height: 80%;
        background-color: #b1b1b1;
        position: absolute;
        left: 0;
        top: 10%;
    }
    .cls-icon-pas{
        color: #f6671b;
        cursor: pointer;
    }
}
</style>
