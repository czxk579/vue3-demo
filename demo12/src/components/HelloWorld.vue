<template>
  <div>
    <h3>{{ "Axios 请求" }}</h3>
    <p>{{ chengpin.title }}</p>
  </div>
</template>

<script>
import querystring from "querystring";

export default {
  name: "HelloWorld",
  data() {
    return {
      chengpin: "",
    };
  },
  mounted() {
    // 1. 一般请求方式
    // // 1.1 get请求方式
    // this.$axios({
    //   method: "get",
    //   url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php",
    // }).then((res) => {
    //   console.log(res.data);
    //   this.chengpin = res.data.chengpinDetails[0];
    // });
    // // 1.2 post请求方式
    // this.$axios({
    //   method: "post",
    //   url: "http://iwenwiki.com/api/blueberrypai/login.php",
    //   data: querystring.stringify({
    //     user_id: "iwen@qq.com",
    //     password: "iwen123",
    //     verification_code: "crfvw",
    //   }),
    // }).then((res) => {
    //   console.log(res.data);
    // });

    // 2. 简化请求方式
    // 2.1 get请求方式
    this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php")
      .then(res => {
        console.log(res.data);
        this.chengpin = res.data.chengpinDetails[0];
      })

    // 2.2 post请求方式
    this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php", querystring.stringify({
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw"
    })).then(res => {
      console.log(res.data);
    })
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
