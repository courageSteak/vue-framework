<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

<keep-alive>
  <router-view/>
</keep-alive>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    created() {  // 创建组件
      console.log('created');
      // document.title = '首页'
      document.title = to.matched[0].meta.title
    },
    mounted() {  // 挂载到dom
      console.log('mounted');
    },
    updated() { // 界面发生刷新
      console.log('updated');
    },
    destroyed() {
    },
    activated() {
      this.$router.push(this.path)
    },
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>
