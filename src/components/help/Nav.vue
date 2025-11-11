<script setup>
const scrollToId = (id) => {
  document.getElementById(id).scrollIntoView()
}
</script>

<template>
  <div class="d-none d-lg-block">
    <nav id="document-nav" class="scroll-spy">
      <nav class="nav flex-column gap-2">
        <a class="nav-link" href="#overview" @click.prevent="scrollToId('overview')">Overview</a>

        <a class="nav-link" href="#concepts" @click.prevent="scrollToId('concepts')">1. Concepts</a>
        <nav class="nav child flex-column">
          <a
            class="nav-link"
            href="#concepts-environments"
            @click.prevent="scrollToId('concepts-environments')"
          >
            Environments
          </a>
          <a class="nav-link" href="#concepts-flow" @click.prevent="scrollToId('concepts-flow')">
            Account Flow
          </a>
          <a
            class="nav-link"
            href="#concepts-tokens"
            @click.prevent="scrollToId('concepts-tokens')"
          >
            Tokens
          </a>
        </nav>

        <a class="nav-link" href="#authentication" @click.prevent="scrollToId('authentication')">
          2. Authentication
        </a>

        <a class="nav-link" href="#base-urls" @click.prevent="scrollToId('base-urls')">
          3. Base URLs
        </a>

        <a class="nav-link" href="#key-management" @click.prevent="scrollToId('key-management')">
          4. Key Management
        </a>

        <a class="nav-link" href="#invoice" @click.prevent="scrollToId('invoice')">
          5. Invoices API
        </a>
        <nav class="nav child flex-column">
          <a class="nav-link" href="#incoice-create" @click.prevent="scrollToId('incoice-create')">
            Create Invoice
          </a>
          <a class="nav-link" href="#invoice-get" @click.prevent="scrollToId('invoice-get')">
            Get Invoice
          </a>
          <a class="nav-link" href="#invoice-status" @click.prevent="scrollToId('invoice-status')">
            Get Status
          </a>
        </nav>

        <a class="nav-link" href="#callback" @click.prevent="scrollToId('callback')">
          6. Callbacks
        </a>
        <nav class="nav child flex-column">
          <a
            class="nav-link"
            href="#callback-config"
            @click.prevent="scrollToId('callback-config')"
          >
            Configure
          </a>
          <a
            class="nav-link"
            href="#callback-payload"
            @click.prevent="scrollToId('callback-payload')"
          >
            Payload
          </a>
          <a
            class="nav-link"
            href="#callback-verify"
            @click.prevent="scrollToId('callback-verify')"
          >
            Verification
          </a>
        </nav>

        <a class="nav-link" href="#sandbox" @click.prevent="scrollToId('sandbox')"> 7. Sandbox </a>

        <a class="nav-link" href="#withdraw" @click.prevent="scrollToId('withdraw')">
          8. Withdraw
        </a>

        <a class="nav-link" href="#data-model" @click.prevent="scrollToId('data-model')">
          9. Data Model
        </a>

        <a class="nav-link" href="#security" @click.prevent="scrollToId('security')">
          10. Security
        </a>
      </nav>
    </nav>
  </div>
</template>
