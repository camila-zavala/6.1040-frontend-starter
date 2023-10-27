<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { computed, onBeforeMount } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const currentRoute = useRoute();
const currentRouteName = computed(() => currentRoute.name);
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);

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
    <s>
      <li>
        <u1><RouterLink :to="{ name: 'Home' }" :class="{ underline: currentRouteName == 'Home' }">Home</RouterLink></u1>
      </li>
      <div v-if="isLoggedIn">
      <ul><RouterLink :to="{ name: 'Settings' }" :class="{ underline: currentRouteName == 'Settings' }">Settings</RouterLink></ul>
      <ul><RouterLink :to="{name: 'Profile'}" :class="{ underline: currentRouteName == 'Profile'}">  Profile  </RouterLink></ul>
      <ul><RouterLink :to="{name: 'SpotDiscovery'}" :class="{underline: currentRouteName == 'Spot Discovery'}">Spot Discovery</RouterLink></ul>
      </div>
      <div v-else> 
      <RouterLink :to="{ name: 'Login' }" :class="{ underline: currentRouteName == 'Login' }">Login</RouterLink>
      </div>
    </s>
  <RouterView />
</template>


<style scoped>

ul {
  list-style-type: none;
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: .1em;
  color: white
}

s {
  display: flex;
  flex-direction: column;
  width: 300px;
  color:rgb(145, 161, 240); 
}

</style>
