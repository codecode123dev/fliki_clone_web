import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Pricing from "../views/PricingView.vue";
import Resources from "../views/RecourcesView.vue";
import Blog from "../views/Blog.vue";
import WhatView from "../views/WhatView.vue";
import LoginView from "../views/LoginView.vue";
import AIToolView from "../views/AIToolView.vue";
import AIArtView from "../views/AIArtView.vue";
import AuthAdminView from "../views/ListFilesAdmin/AuthAdminView.vue";
import HomeAdminView from "../views/ListFilesAdmin/HomeAdminView.vue";
import ItemFileView from "@/views/ListFilesAdmin/ItemFileView.vue";
import PodcastView from "@/views/PodcastAdmin/PodcastView.vue";
import BookView from "@/views/BooksAdmin/BookView.vue";
import ItemFileVideoView from "@/views/ListFilesAdmin/ItemFileVideoView.vue";
import CreatePodcastView from "@/views/PodcastAdmin/CreatePodcastView.vue";
import PodcastMainView from "@/views/PodcastAdmin/PodcastMainView.vue";
import BookMain from "@/views/BooksAdmin/BookMain.vue";
import CreateBookView from "@/views/BooksAdmin/CreateBookView.vue";
import AccountMain from "@/views/AccountAdmin/AccountMain.vue";
import AccountView from "@/views/AccountAdmin/AccountView.vue";
import RewardView from "@/views/AccountAdmin/RewardView.vue";
import ProfileView from "@/views/AccountAdmin/ProfileView.vue";
import TeamView from "@/views/AccountAdmin/TeamView.vue";
import VoiceView from "@/views/AccountAdmin/VoiceView.vue";
import APIView from "@/views/AccountAdmin/APIView.vue";
import AffiliateView from "@/views/AccountAdmin/AffiliateView.vue";

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
    path: "/resources/whats-new",
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
    component: PodcastMainView,
    children: [
      {
        path: "",
        name: "podcast_home",
        component: PodcastView
      },
      {
        path: "create",
        name: "create_podcast",
        component: CreatePodcastView
      }
    ]
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
      },
      {
        path:"2",
        name: "file_item_sample_video",
        component: ItemFileVideoView
      }
    ]
  },
  {
    path: "/books",
    name: "books",
    meta: {
      layout: "auth_admin",
    },
    component: BookMain,
    children: [
      {
        path: "",
        name: "book_home",
        component: BookView
      },
      {
        path: "create",
        name: "create_book",
        component: CreateBookView
      }
    ]
  },
  {
    path: "/account",
    name: "account",
    meta: {
      layout: "auth_admin",
    },
    component: AccountMain,
    children: [
      {
        path: "",
        name: "account_home",
        component: AccountView
      },
      {
        path: "reward",
        name: "reward_account",
        component: RewardView
      },
      {
        path: "profile",
        name: "profile_account",
        component: ProfileView
      },
      {
        path: "team",
        name: "team_account",
        component: TeamView
      },
      {
        path: "voice",
        name: "voice_account",
        component: VoiceView
      },
      {
        path: "api",
        name: "api_account",
        component: APIView
      },
      {
        path: "affiliate",
        name: "affiliate_account",
        component: AffiliateView
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
