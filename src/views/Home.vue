<template>
  <el-container class="home">
    <el-aside>
      <el-menu default-active="1" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="1">
          <img src="../assets/tongji.png"/>
          <div class="menuTxt">概要总览</div>
        </el-menu-item>
        <el-menu-item index="2">
          <img src="../assets/tongji.png"/>
          <div class="menuTxt">规划现状</div>
        </el-menu-item>
        <el-menu-item index="3">
          <img src="../assets/taizhang.png"/>
          <div class="menuTxt">台账管理</div>
        </el-menu-item>
        <el-menu-item index="4">
          <img src="../assets/tuceng.png"/>
          <div class="menuTxt">数据中心</div>
        </el-menu-item>
        <el-menu-item index="5">
          <img src="../assets/fenxi.png"/>
          <div class="menuTxt">辅助分析</div>
        </el-menu-item>
        <el-menu-item index="6">
          <!--<i class="el-icon-document"></i>-->
          <img src="../assets/ziliaoku.png"/>
          <div class="menuTxt">资料库</div>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data:function () {
        return {
            isCollapse: true
        }
    },
    methods: {
        handleOpen() {

        },
        handleClose() {

        }
    }
}
</script>
<style lang="stylus">
  .el-menu{
    height: 100%;
  }
  .el-menu--collapse{
    background: #369 !important;
  }
  .menuTxt{
    line-height: 20px;
  }
  .home .el-menu-item{
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
</style>
