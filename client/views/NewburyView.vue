<script setup lang="ts">
import Newbury from "@/components/Spot Discovery/Newbury.vue";
import Review from "@/components/Spot Discovery/Reviews.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <h3>Newbury</h3>
    <h4>
    <Newbury/>
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