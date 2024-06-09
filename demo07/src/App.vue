<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 3.使用组件, 这里两种方式都可以正常显示组件 -->
    <MyComponent />
    <my-component />
  </div>
</template>

<script>
// 1.引入组件
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    // 2. 挂载或注册组件
    MyComponent
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
