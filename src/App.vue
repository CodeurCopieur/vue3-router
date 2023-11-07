<script setup>
  import { ref } from 'vue';

</script>

<template>
  <ul>
    <li><router-link to="/"></router-link>Home</li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/dssdsdds">Broken Link</router-link></li>
  </ul>

  <router-view/>
  
</template>

<style lang="scss" scoped>
  
</style>