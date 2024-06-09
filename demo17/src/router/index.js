import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // 重定向
    redirect: "/about/us",
    // 重定向的另一种写法
    // redirect: { name: "us" },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),

    children: [
      {
        path: "us",
        name: "us",
        component: () => import("../views/SubAboutView/Us.vue"),
      },
      {
        path: "info",
        name: "info",
        component: () => import("../views/SubAboutView/Info.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
