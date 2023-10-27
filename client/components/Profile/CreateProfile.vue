<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import { fetchy } from "../../utils/fetchy";

import { onBeforeMount } from "vue";

import CreatePostForm from "@/components/Post/CreatePostForm.vue";
import EditPostForm from "@/components/Post/EditPostForm.vue";
import PostComponent from "@/components/Post/PostComponent.vue";
import router from "../../router";

const { loginUser, updateSession, isLoggedIn, currentUsername } = useUserStore();

const props = defineProps(["post"]);

export type BodyT = string | number | boolean | null | BodyT[] | { [key: string]: BodyT };

const name = ref(useUserStore().currentUsername);
const biography = ref("");

const emit = defineEmits(["refreshPosts"]);

const createProfile = async (name:string, biography:string ) => {
  updateSession();
  console.log("FFF", name, biography);
  try {
    await fetchy("/api/profile", "POST", {
      body: {name, biography},
    });
    await router.push({name: "Home"});
  } catch (_) {
    return;
  }
};
const loaded = ref(false);
let posts = ref<Array<Record<string, string>>>([]);
let editing = ref("");
let searchAuthor = ref("");

async function getPosts(author?: string) {
  let query: Record<string, string> = author !== undefined ? { author } : {};
  let postResults;
  try {
    postResults = await fetchy("/api/posts", "GET", { query });
  } catch (_) {
    return;
  }
  searchAuthor.value = author ? author : "";
  posts.value = postResults;
}

function updateEditing(id: string) {
  editing.value = id;
};

onBeforeMount(async () => {
  await getPosts(currentUsername);
  loaded.value = true;
});


</script>

<template>
  <form @submit.prevent="createProfile(name, biography)">
    <h2>Name:</h2>
    <textarea id="content" v-model="name" required> </textarea>
    <h2>Short Bio:</h2>
    <textarea id="content" v-model="biography" placeholder="Short Description of Yourself" required> </textarea>
    <section >
      <h2>Create a post:</h2>
      <CreatePostForm @refreshPosts="getPosts" />
    </section>
    <section class="posts" v-if="loaded  && posts.length !== 0">
      <h2>Your Posts:</h2>
    <article v-for="post in posts" :key="post._id">
      <PostComponent v-if="currentUsername === post.author && editing !==post._id" :post="post" @refreshPosts="getPosts" @editPost="updateEditing"/>
      <EditPostForm v-if= "currentUsername===post.author && editing === post._id" :post="post" @refreshPosts="getPosts" @editPost="updateEditing" />
    </article>
  </section>
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

