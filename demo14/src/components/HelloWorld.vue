<template>
  <div class="hello">
    <h1>{{ "axios 跨越解决方案" }}</h1>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  mounted() {
    // 1.会产生跨域问题
    // axios.get("http://iwenwiki.com/api/FingerUnion/list.php")
    //   .then(res => {
    //   console.log(res)
    //   })
    
    // 2.通过代理解决跨域问题, vue.config.js 文件中需要配置代理
    axios.get("/api/FingerUnion/list.php")
      .then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
