<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const { loginUser, updateSession } = useUserStore();

async function login() {
  await loginUser(username.value, password.value);
  void updateSession();
  void router.push({ name: "Home" });
}



</script>

<template>

  <form class="pure-form pure-form-aligned" >
    <div>
    <h3>
    <gallery-container>

    <flexbox-item1 justify-content:center>
      <img src= "./images/general/boston.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_city/boston2.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_city/boston3.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_city/boston4.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_city/boston5.png">
    </flexbox-item1>

    </gallery-container>
    </h3>
  </div>
  </form>
</template>



<style scoped>
h3 {
  display: flex;
  justify-content: center;
  background: #F5F1F1;
}
h4 {
  display: flex;
  align-content:flex-start;
  background: #F5F1F1;
}
gallery-container {
  display: flex;
  flex-direction: row;
  height: 350px;
  overflow: auto;
  overflow-y: hidden;
  max-width: fit-content;
  
}
flexbox-item1 {
    min-height: 350px;
    padding-inline: 10px;
    
}
flexbox-review {
    padding-left: 10px;
    align-content:flex-start;
    
}
flexbox-reviews{
    justify-content: center;
    align-items: flex-start;
    min-width: 100px;
    
}
</style>
