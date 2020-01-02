<template>
  <div class="zc-header-box">
    <div class="typeArea zc-header">
      <div>您好： 游客  欢迎来到【工程众创云平台】   请登录 免费注册[全国]切换分站</div>
      <div>
        客服电话：400-6407045项目订阅
        网站导航网站导航
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Hder'
}
</script>

<style lang="scss" scoped>
.zc-header-box{
    background-color: #f2f2f2;
    .zc-header{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        >div{
            height: 40px;
            line-height: 40px;
            min-height: 40px;
            &:first-of-type{
                border: 1px solid #ccc;
            }
            &:last-of-type{
                border: 1px solid #ccc;
            }
        }
    }
}
</style>
