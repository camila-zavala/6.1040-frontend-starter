<script setup lang="ts">
import Charles from "@/components/Spot Discovery/Charles.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <h3>Charles River</h3>
    <h4>
    <Charles/>
</h4>
  </main>
</template>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom:20px;
  background-color:rgb(228, 249, 249);
}
h4 {
  background: #F5F1F1;
  height:auto;
}
flexbox-item1 {
    min-height: 200px;
    min-width: 200px;
    padding-inline: 15px;
}
</style>