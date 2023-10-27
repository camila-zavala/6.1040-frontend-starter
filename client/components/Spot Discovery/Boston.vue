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
    <h4>
    <div>
      <flexbox-item2>
        Brief Boston History:
      </flexbox-item2>
    </div>
    <div>
      <flexbox-description>
        Boston was founded in 1630 by English Puritans fleeing religious persecution.
        On 29 March 1630, a fleet of 11 ships carrying 700 people sailed from England
        to Massachusetts. They were led by John Winthrop (1588-1649).
        In 1630 the new settlement was named Boston
        after Boston in England from which many of the settlers came.
        The Puritans hoped to create a ‘city on a hill’ i.e. a shining example of a
        Godly society for the entire world to see. Instead, they created a society
        just as intolerant as the one they had left. The Puritans went to America
        fleeing religious persecution but they, in turn, persecuted the Quakers who
        they called a ‘cursed sect’. A Baptist named Obadiah Holmes was publicly
        whipped in Boston in July 1651. In October 1659 two Quakers named William
        Robinson and Marmaduke Stevenson were hanged in Boston. Another Quaker named
        Mary Dyer was hanged on Boston Common on 1 June 1660.
        Nevertheless, the new settlement flourished. In 1631 the first sailing ship built
        in America was launched from Boston and soon the shipbuilding industry thrived.
        There was also a flourishing whaling industry and a fishing industry.
        In 1635 Boston Latin School, the first American public school opened.
        A College was founded in Boston in 1636. In 1639 it was named Harvard after a benefactor. - Tim Lambert
      </flexbox-description>
    </div>
  </h4>
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
    padding-top: 10px;
    padding-bottom: 30px;
    height: auto;
    display: flex;
    justify-content: center;
    
}

flexbox-description {
    justify-content: center;
    display: flex;
    padding-inline: 30px;
    font-size: 15px;
    
}
</style>
