<script setup>
  import { ref, onMounted, watch, watchEffect } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute(),
    router = useRouter(),
    post = ref(null);

  const getPost = async() => {

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
      );
      post.value = await res.json();
  };

  // watch(()=> route.params, getPost)
  // watch(()=> route.params, getPost, {immediate: true})
  watchEffect(getPost)

  const onBack = () => {
    router.push({ name: 'posts'})
    // router.push({ path: '/post'})
    // router.push('/post')
  }

  // getPost();
</script>

<template>
  <div class="text-black" style="position: fixed;">
    {{ $route.params.id }} 
    <h1 class="font-bold break-normal text-3xl md:text-5xl">{{ post.title }}</h1>
    <p  class="py-6">
      {{ post.body }}
    </p>
    <!-- <router-link to="/posts">Retour</router-link> -->
    <!-- <router-link 
      :to="{name: 'posts'}">Retour</router-link> -->
    <button @click="onBack">Retour</button>
  </div>

</template>