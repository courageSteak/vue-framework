<template>
  <div id="app">

    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/profile">个人资料</router-link>-->
    <router-link :to="{ path: '/profile',query:{id:'1',name:'charles'}}">个人资料</router-link>

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">个人资料</button>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 1
      }
    },
    methods: {
      homeClick() {
        // 通过代码的范式修改路径 vue-router
        this.$router.push('/home')
        console.log('homeClick');
      },
      aboutClick() {
        this.$router.push('/about')
        console.log('aboutClick');
      },
userClick() {
  this.$router.push('/user/' + this.userId)
},
profileClick() {
  this.$router.push({
    path: '/profile',
    query: {
      id: 2,
      name: 'tom'
    }
  })
}
    }
  }
</script>

<style>
  .active {
    color: #f00;
  }
</style>
