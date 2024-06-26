
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home.vue";
import AboutView from "../views/about.vue";

// 配置信息中需要页面的相关配置
const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/about",
    component: AboutView,
  },
];

const router = createRouter({
  /**
   * createWebHashHistory
   *      home:http://localhost:8080/#/
   *      about:http://localhost:8080/#/about
   *
   *  原理：a标签锚点连接
   */
  /**
   * createWebHistory
   *      home:http://localhost:8080/
   *      about:http://localhost:8080/about
   * 此种方式，需要后台配合做重定向，否则会出现404问题
   *
   * 原理：H5 pushState()
   */
  history: createWebHashHistory(),
  routes,
});

export default router;
