<script setup lang="ts">
import Spots from "@/components/Spot Discovery/Spots.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <h3>Spot Discovery</h3>
    <Spots/>
  </main>
</template>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
}
</style>