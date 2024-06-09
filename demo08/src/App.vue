<template>
  <div>
    <my-component :subTitle="title" :Age="age" :names="names"/>
  </div>
</template>

<script>

import MyComponent from "./components/MyComponent.vue";

export default {
  name: "App",
  data() {
    return {
      title: "组件交互",
      age: 18,
      names: ["张三", "李四", "王五"],
    };
  },
  components: {
    MyComponent,
  },
};
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
