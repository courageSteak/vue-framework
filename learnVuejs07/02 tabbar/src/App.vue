<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/icon_index.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/icon_index_selected.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/icon_index.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>

    </tab-bar>
  </div>
  <div></div>
</template>

<script>

  // 1 导入组件
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem"

  export default {
    name: 'App',
    components: {  // 2 注册组件
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";

</style>
