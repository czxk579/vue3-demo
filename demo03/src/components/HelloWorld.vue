<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-if="flag">我是孙猴子</p>
    <p v-else>你是傻猴子</p>
    <p v-show="flag">你真的是那只孙猴子么</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      flag: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
