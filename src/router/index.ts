import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/home/index.vue";

const staticRoutes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/welcome",
    name: "welcome",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/welcome/TheWelcome.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: staticRoutes,
});

export default router;
