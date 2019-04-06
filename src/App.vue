<template>
  <el-container id="app" class="app">
    <el-header class="headerWrapper">
      <Header :systemName="systemName"/>
    </el-header>
    <el-container>
      <!--<HelloWorld msg="Welcome to Your Vue.js App， App.vue"/>-->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
import config from './config.js';
import HelloWorld from './components/HelloWorld.vue';
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Sidebar,
    Header,
  },
  data:function () {
      return {
          systemName: config.systemName
      }
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-header.headerWrapper{
  padding: 0;
}
</style>
