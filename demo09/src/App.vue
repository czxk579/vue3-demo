<template>
  <div>
    <h3> {{ Msg }}</h3>
    <MyComponent @changeMessage="changeMsg"/>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    MyComponent
  },
  data() {
    return {
      Msg: "",
    }
  },
  methods: {
    changeMsg(data) {
      console.log(data);
      this.Msg = data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
