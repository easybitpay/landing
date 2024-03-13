<script setup>
// Vue
import { ref } from 'vue';

// ----- START ----- //

// Refs
const readMore = ref(false);

const shortText =
  "OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.";

const longText =
  "OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe. OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.OpenNode uses intelligent, up-to-date security protocols to prevent unauthorized access to our platform and protect funds from theft. Our systems are engineered to transfer your revenue securely and keep your business and transaction data safe.";
</script>

<template>
  <div class="container">
    <h1 class="fs-extra mb-8 text-gray-800">Read more</h1>
    <p class="mb-0 lh-28px">
      {{ readMore ? longText : shortText }}
      <span class="cursor-pointer text-primary" @click="readMore = !readMore">
        Read {{ readMore ? "less" : "more" }}
      </span>
    </p>
  </div>
</template>
