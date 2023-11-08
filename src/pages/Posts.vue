<script setup>
  import { ref, onMounted } from 'vue'

  const posts = ref([]);

  onMounted(()=> {
    fetchPosts()
  });

  const fetchPosts = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  };
</script>

<template>
 <h1 class="text-black">Posts</h1>

 <table class="table-responsive" v-if="posts.length">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td data-label="Nom">{{ post.id}}</td>
                <td data-label="Title">{{ post.title}}</td>
                <td data-label="Body">{{ post.body}}</td>
            </tr>
        </tbody>
    </table>
</template>