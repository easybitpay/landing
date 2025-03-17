<script setup></script>
<template>
  <header id="header">
    <div class="container">
      <nav>
        <!-- begin::Logo -->
        <RouterLink to="/">
          <inline-svg
            src="/media/images/logo/sidebar-main-logo.svg"
            class="logo"
            width="168"
          ></inline-svg>
        </RouterLink>
        <!-- end::Logo -->

        <!-- begin::Links -->
        <div class="d-flex align-items-center gap-14">
          <ul class="links">
            <li class="link">
              <RouterLink to="/">How it works</RouterLink>
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
                    <RouterLink class="dropdown-item" to="/">
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/wireless.svg"></inline-svg>
                        </div>
                      </div>

                      <span>API</span>
                    </RouterLink>
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
                    <RouterLink class="dropdown-item" to="/">
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/camera.svg"></inline-svg>
                        </div>
                      </div>

                      <span>Blog</span>
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink class="dropdown-item" :to="{name: 'faq'}">
                      <div>
                        <div class="svg-box">
                          <inline-svg src="/media/icons/icons/camera.svg"></inline-svg>
                        </div>
                      </div>

                      <span>FAQ</span>
                    </RouterLink>
                  </li>

                  <li>
                    <RouterLink class="dropdown-item" :to="{name: 'document'}">
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
            href="https://panel.easybitpay.com/#/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary login-btn"
          >
            Get Started Free
          </a>
        </div>
        <!-- end::Links -->
      </nav>
    </div>
  </header>
</template>
