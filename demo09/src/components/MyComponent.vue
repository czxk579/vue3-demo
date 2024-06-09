<template>
  <div>
    <h3>自定义组件交互</h3>
    <button @click="clickHandle">点击传递数据</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    clickHandle() {
      // 参数1: 有意义的字符串
      // 参数2: 传递的数据
      // 调用 changeMessage(this.message)
      this.$emit("changeMessage", this.message);
    },
  },
};
</script>
