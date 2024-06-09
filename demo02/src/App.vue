<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 3.使用HelloWorld组件 -->
    <HelloWorld msg="模版语法"/>
  </div>
</template>

<script>
// 1.引用HelloWorld组件
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // 2.注册HelloWorld组件
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
