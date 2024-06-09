<template>
    <h3>{{ msg }}</h3>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      msg: "组件的使用",
    };
  },
};
</script>

<!-- scoped: 表示 style 定义的样式只在当前组件有效 -->
<style scoped>
h3 {
  color: red;
  font-size: 20px;
  text-align: center;
}
</style>
