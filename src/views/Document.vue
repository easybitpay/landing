<script setup>
// Vue
import { ScrollSpy } from 'bootstrap'
import { onMounted } from 'vue'

// Componenets
import LatestNews from '@/components/globals/LatestNews.vue'

// main.js or another entry point
import Prism from 'prismjs'

const JS = `const options = { 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'API_KEY'
},`

const PHP = `const options = { 
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'API_KEY'
},`

const scrollToId = (id) => {
  document.getElementById(id).scrollIntoView()
}

onMounted(() => {
  const scrollSpy = new ScrollSpy(document.body, {
    target: '#knowledge-nav'
  })

  scrollSpy.refresh()

  // This initializes Prism.js to highlight code
  Prism.highlightAll()
})
</script>

<template>
  <div class="container pt-40 pt-lg-31">
    <div class="d-flex flex-column flex-md-row gap-12">
      <!-- begin::Nav -->
      <div class="d-none d-md-block">
        <nav id="knowledge-nav" class="scroll-spy">
          <!-- begin::Item -->
          <div class="item">
            <p class="title">GETTING STARTED</p>
            <nav class="nav flex-column gap-2">
              <a class="nav-link" href="#item-1" @click.prevent="scrollToId('item-1')"> Item 1 </a>
              <nav class="nav child flex-column">
                <a class="nav-link" href="#item-1-1" @click.prevent="scrollToId('item-1-1')">
                  Item 1-1
                </a>
                <a class="nav-link" href="#item-1-2" @click.prevent="scrollToId('item-1-2')">
                  Item 1-2
                </a>
              </nav>
              <a class="nav-link" href="#item-2" @click.prevent="scrollToId('item-2')"> Item 2 </a>
              <a class="nav-link" href="#item-3" @click.prevent="scrollToId('item-3')"> Item 3 </a>
              <nav class="nav child flex-column">
                <a class="nav-link" href="#item-3-1" @click.prevent="scrollToId('item-3-1')">
                  Item 3-1
                </a>
                <a class="nav-link" href="#item-3-2" @click.prevent="scrollToId('item-3-2')">
                  Item 3-2
                </a>
              </nav>
            </nav>
          </div>
          <!-- end::Item -->
        </nav>
      </div>
      <!-- end::Nav -->

      <!-- begin::Content -->
      <div class="w-100">
        <div
          data-bs-spy="scroll"
          data-bs-target="#knowledge-nav"
          data-bs-smooth-scroll="true"
          tabindex="0"
        >
          <div id="item-1">
            <h3 class="mb-6">Item 1</h3>
            <p class="mb-8">
              "Existential" redirects here. For the logical sense of the term, see Existential
              quantification. For other uses, see Existence (disambiguation).For the philosophical
              position commonly seen as the antonym of existentialism, see Essentialism. Clockwise
              from top left: Søren Kierkegaard, Simone de Beauvoir, Jean-Paul Sartre, Friedrich
              NietzscheExistentialism is a form of philosophical inquiry that explores the issue of
              human existence. Existentialist philosophers explore questions related to the meaning,
              purpose, and value of human existence. Common concepts in existentialist thought
              include existential crisis, dread, and anxiety in the face of an absurd world, as well
              as authenticity, courage, and virtue. Existentialism is associated with several 19th-
              and 20th-century European philosophers who shared an emphasis on the human subject,
              despite often profound differences in thought. Among the earliest figures associated
              with existentialism are philosophers Søren Kierkegaard, Friedrich Nietzsche and
              novelist Fyodor Dostoevsky, all of whom critiqued rationalism and...
            </p>

            <div class="card prism-card mb-8">
              <div class="card-header">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-js-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-js"
                      type="button"
                      role="tab"
                      aria-controls="nav-js"
                      aria-selected="true"
                    >
                      JavaScript
                    </button>
                    <button
                      class="nav-link"
                      id="nav-php-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-php"
                      type="button"
                      role="tab"
                      aria-controls="nav-php"
                      aria-selected="false"
                    >
                      PHP
                    </button>
                  </div>
                </nav>
              </div>
              <div class="card-body">
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane show active"
                    id="nav-js"
                    role="tabpanel"
                    aria-labelledby="nav-js-tab"
                    tabindex="0"
                  >
                    <pre class="language-javascript"><code>{{ JS }}</code></pre>
                  </div>
                  <div
                    class="tab-pane"
                    id="nav-php"
                    role="tabpanel"
                    aria-labelledby="nav-php-tab"
                    tabindex="0"
                  >
                    <pre class="language-javascript"><code>{{ PHP }}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="item-1-1">
            <h5>Item 1-1</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et harum ab quasi
              laudantium, pariatur aliquid. Necessitatibus reprehenderit doloribus suscipit
              similique explicabo neque optio perspiciatis vero animi, laudantium ea ab blanditiis?
            </p>
          </div>
          <div id="item-1-2">
            <h5>Item 1-2</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et harum ab quasi
              laudantium, pariatur aliquid. Necessitatibus reprehenderit doloribus suscipit
              similique explicabo neque optio perspiciatis vero animi, laudantium ea ab blanditiis?
            </p>
          </div>
          <div id="item-2">
            <h4>Item 2</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et harum ab quasi
              laudantium, pariatur aliquid. Necessitatibus reprehenderit doloribus suscipit
              similique explicabo neque optio perspiciatis vero animi, laudantium ea ab blanditiis?
            </p>
          </div>
          <div id="item-3">
            <h4>Item 3</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et harum ab quasi
              laudantium, pariatur aliquid. Necessitatibus reprehenderit doloribus suscipit
              similique explicabo neque optio perspiciatis vero animi, laudantium ea ab blanditiis?
            </p>
          </div>
          <div id="item-3-1">
            <h5>Item 3-1</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et harum ab quasi
              laudantium, pariatur aliquid. Necessitatibus reprehenderit doloribus suscipit
              similique explicabo neque optio perspiciatis vero animi, laudantium ea ab blanditiis?
            </p>
          </div>
          <div id="item-3-2">
            <h5>Item 3-2</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et harum ab quasi
              laudantium, pariatur aliquid. Necessitatibus reprehenderit doloribus suscipit
              similique explicabo neque optio perspiciatis vero animi, laudantium ea ab blanditiis?
            </p>
          </div>
        </div>
      </div>
      <!-- end::Content -->
    </div>
  </div>

  <div class="mt-14">
    <LatestNews />
  </div>
</template>
