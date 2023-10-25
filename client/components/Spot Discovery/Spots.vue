<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";


const username = ref("");
const password = ref("");
const { loginUser, updateSession } = useUserStore();

async function fenway() {
  void router.push({ name: "Fenway" });
}
async function newbury() {
  void router.push({ name: "Newbury" });
}

async function mit() {
  void router.push({ name: "MIT" });
}
async function charles_river() {
  void router.push({ name: "Charles" });
}
async function commons() {
  void router.push({ name: "Commons" });
}
async function boston() {
  void router.push({ name: "Boston" });
}
</script>

<template>
  <form class="pure-form pure-form-aligned">
    <fieldset>
    
    <h3>
    <flexbox-item1 justify-content:center>
      <img src= "./images/general/fenway.png" @click = "fenway()" >
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/general/commons.png" @click = "commons()">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/general/kayaking.png" @click = "charles_river()">
    </flexbox-item1>
    </h3>
    <h3>
    <flexbox-item1 justify-content:center>
      <img src= "./images/general/boston.png" @click="boston()">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/general/newbery_street.png" @click = "newbury()">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/general/mit_campus.png" @click="mit()">
    </flexbox-item1>
    </h3>
  </fieldset>
  </form>
</template>

<style scoped>
h3 {
  display: flex;
  justify-content: center;
  background: #F5F1F1;
}
flexbox-item1 {
    min-height: 200px;
    min-width: 200px;
    padding-left: 15px;
    padding-inline: 15px;
}
</style>
