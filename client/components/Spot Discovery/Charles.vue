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
      <img src= "./images/general/kayaking.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles2.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles3.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles4.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles5.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles6.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles7.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles8.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles9.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles10.png">
    </flexbox-item1>
    <flexbox-item1 justify-content:center>
      <img src= "./images/charles_river/charles11.png">
    </flexbox-item1>

    </gallery-container>
    </h3>
    <h3>
      <h4>
    <div>
      <flexbox-item2>
        Things to Do at the Charles River:
      </flexbox-item2>
    </div>
    <div>
      <flexbox-description>
        For a picnic with lots to watch, check out Allston’s Herter Park
      </flexbox-description>
      <flexbox-description>
        Rent a canoe, kayak or paddle board from Paddle Boston.
      </flexbox-description>
      <flexbox-description>
        Follow the Dr. Paul Dudley White Charles River Bike Path
        for a scenic 17-mile loop along both shores of the Charles River.
      </flexbox-description>
      <flexbox-description>
        Walk, run, or bike along the Esplanade for a scenic view.
      </flexbox-description>
      <flexbox-description>
        Check out the Elm Bank Reservation for hiking trails and birdwatching.
      </flexbox-description>
      <flexbox-description>
        Pass along the Watertown Riverfront Park and Braille Trail
      </flexbox-description>
      <flexbox-description>
        Between the B.U. Bridge and Pleasant Street, Magazine Beach Park is Cambridge’s second-largest park, clocking in at 15 acres.
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
    font-size: 18px;
    
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
