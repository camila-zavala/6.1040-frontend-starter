import { storeToRefs } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import { useUserStore } from "@/stores/user";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";
import BostonView from "../views/BostonView.vue";
import CharlesRiverView from "../views/CharlesRiverView.vue";
import CommonsView from "../views/CommonsView.vue";
import CreateProfileView from "../views/CreateProfileView.vue";
import FenwayView from "../views/FenwayView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import MITView from "../views/MITView.vue";
import NewburyView from "../views/NewburyView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ProfileView from "../views/ProfileView.vue";
import SettingView from "../views/SettingView.vue";
import SpotDiscoveryView from "../views/SpotDiscoveryView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/setting",
      name: "Settings",
      component: SettingView,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: { requiresAuth: false },
      beforeEnter: (to, from) => {
        const { isLoggedIn } = storeToRefs(useUserStore());
        if (isLoggedIn.value) {
          return { name: "Settings" };
        }
      },
    },
    {
      path: "/profile",
      name: "CreateProfile",
      component: CreateProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfileView,
      meta: { requiresAuth: true },
    },
    {
      path: "/spotdiscovery",
      name: "SpotDiscovery",
      component: SpotDiscoveryView,
      meta: { requiresAuth: true },
    },
    {
      path: "/fenway",
      name: "Fenway",
      component: FenwayView,
      meta: { requiresAuth: true },
    },
    {
      path: "/boston",
      name: "Boston",
      component: BostonView,
      meta: { requiresAuth: true },
    },
    {
      path: "/commons",
      name: "Commons",
      component: CommonsView,
      meta: { requiresAuth: true },
    },
    {
      path: "/charles_river",
      name: "Charles",
      component: CharlesRiverView,
      meta: { requiresAuth: true },
    },
    {
      path: "/mit",
      name: "MIT",
      component: MITView,
      meta: { requiresAuth: true },
    },
    {
      path: "/newbury",
      name: "Newbury",
      component: NewburyView,
      meta: { requiresAuth: true },
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

/**
 * Navigation guards to prevent user from accessing wrong pages.
 */
router.beforeEach((to, from) => {
  const { isLoggedIn } = storeToRefs(useUserStore());

  if (to.meta.requiresAuth && !isLoggedIn.value) {
    return { name: "Login" };
  }
});

export default router;
