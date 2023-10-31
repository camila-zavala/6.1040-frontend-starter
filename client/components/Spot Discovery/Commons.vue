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
      <img src= "./images/general/commons.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons2.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons3.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons4.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons5.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons6.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons7.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons8.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons9.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons10.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/boston_commons/commons11.png">
    </flexbox-item1>

    </gallery-container>
    </h3>
    
    <h3>
      <h4>
    <div>
      <flexbox-item2>
        Things to Do in Boston Commons:
      </flexbox-item2>
    </div>
    <div>
      <flexbox-description>
        Blue bike around the commons park
      </flexbox-description>
      <flexbox-description>
        Watch a movie at the AMC - Boston Commons location right next to the commons
      </flexbox-description>
      <flexbox-description>
        Visit "The Embrace" sculpture
      </flexbox-description>
      <flexbox-description>
        See a multitude of flowers at the Boston Public Garden
      </flexbox-description>
      <flexbox-description>
        Explore the Freedom Trail that offically begins in the commons.
      </flexbox-description>
      <flexbox-description>
        Explore around Copley Square and Newbury street.
      </flexbox-description>
      <flexbox-description>
        Explore Beacon Hill area and Acorn street nearby.
      </flexbox-description>
    </div>
  </h4>
</h3>
  </div>
  </form>
</template>



<style scoped>
h3 {
  display: flex;
  justify-content: center;
  background: #F5F1F1;
  height: 100%;
}
h4 {
  background: #F5F1F1;
  height: 300px;
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
flexbox-item2 {
    padding-inline: 10px;
    padding-bottom: 20px;
    height: auto;
    display: flex;
    justify-content: center;
    
}

flexbox-description {
    padding-bottom: 10px;
    justify-content: center;
    display: flex;
    display: column;
    padding-inline: 20px;
    font-size: 14px;
    
}
</style>
