<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 第一种获取 counter 的方式 -->
    <p> counter = {{ $store.state.counter }}</p>
    <!-- 第二种获取 counter 的方式 -->
    <p> counter = {{ counter }}</p>
  </div>
</template>

<script>
// vuex提供的state快捷读取方式
import { mapState } from "vuex"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 专门来读取 vuex 的数据
  computed:{
    ...mapState(["counter"])
  }
}
</script>

<style scoped>

</style>
