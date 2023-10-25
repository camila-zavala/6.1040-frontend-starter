<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const { loginUser, updateSession } = useUserStore();




</script>

<template>

  <form class="pure-form pure-form-aligned" >
  <h3>
    <gallery-container>
    <div>
    <flexbox-item1>
      Reviews:
    </flexbox-item1>
    </div>
    <div>
    <box-div>
      <flexbox-item1 justify-content:center>
      Jimmy: Beautiful sunsets and great games here!
      </flexbox-item1>
    </box-div>
    </div>
    <div>
    <box-div>
      <flexbox-item1 justify-content:center>
      Jimmy: Beautiful sunsets and great games here!
      </flexbox-item1>
    </box-div>
    </div>
    
  </gallery-container>
</h3>
  </form>
  
</template>



<style scoped>
h3 {
  display: flex;
  justify-content:flex-start;
}
h4 {
  background: #F5F1F1;
}
gallery-container {
  display: flex;
  flex-direction: row;
  height: 250px;
  overflow: auto;
  overflow-y: hidden;
  padding-top: 100px;
  max-width: fit-content;
  
}
box-div{
    display:flex;
    height: 200px;
    width: 300px;
    padding-top: 100px;
}
flexbox-item1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 200px;
    padding-inline: 30px;
    
}

</style>