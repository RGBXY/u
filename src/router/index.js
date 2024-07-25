import { createRouter, createWebHistory } from "vue-router";
import OpeningView from "../views/OpeningView.vue";
import PageView from "../views/PageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Opening",
      component: OpeningView,
    },
    {
      path: "/page",
      name: "Page",
      component: PageView,
    },
  ],
});

export default router;
