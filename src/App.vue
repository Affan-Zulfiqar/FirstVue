<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
  <Footer></Footer>
</template>
