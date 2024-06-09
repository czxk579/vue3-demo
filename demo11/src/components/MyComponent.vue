<template>
  <div>
    <h3>vue 引用第三方库</h3>
    <swiper :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="../assets/1.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/3.png" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// 具名导入组件
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "MyComponent",
  data(){
    return{
      modules: [ Pagination ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
    img {
    width: 20%;
    }
</style>
