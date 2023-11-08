<script setup>

  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router';

  const route = useRoute(),
        post = ref(null)

  const getPost = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+`${route.params.id}`)
    post.value = await res.json()
  };


  getPost()
</script>

<template>
  <h1 class="text-black">{{ $route.params.id }}</h1>
  <!-- Title -->
  <div v-if="post" class="text-center pt-16 md:pt-32 text-black">
    <h1 class="font-bold break-normal text-3xl md:text-5xl">{{ post.title }}</h1>
  </div>  
  <!-- image -->
  <div class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style="background-image:url('https://source.unsplash.com/collection/1118905/'); height: 75vh;"></div>
  <!-- Container -->
  <div class="container max-w-5xl mx-auto -mt-32">

  <div class="mx-0 sm:mx-6">

    <div class="bg-white w-full p-8 md:px-20 text-xl md:text-2xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">

    <!--Post Content-->

    <!--Lead Para-->

    <p class="py-6">{{ post.body }}</p>

    <!--/ Post Content-->

    <div class="flex flex-col pb-6 text-center">
      <router-link href="https://github.com/tailwindtoolbox/Ghostwind/archive/master.zip" class="no-underline hover:no-underline" target="_blank" rel="noopener" download=""><button class="w-full max-w-sm mx-auto flex items-center justify-center bg-brand hover:bg-teal-500 outline-none focus:border-teal-900 text-white font-extrabold py-3 px-5 rounded shadow"> Back</button></router-link>
    </div>

  </div>

</div>


</div>
</template>