<script setup>
// Compnenents
import MainBanner from '@/components/faq/MainBanner.vue';
import Questions from '@/components/faq/Questions.vue';
import PlansBanner from '@/components/globals/PlansBanner.vue';
import LatestNews from '@/components/globals/LatestNews.vue';

</script>
<template>
  <div class="container">
    <MainBanner />
    <Questions />
  </div>
  <PlansBanner class="my-16"/>

  <LatestNews />
</template>