<template>
  <div>
    <h3>
      {{ subTitle }}
    </h3>
    <p>年龄：{{ Age }}</p>
    <ul>
      <li v-for="(name, index) in names" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    subTitle: {
      type: String,
      default: "subTitle",
    },
    Age: {
      type: Number,
      default: 0,
    },
    names: {
      type: Array,
      // 数组和对象必须使用函数进行返回
      default: () => [],
    },
  },
};
</script>

<style></style>
