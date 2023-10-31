<script setup  lang="ts">
import { useUserStore } from '@/stores/user';
import { defineEmits, defineProps, ref } from 'vue';


  const props = defineProps({like: {default: Math.random()}
  });

  const emit = defineEmits(['like']);

  const store = useUserStore();

  // Props are readonly. To be able to change the votes,
  // we need to derive new reactive variables.
  const likes = ref(props.like);
  let hasLiked = false;

  function liked() {
    if (hasLiked){
        hasLiked = false;
        return;
    }
    hasLiked = true;
  }

  function like() {
    liked()
    if (hasLiked){
        likes.value ++ ;
        console.log(likes);
    }
    else{
        likes.value --;
    }
  }


</script>

<template>
  <p v-if="store.isLoggedIn">
    <button class="button-error btn-small pure-button" v-on:click="like"> Likes: {{likes}}</button>
  </p>
</template>

<style scoped>
  button {
    background: rgb(42, 48, 82);
    margin-right: 1rem;
    cursor: pointer;
  }

  button:hover {
    background: rgb(93, 106, 160);
  }
</style>