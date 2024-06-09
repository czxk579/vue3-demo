import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 10,
  },
  getters: {
    getCounter(state) {
      return state.counter > 0 ? state.counter : "counter数据异常";
    },
  },
  // 同步修改方式
  mutations: {
    addCounter(state, num) {
      state.counter += num;
    },
  },
  // 异步修改方式
  actions: {
    asyncAddCounter({ commit }) {
      // http://127.0.0.1:4523/m2/4594302-0-default/182494806 是 apifox 模拟数据
      axios
        .get("http://127.0.0.1:4523/m2/4594302-0-default/182494806")
        .then((res) => {
          console.log("counter = ", res.data.counter);
          commit("addCounter", res.data.counter);
        });
    },
  },
  modules: {},
});
