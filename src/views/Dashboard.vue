<script setup>
// Componenets
import SectionBanner from '@/components/globals/SectionBanner.vue';
import ExtraBox from '@/components/globals/ExtraBox.vue';
import Features from '@/components/globals/Features.vue';
import MainInfos from '@/components/globals/MainInfos.vue';
import PlansBanner from '@/components/globals/PlansBanner.vue';
import Exchange from '@/components/exchange/Exchange.vue';

const features = [
  {
    icon: "wallet",
    title: "High Speed",
    subject:
      "Resource management is the process of pre-planning, scheduling, and allocating your resources to maximize efficiency.",
  },
  {
    icon: "balance-2",
    title: "Multi-Currency",
    subject:
      "Increased productivity means greater output from the same amount of input & It is getting important things done consistently.",
  },
  {
    icon: "account",
    title: "New Customers",
    subject:
      "Working collaboratively helps improve productivity and gives employees a sense of purpose in the organization.",
  },
  {
    icon: "delete",
    title: "Powerful system",
    subject:
      "With unified reporting, all the project stakeholders can view the test reports for functional tests on dashboard.",
  },
  {
    icon: "chat",
    title: "Multi-currency",
    subject:
      "With Advanced Inventory, you're equipped with an automated system that calculates the quantity and true value of your inventory.",
  },
  {
    icon: "cards",
    title: "Create account",
    subject:
      "Operations Optimization is the process of ensuring that your operations are performing as efficient & effective.",
  },
];
</script>
<template>
  <div class="container">
    <SectionBanner />
  </div>

  <ExtraBox background="/media/images/bg/banner.svg">
    <div class="pt-12 py-16">
      <!-- begin::Title -->
      <h1 class="text-white mb-17 fs-extra">
        Trusted <br />
        paying customers
      </h1>
      <!-- end::Title -->

      <!-- begin::Partners -->
      <div class="mw-628px d-flex flex-wrap column-gap-19 row-gap-6">
        <img
          src="/media/images/partners/partner.png"
          alt="partner"
          class="mh-35px mw-120px"
          v-for="(item, index) in 6"
          :key="index"
        />
      </div>
      <!-- end::Partners -->
    </div>
  </ExtraBox>

  <Features title="Check all features" :items="features" />

  <Exchange />

  <div class="my-28 mt-xl-50">
    <MainInfos />
  </div>

  <PlansBanner />
</template>
