<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { onBeforeMount, ref } from "vue";
import { fetchy } from "../../utils/fetchy";
import EditPostForm from "../Post/EditPostForm.vue";
import PostComponent from "../Post/PostComponent.vue";


const { currentUsername, isLoggedIn } = useUserStore();

const content = ref("");
let profile = ref();
const emit = defineEmits(["refreshPosts"]);
let searchAuthor = ref("");
let editing = ref("")

const loaded = ref(false);
let posts = ref<Array<Record<string, string>>>([]);

async function getProfile(name?: string) {
  let query: Record<string, string> = name !== undefined ? { name } : {};
  let profileResults;
  try {
    profileResults = await fetchy("/api/profile", "GET", { query });
  } catch (_) {
    return;
  }
  profile.value = profileResults;
}

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
  console.log("eat cheez", postResults);
}

function updateEditing(id: string) {
  editing.value = id;
};

onBeforeMount(async () => {
  try {
    await getProfile(currentUsername);
    await getPosts(currentUsername);
    loaded.value = true;
  } catch {
    // User is not logged in
  }
});

</script>

<template>
    <h1 class="name">Name: {{ profile ? profile.name : "" }}</h1>
  <h1> Bio: {{ profile ? profile.biography : "" }}</h1>
  <section class="posts" v-if="loaded  && posts.length !== 0">
      <h2>Your Posts:</h2>
    <article v-for="post in posts" :key="post._id">
      <PostComponent v-if="currentUsername === post.author && editing !==post._id" :post="post" @refreshPosts="getPosts" @editPost="updateEditing"/>
      <EditPostForm v-if= "currentUsername===post.author && editing === post._id" :post="post" @refreshPosts="getPosts" @editPost="updateEditing" />
    </article>
  </section>
</template>

<style scoped>
p {
  margin: 0em;
}

.author {
  font-weight: bold;
  font-size: 1.2em;
}

menu {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 0;
  margin: 0;
}

.timestamp {
  display: flex;
  justify-content: flex-end;
  font-size: 0.9em;
  font-style: italic;
}

.base {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.base article:only-child {
  margin-left: auto;
}
</style>
