<script setup>
// Vue
import { onMounted } from 'vue'

// Bootstrap
import { ScrollSpy } from 'bootstrap'

// main.js or another entry point
import Prism from 'prismjs'

// Components
import Nav from '@/components/help/Nav.vue'
import Overview from '@/components/help/Overview.vue'
import Concept from '@/components/help/Concept.vue'
import Authentication from '@/components/help/Authentication.vue'
import BaseUrls from '@/components/help/BaseUrls.vue'
import KeyManagement from '@/components/help/KeyManagement.vue'
import InvoiceApi from '@/components/help/InvoiceApi.vue'
import Callback from '@/components/help/Callback.vue'
import Sandbox from '@/components/help/Sandbox.vue'
import Withdraw from '@/components/help/Withdraw.vue'
import DataModel from '@/components/help/DataModel.vue'
import Security from '@/components/help/Security.vue'

onMounted(() => {
  const scrollSpy = new ScrollSpy(document.body, {
    target: '#document-nav'
  })

  scrollSpy.refresh()

  // This initializes Prism.js to highlight code
  Prism.highlightAll()
})
</script>

<template>
  <div class="container pt-14 d-flex gap-12">
    <div id="document-holder">
      <div
        data-bs-spy="scroll"
        data-bs-target="#document-nav"
        data-bs-smooth-scroll="true"
        tabindex="0"
      >
        <Overview />

        <div class="divider my-10 h-2px"></div>

        <Concept />

        <Authentication />

        <BaseUrls />

        <KeyManagement />

        <InvoiceApi />

        <Callback />

        <Sandbox />

        <Withdraw />

        <DataModel />

        <Security/>
      </div>
    </div>

    <Nav />
  </div>
</template>
