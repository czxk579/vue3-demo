<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 1.显示文本 -->
    <p>{{ message }}</p>
    <div>{{ rawHtml }}</div>
    <!-- 2.显示原始 html -->
    <div v-html="rawHtml"></div>

    <!-- 3.动态绑定属性 -->
    <!-- <div v-bind:id="dynamicId"></div> -->
    <div :id="dynamicId"></div>

    <!-- 4.使用 js 表达式 -->
    <p>{{ num + 10 }}</p>
    <p>{{ flag ? "孙猴子" : "傻猴子" }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  
  data() {
    return {
      message: "hello vue",
      rawHtml: "<a href='http://www.itbaizhan.com'>百战</a>",
      dynamicId: 10001,
      num: 10,
      flag: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
