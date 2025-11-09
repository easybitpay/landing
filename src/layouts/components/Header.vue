<script setup>
const envPanelURL = import.meta.env.VITE_APP_PANEL_URL
</script>
<template>
  <header id="header">
    <div class="container">
      <nav>
        <!-- begin::Logo -->
        <div class="d-flex align-items-center justify-content-between w-100 w-sm-initial">
          <RouterLink to="/">
            <inline-svg
              src="/media/images/logo/sidebar-main-logo.svg"
              class="logo"
              width="168"
            ></inline-svg>
          </RouterLink>

          <a
            :href="envPanelURL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-sm btn-primary d-sm-none"
          >
            Start Now
          </a>
        </div>
        <!-- end::Logo -->

        <!-- begin::Links -->
        <div class="d-flex align-items-center gap-14">
          <ul class="links">
            <li class="link">
              <RouterLink :to="{ name: 'document' }">How it works</RouterLink>
            </li>

            <li class="link">
              <RouterLink to="/">Services</RouterLink>
            </li>

            <li class="link">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resource
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      class="dropdown-item"
                      href="https://github.com/easybitpay/documents/tree/main"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/wireless.svg"></inline-svg>
                        </div>
                      </div>

                      <span>API</span>
                    </a>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" to="/">
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/calender.svg"></inline-svg>
                        </div>
                      </div>

                      <span>About</span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink class="dropdown-item" :to="{ name: 'blog' }">
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/camera.svg"></inline-svg>
                        </div>
                      </div>

                      <span>Blog</span>
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink class="dropdown-item" :to="{ name: 'faq' }">
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/camera.svg"></inline-svg>
                        </div>
                      </div>

                      <span>FAQ</span>
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink class="dropdown-item" :to="{ name: 'document' }">
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/Webcame.svg"></inline-svg>
                        </div>
                      </div>

                      <span>Document</span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <a
            :href="envPanelURL"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary d-none d-sm-flex"
          >
            Get Started Free
          </a>
        </div>
        <!-- end::Links -->
      </nav>
    </div>
  </header>
</template>
