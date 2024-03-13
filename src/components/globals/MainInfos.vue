<script setup>
// Hooks
import useIconImage from '@/hooks/useIconImage';

const coins = ['BTC', 'ETH', 'BNB', 'USDT', 'TRX', 'ECG', 'Polygon']
// ----- START -----

// Globals
const { iconImage } = useIconImage()
</script>
<template>
  <div class="container">
    <div class="main-info-section-box">
      <!-- begin::Item -->
      <div class="main-info-section">
        <!-- begin::Image -->
        <img
          src="/media/images/illustration/currency.svg"
          alt="currency"
          class="img-fluid main-image"
        />
        <!-- end::Image -->

        <!-- begin::Content -->
        <div class="content">
          <div class="title-box">
            <h1 class="fs-extra title">supported Cryptocurrency</h1>
          </div>

          <p class="text">
            Multi-voting helps a committee or group narrow down a large number of items into just a
            few items on which to focus & similar to multi-voting, this approach.Multi-voting helps
            a committee or group narrow down a large number of items into just a few items on which
            to focus & similar to multi-voting, this approach.
          </p>

          <div class="action">
            <button class="btn btn-primary w-120px p-0">+100</button>

            <div class="coins-images">
              <img
                :src="iconImage(item)"
                :alt="item"
                v-for="(item, index) in coins"
                :key="index"
                class="item"
              />
            </div>
          </div>
        </div>
        <!-- end::Content -->
      </div>
      <!-- end::Item -->

      <!-- begin::Item -->
      <div class="main-info-section">
        <!-- begin::Image -->
        <img
          src="/media/images/illustration/security.svg"
          alt="currency"
          class="img-fluid main-image"
        />
        <!-- end::Image -->

        <!-- begin::Content -->
        <div class="content">
          <div class="title-box">
            <h1 class="fs-extra title">Safely Activities</h1>
          </div>

          <p class="text">
            Multi-voting helps a committee or group narrow down a large number of items into just a
            few items on which to focus & similar to multi-voting, this approach.Multi-voting helps
            a committee or group narrow down a large number of items into just a few items on which
            to focus & similar to multi-voting, this approach.
          </p>

          <div class="action">
            <button class="btn btn-primary w-120px p-0">Read more</button>
          </div>
        </div>
        <!-- end::Content -->
      </div>
      <!-- end::Item -->
    </div>
  </div>
</template>
