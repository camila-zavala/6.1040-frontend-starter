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
      <img src= "./images/general/fenway.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway2.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway3.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway4.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway5.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway6.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway7.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway8.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway9.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway10.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/fenway/fenway11.png">
    </flexbox-item1>

    </gallery-container>
    </h3>
    <h3>
    <h4>
    <div>
      <flexbox-item2>
        A Word on Fenway:
      </flexbox-item2>
    </div>
    <div>
      <flexbox-description>
        "The Heart of Boston Sports": In early 1911, John I. Taylor, the first owner of the Boston Red Sox
        scouted locations across Boston for a new ball park to be built.
        After a plot of land between Ipswich and Lansdowne Street was found,
        construction of the now famous Fenway Park began. 
        Fenway was designed and built by Osborn Engineering of Cleveland and the Charles Logue Building Company.
        James McLaughlin served as the main architect of the construction. The field was orientated so that the
        sun would not interfere with the players while they were batting. Home plate was placed in the south west
        corner of the field. Furthermore, the park was built with a Tapestry brick style that ran throughout the park walls.
        Tapestry brick was a popular architectural style in the early 1900’s and, during the time of the parks construction,
        was actually seen in a lot of the buildings and apartments around the Fenway-Kenmore neighborhood. The method typically
        uses red brick and with cast-stone and stucco detail. The bricks are arranged in in decorative patterns that are often set in one plane,
        accented by the stucco detail. By using this style, head architect James E. McLaughlin, made Fenway a durable park. - Nate Langh and Chris Mcgrath
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
