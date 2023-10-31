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
      <img src= "./images/general/mit_campus.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit2.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit3.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit4.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit5.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit6.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit7.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit8.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit9.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit10.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/mit_campus/mit11.png">
    </flexbox-item1>

    </gallery-container>
    
    </h3>
    
    
    <h3>
      <h4>
    <div>
      <flexbox-item2>
        Places to See @MIT:
      </flexbox-item2>
    </div>
    <div>
      <flexbox-description>
        The dome: Killian Court is the best place to see the famour view of the dome.
      </flexbox-description>
      <flexbox-description>
        Little dome: Lobby 7 is the best way to see the little dome from the outside.
      </flexbox-description>
      <flexbox-description>
        Stata: The building is home to the Computer Science and Artificial Intelligence Laboratory (CSAIL). 
      </flexbox-description>
      <flexbox-description>
        The Alfinite: The best way to go through the MIT campus when the weather is nice.
      </flexbox-description>
      <flexbox-description>
        MIT Chapel: Explore the chapel near campus and its beautiful interior design.
      </flexbox-description>
      <flexbox-description>
        Walker Memorial: The Memorial was to have been designed in a "relaxed classical style with a generous convex portico overlooking the Charles River".
      </flexbox-description>
      <flexbox-description>
        Simmons Hall: If you want to see a dorm, Simmomns Hall is the most unique of them all.
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