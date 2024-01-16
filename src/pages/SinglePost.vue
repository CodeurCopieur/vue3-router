<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute(),
  post = ref(null);

const getPost = async() => {

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
    );
    post.value = await res.json();
};

getPost();
</script>

<template>
  <div class="text-black">
    {{ $route.params.id }} 
    <h1 class="font-bold break-normal text-3xl md:text-5xl">{{ post.title }}</h1>
    <p  class="py-6">
      {{ post.body }}
    </p>
    <router-link to="/posts">Retour</router-link>
  </div>

</template>