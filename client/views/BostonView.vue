<script setup lang="ts">
import Boston from "@/components/Spot Discovery/Boston.vue";
import Review from "@/components/Spot Discovery/Reviews.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <h3>Boston City</h3>
    <h4>
    <Boston/>
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