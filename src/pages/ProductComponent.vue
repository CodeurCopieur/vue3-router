<script setup>
import { useRoute } from "vue-router";
  const route = useRoute()
</script>
<template>
  <div class="text-black">
    <h1>Product component</h1>
    <p>{{ route.params }}</p>
  </div>
</template>