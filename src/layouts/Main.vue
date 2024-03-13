<script setup>
// Componenets
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <div class="d-flex flex-column flex-root">
    <RouterView />
  </div>
  <Footer />
</template>
