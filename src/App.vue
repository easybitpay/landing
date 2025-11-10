<script setup>
// Vue Router
import { useRoute } from 'vue-router';

// ----- START -----

// Genarals
const route = useRoute()
</script>

<template>
  <RouterView :key="route.fullPath"/>
  <div id="liveAlertPlaceholder"></div>
</template>
