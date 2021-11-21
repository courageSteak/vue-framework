<template>
    <div>
        <h2>高手</h2>
        <h2>{{ messaage }}</h2>
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        message: 'Hello',
        name: 'charles'
      }
    },
    methods: {
      btn1Click() {
      }
    }
  }
</script>

<style scoped>
    .titlt {
        color: pink;
    }
</style>