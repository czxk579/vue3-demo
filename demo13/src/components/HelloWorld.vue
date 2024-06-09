<template>
  <div class="hello">
    <h3>{{ "Axios 请求封装" }}</h3>
    <p> {{ chengpin.title }} </p>
  </div>
</template>

<script>
import api from "../api/index"
export default {
  name: 'HelloWorld',
  data() {
    return {
      chengpin: {}
    }
  },
  mounted(){
    api.getChengpin().then(res =>{
      console.log(res.data);
        this.chengpin=res.data.chengpinDetails[0]
    })
  }
  
}
</script>

<style scoped>

</style>
