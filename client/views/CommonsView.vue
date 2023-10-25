<script setup lang="ts">
import Commons from "@/components/Spot Discovery/Commons.vue";
import Review from "@/components/Spot Discovery/Reviews.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <h3>Commons</h3>
    <h4>
    <Commons/>
    <Review/>
</h4>
  </main>
</template>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
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