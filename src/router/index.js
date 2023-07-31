import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Pricing from "../views/PricingView.vue";
import Resources from "../views/RecourcesView.vue";
import Blog from "../views/Blog.vue";
import WhatView from "../views/WhatView.vue";
import LoginView from "../views/LoginView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pricing",
    name: "pricing",

    component: Pricing,
  },
  {
    path: "/resources",
    name: "resources",
    component: Resources,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/what",
    name: "what",
    component: WhatView,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      layout: "auth",
    },
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
