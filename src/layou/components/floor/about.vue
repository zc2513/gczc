<template>
  <!-- 关于部分 -->
  <div class="about-box">
    <div class="left">
      <!-- 关于 -->
      <div v-for="(ele,k) in listData" :key="k">
        <list :list="ele" />
      </div>
    </div>
    <div class="right">
      <!-- 联系人 -->
      <link-man :links="links" />
    </div>
  </div>
</template>

<script>
import list from './list'
import linkMan from './linkman'
export default {
    components: {
        list, linkMan
    },
    data() {
        return {
            listData: [
                {
                    title: '关于我们',
                    data: [
                        { text: '云平台简介' },
                        { text: '企业建站指南' },
                        { text: '委托工场流程' },
                        { text: '企业入驻指南' },
                        { text: '项目订阅指南' },
                        { text: '晒晒操作手册' },
                        { text: '联系我们' }
                    ]
                },
                {
                    title: '安全隐私',
                    data: [
                        { text: '用户服务协议' },
                        { text: '免责声明' }
                    ]
                },
                {
                    title: '平台地图',
                    data: [
                        { text: '首页' },
                        { text: '企业/团队' },
                        { text: '项目/需求' },
                        { text: '业绩/招标' },
                        { text: '资讯中心' },
                        { text: '网站地图' }
                    ]
                }
            ],
            links: {
                QR: 'ewm',
                email: 'huachunzhch@163.com',
                address: '西安市南二环西段58号成长大厦8层',
                data: [
                    { icon: 'ewm', type: '平台进驻', links: [{ name: '蒋部长', phone: '18192018027' }] },
                    { icon: 'ewm', type: '项目合作', links: [{ name: '杨部长', phone: '13088962299' }] },
                    { icon: 'ewm', type: '加盟拓展', links: [{ name: '张经理', phone: '15091598961' }, { name: '权经理', phone: '18191730229' }] },
                    { icon: 'ewm', type: '电招平台', links: [{ name: '唐经理', phone: '1779278363' }] },
                    { icon: 'ewm', type: '平台运营', links: [{ name: '李总监', phone: '17792246167' }] },
                    { icon: 'ewm', type: '分站合作', links: [{ name: '李总监', phone: '17792246167' }] },
                    { icon: 'ewm', type: '战略合作', links: [{ name: '赵总监', phone: '18966898121' }] },
                    { icon: 'ewm', type: '服务监督', links: [{ phone: '400-640-7045' }] }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.about-box{
    padding: 30px 0;
    border-top: 1px solid #dcdcdc;
    display: flex;
    >div{
        width: 50%;
    }
    .left{
        border-right: 1px solid #dcdcdc;
        display: flex;
        >div{
            width: 33%;
            display: flex;
            justify-content: center;
        }
    }
    .right{
        display: flex;
        justify-content: center;
    }
}
</style>
