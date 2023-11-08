<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
  <HeaderComponent/>

  <section class="bg-white">
    <div class="container px-6 py-10 mx-auto">
      <router-view/>
    </div>
  </section>
  
</template>