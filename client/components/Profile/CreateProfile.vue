<script setup lang="ts">
import { ref } from "vue";
import { fetchy } from "../../utils/fetchy";

const props = defineProps(["post"]);

export type BodyT = string | number | boolean | null | BodyT[] | { [key: string]: BodyT };

const name = ref("");
const bio = ref("");

const emit = defineEmits(["refreshPosts"]);

const createProfile = async (name:string, bio:string ) => {
  try {
    await fetchy("/api/profile", "POST", {
      body: {name, bio},
    });
  } catch (_) {
    return;
  }
};


</script>

<template>
  <form @submit.prevent="createProfile(name, bio)">
    <label for="content">Post Contents:</label>
    <textarea id="content" v-model="name" placeholder="Name Here" required> </textarea>
    <textarea id="content" v-model="bio" placeholder="Short Description of Yourself" required> </textarea>
    <button type="submit" class="pure-button-primary pure-button">Finish Profile</button>
  </form>
</template>

<style scoped>
form {
  background-color: var(--base-bg);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
}

textarea {
  font-family: inherit;
  font-size: inherit;
  height: 6em;
  padding: 0.5em;
  border-radius: 4px;
  resize: none;
}
</style>

