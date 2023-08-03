import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Pricing from "../views/PricingView.vue";
import Resources from "../views/RecourcesView.vue";
import Blog from "../views/Blog.vue";
import WhatView from "../views/WhatView.vue";
import LoginView from "../views/LoginView.vue";
import AIToolView from "../views/AIToolView.vue";
import AIArtView from "../views/AIArtView.vue";
import AuthAdminView from "../views/AuthAdminView.vue";
import HomeAdminView from "../views/ListFilesAdmin/HomeAdminView.vue";
import ItemFileView from "@/views/ListFilesAdmin/ItemFileView.vue";
import PodcastView from "@/views/PodcastAdmin/PodcastView.vue";
import BookView from "@/views/BooksAdmin/BookView.vue";
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
    path: "/blog/productivity",
    name: "ai_tool",
    component: AIToolView,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
    // children: [
    //   {
    //     path: "productivity",
    //     name: "ai_tool",
    //     component: AIToolView
    //   },
    //   {
    //     path: "ai-art",
    //     name: "ai_art",
    //     component: AIArtView
    //   }
    // ]
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
  {
    path: "/podcasts",
    name: "podcasts",
    meta: {
      layout: "auth_admin",
    },
    component: PodcastView,
  },
  {
    path: "/files",
    name: "files",
    meta: {
      layout: "auth_admin",
    },
    component: AuthAdminView,
    children: [
      {
        path: "",
        name:"file_home",
        component: HomeAdminView
      },
      {
        path:"1",
        name: "file_item_sample_audio",
        component: ItemFileView
      }
    ]
  },
  {
    path: "/books",
    name: "books",
    meta: {
      layout: "auth_admin",
    },
    component: BookView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
