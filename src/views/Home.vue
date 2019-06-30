<template>
  <el-container style="height:100%;">
    <el-header class="headerWrapper">
      <Header :systemName="systemName"/>
    </el-header>
    <el-container class="home">
      <el-aside style="width:unset" class="sidebar">
        <el-menu
          :default-active="defaultActive"
           @open="handleOpen"
           @close="handleClose"
           @select="handleMainMenuSelect"
           :collapse="isCollapse"
           :router="true"
          class="gtj-mainMenu"
        >
          <el-menu-item index="/home/overview" hasSubMenu="false" @click="handleMainMenuItemClick">
            <img src="../assets/tongji.png"/>
            <div class="menuTxt">概要总览</div>
          </el-menu-item>
          <el-menu-item index="/home/current-situation">
            <img src="../assets/tongji.png"/>
            <div class="menuTxt">规划现状</div>
          </el-menu-item>
          <el-menu-item index="/home/ledger">
            <img src="../assets/taizhang.png"/>
            <div class="menuTxt">台账管理</div>
          </el-menu-item>
          <el-menu-item index="/home/data-center">
            <img src="../assets/tuceng.png"/>
            <div class="menuTxt">数据中心</div>
          </el-menu-item>
          <el-menu-item index="/home/auxiliary-analyse">
            <img src="../assets/fenxi.png"/>
            <div class="menuTxt">辅助分析</div>
          </el-menu-item>
          <el-menu-item index="/home/document">
            <!--<i class="el-icon-document"></i>-->
            <img src="../assets/ziliaoku.png"/>
            <div class="menuTxt">资料库</div>
          </el-menu-item>
        </el-menu>

        <el-menu class="gtj-submenu layersMenu" v-if="currPath ==='/home/data-center'">
          <el-submenu index="data-center-submenu-1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>土地规划</span>
            </template>
            <el-menu-item index="guihua-xian">
              <div class="menuTxt">土地规划_县</div>
            </el-menu-item>
            <el-menu-item index="guihua-xiang">
              <div class="menuTxt">土地规划_乡</div>
            </el-menu-item>
            <el-menu-item index="guihua-cun">
              <div class="menuTxt">土地规划_村</div>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="data-center-submenu-2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>土地类型</span>
            </template>
            <el-menu-item index="guihua-xian-1">
              <div class="menuTxt">基本农田</div>
            </el-menu-item>
            <el-menu-item index="guihua-xian-2">
              <div class="menuTxt">建筑用地</div>
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <el-menu class="gtj-submenu analyzeMenu" v-if="currPath ==='/home/auxiliary-analyse'">
          <div class="actionWrapper">
            <div>导入</div>
            <div>绘制</div>
            <div>重置</div>
          </div>
        </el-menu>
      </el-aside>

      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '../components/Header.vue';
import Cookies from 'js-cookie';
import router from '../router';
import config from '../config.js';

export default {
    name: 'home',
    components: {
      HelloWorld,
      Header
    },
    data:function () {
        return {
            isCollapse: true,
            systemName: config.systemName
        }
    },
    computed: {
      defaultActive: function () {
          return location.hash.replace("#", "");
      },
      currPath: function () {
          return this.$store.state.home.currPath;
      }
    },
    methods: {
        handleOpen(evt) {
          console.log('handleOpen', evt)
        },
        handleClose() {

        },
        handleMainMenuItemClick(evt) {
            console.log(evt)
        },
        handleMainMenuSelect(menuPath){
            console.log('handleMainMenuSelect:', menuPath);
            const _t = this;
            _t.$store.commit('home/setCurrPath', menuPath)
        }
    },
    beforeCreate: function () {
        const auth = Cookies.get("auth");
        if(!auth) {
          router.push("/login");
        }
    }
}
</script>
<style lang="stylus">
  .sidebar{
    display: flex;
    flex-wrap: nowrap;
  }

  .el-menu{
    height: 100%;
  }
  .el-menu--collapse{
    background: #369 !important;
  }
  .gtj-mainMenu{
    .menuTxt{
      line-height: 20px;
    }
    li.el-menu-item{
      height: 66px;
      line-height: unset;
      margin-top: 6px;
      display: flex;
      justify-content center;
      align-items:center;
      flex-direction:column;
      color: white;
      &:focus, &:hover{
        background-color: darken(#369, 20%);
      }
      img{
        width: 36px !important;
      }
    }

  }
  .gtj-submenu{
    width: 200px;
  }
</style>
