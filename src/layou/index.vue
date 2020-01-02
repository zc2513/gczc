<template>
  <!-- 工程众创云平台主体布局页 -->
  <div class="pc-body">
    <div>
      <hder />
      <logo-seach />
      <div :style="{backgroundColor:variables.hBgc}" class="nav-header-container">
        <el-menu
          class="nav-header typeArea"
          mode="horizontal"
          :background-color="variables.hBgc"
          :default-active="activeMenu"
          :collapse="false"
          :text-color="variables.hText"
          :unique-opened="true"
          :active-text-color="variables.hActiveText"
          :collapse-transition="false"
        >
          <nav-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </div>
      <transition v-if="navBarFixed" name="el-zoom-in-top">
        <div :class="{navBarWrap:navBarFixed}" class="nav-header-fixed h50">
          <div class="typeArea fixed-row clearfix">
            <div class="row-ico"><img src="../assets/imgs/fx-logo.jpg" alt=""></div>
            <div class="row-menu">
              <el-menu
                class="nav-header"
                mode="horizontal"
                :background-color="variables.fixHbac"
                :default-active="activeMenu"
                :collapse="false"
                :text-color="variables.fixHeaderTextColor"
                :unique-opened="true"
                :active-text-color="variables.fixHActiveText"
                :collapse-transition="false"
              >
                <nav-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
              </el-menu>
            </div>
            <div class="row-btn">
              <el-button size="mini" type="warning">登录</el-button>
              <el-button size="mini" type="primary">注册</el-button>
              <el-button size="mini" type="warning">免费发布</el-button>
            </div>
          </div>

        </div>
      </transition>
    </div>
    <!-- 视图层 -->
    <pcMain />
    <!-- 底部 -->
    <div style="background-color:#FFF;">
      <floor />
    </div>
  </div>
</template>

<script>
import { pcMain, hder, logoSeach } from './components'
import navItem from '@/layou/components/header/nav'
import variables from '@/styles/variables.scss'
import floor from './components/floor'
export default {
    name: 'Layou',
    components: {
        pcMain,
        hder,
        logoSeach,
        navItem,
        floor
    },
    data() {
        return {
            navBarFixed: false
        }
    },
    computed: {
        routes() {
            return this.$router.options.routes
        },
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            console.log(path)
            return path
        },
        variables() {
            return variables
        }
    },
    mounted() {
        window.addEventListener('scroll', this.watchScroll)
    },
    methods: {
        watchScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 170) {
                this.navBarFixed = true
            } else {
                this.navBarFixed = false
            }
        },
        save(e) {
            console.log(e)
        }
    }
}
</script>

<style lang="scss" scoped>
.pc-body{
    >div{
        width: 100%;
        &:nth-of-type(3){
            background-color: #FFF;
            height: 300px;
        }
    }
    .navBarWrap {//导航栏定位
        position:fixed;
        width: 100%;
        top:0;
        z-index:999;
    }

}
</style>
