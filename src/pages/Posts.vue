<script setup>
  import { ref, onMounted } from 'vue'

  const posts = ref([]);

  onMounted(()=> {
    fetchPosts()
  });

  const fetchPosts = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    posts.value = await res.json()
  };
</script>

<template>
  <div class="row" style="display: flex;">
    <div class="col-md-8" style="max-width: 60%;">
      <div>
    <h1 class="text-black">Posts</h1>

    <table class="table-responsive" v-if="posts.length">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="post in posts" :key="post.id">
                  <td data-label="id">{{ post.id}}</td>
                  <td data-label="Title">{{ post.title}}</td>
                  <td data-label="Body">{{ post.body}}</td>
                  <td><router-link :to="{name: 'singlePost', params: {id: post.id}}">View Post</router-link></td>
                  <!-- <td><router-link :to="{path: `/post/${post.id}`}">View Post</router-link></td> -->
              </tr>
          </tbody>
      </table>
      </div>
    </div>
    <div class="col-md-4" style="max-width: 40%;">
      <router-view></router-view>
    </div>
  </div>
</template>