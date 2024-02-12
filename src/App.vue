<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <!-- <HeaderComponent/> -->
  <router-view name="header"></router-view>
  <section class="bg-white">
    <div class="container px-6 py-10 mx-auto text-black flex" >
      <router-view name="LeftSideBar" class="w-1/4"></router-view>
      <router-view class="w-full"/>
      <router-view name="RightSideBar" class="w-1/4"></router-view>
    </div>
  </section>
  
</template>