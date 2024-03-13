<script setup>

// Componenets
import MainBanner from '@/components/security/MainBanner.vue';
import ExtraBox from '@/components/globals/ExtraBox.vue';
import Features from '@/components/globals/Features.vue';
import PlansBanner from '@/components/globals/PlansBanner.vue';
import TextBlock from '@/components/globals/TextBlock.vue';

const features = [
  {
    icon: "wallet",
    title: "Built-in fraud protection",
    subject:
      "Our platform is designed to fight fraud with regular monitoring to flag potential irregular activity.",
  },
  {
    icon: "balance-2",
    title: "Secure custody and transfer",
    subject:
      "OpenNode supports multisig, standard withdrawal limits and provides IP address whitelisting to ensure funds are secure.",
  },
  {
    icon: "account",
    title: "Bitcoin-only",
    subject:
      "Bitcoin provides the highest level of security and regulatory clarity.",
  },
];
</script>
<template>
  <div class="container">
    <MainBanner />
  </div>

  <ExtraBox background="/media/images/bg/banner.svg">
    <div class="pb-21 pt-8">
      <!-- begin::Title -->
      <h1
        class="text-white mb-5 fs-extra h-120px d-flex align-items-center mw-560px"
      >
        Protect your revenue
      </h1>
      <!-- end::Title -->

      <!-- begin::Partners -->
      <p class="mw-888px m-0 fs-1 lh-38px text-white">
        OpenNode uses intelligent, up-to-date security protocols to prevent
        unauthorized access to our platform and protect funds from theft. Our
        systems are engineered to transfer your revenue securely and keep your
        business and transaction data s
      </p>
      <!-- end::Partners -->
    </div>
  </ExtraBox>

  <Features title="Security is our top priority" :items="features" />

  <PlansBanner class="mb-24" />

  <TextBlock />
</template>
