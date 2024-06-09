<template>
  <div class="home">
    <h3> vuex 状态管理核心 </h3>
    <!-- 1.获取 getters 中声明的值 -->
    <p>counter={{ $store.getters.getCounter }}</p>
    <!-- 2.获取 getters 中声明的值 -->
    <p>counter={{ getCounter }}</p>

    <button @click="addClickHandle">修改 counter</button>
    <button @click="addAsyncClickHandle">异步增加</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapGetters(["getCounter"]),
  },
  methods: {
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    addClickHandle() {
      // 固定调用方式
      // this.$store.commit("addCounter", 20)
      // 使用 mapMutations 后的调用方式
      this.addCounter(20)
    },
    addAsyncClickHandle() {
      // 固定调用方式
      // this.$store.dispatch("asyncAddCounter", 20)
      // 使用 mapActions 后的调用方式
      this.asyncAddCounter(20)
    }
  },
  components: {
    HelloWorld,
  },
};
</script>
