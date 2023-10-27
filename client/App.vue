<script setup lang="ts">
import { useToastStore } from "@/stores/toast";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const currentRoute = useRoute();
const currentRouteName = computed(() => currentRoute.name);
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);
const { toast } = storeToRefs(useToastStore());

// Make sure to update the session before mounting the app in case the user is already logged in
onBeforeMount(async () => {
  try {
    await userStore.updateSession();
  } catch {
    // User is not logged in
  }
});
</script>

<template>
  <header>
    <nav>
      <div>
    <settings-move>
    <move-end>
    <div class="title">
        <img src="@/assets/images/real.jpg" />
        <RouterLink :to="{ name: 'Home' }">
          <h1>InstaBook</h1>
        </RouterLink>
      </div>
    </move-end>
  </settings-move>
  </div>
      <ul>
        <ul><RouterLink :to="{ name: 'Home' }" :class="{ underline: currentRouteName == 'Home' }">Home</RouterLink></ul>
      <ul>
      <li v-if="isLoggedIn">
      <ul><RouterLink :to="{ name: 'Settings' }" :class="{ underline: currentRouteName == 'Settings' }">Settings</RouterLink></ul>
    <ul><RouterLink :to="{name: 'Profile'}" :class="{ underline: currentRouteName == 'Profile'}">Profile</RouterLink></ul>
  <ul><RouterLink :to="{name: 'SpotDiscovery'}" :class="{underline: currentRouteName == 'Spot Discovery'}">Spot Discovery</RouterLink></ul>
    </li>
      <li v-else> 
      <ul><RouterLink :to="{ name: 'Login' }" :class="{ underline: currentRouteName == 'Login' }">Login</RouterLink></ul>
      </li>
    </ul>
    </ul>
    <article v-if="toast !== null" class="toast" :class="toast.style">
      <p>{{ toast.message }}</p>
    </article>
  </nav> 
  </header>
  <RouterView />
</template>

<style scoped>

nav {
  padding: 1em 2em;
  background-color: rgb(192, 187, 226);
  display: flex;
  align-items: center;
}

h1 {
  font-size: 2em;
  margin: 0;
}

.title {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

img {
  height: 2em;
}

a {
  font-size: large;
  color: black;
  text-decoration: none;
}

settings-move{
  justify-content: center;

}

move-end{
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;
  gap: .8em;
  color: white
}

.underline {
  text-decoration: underline;
}
</style>
