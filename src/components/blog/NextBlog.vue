<script setup></script>

<template>
  <div>
    <div class="container">
      <div class="card w-100">
        <div class="card-body p-12 d-flex gap-8">
          <!-- begin::Image -->
          <div class="d-none d-lg-block w-268px min-w-268px h-268px">
            <img
              src="/media/images/blog/banner.jpg"
              alt="news"
              class="w-100 h-100 object-cover rounded-3"
            />
          </div>
          <!-- end::Image -->

          <div>
            <div>
              <!-- begin::Category -->
              <p class="mb-6 fs-7 text-gray-500 lh-1 mt-lg-4">Next Blog</p>
              <!-- end::Category -->

              <!-- begin::Title -->
              <h2
                class="text-gray-800 mb-10 lh-30px h-60px description-ellipsis"
                style="--line-camp: 2"
              >
                Choosing Open-Source vs. Third-Party Crypto Payment Processors
              </h2>
              <!-- end::Title -->
            </div>

            <!-- begin::Subject -->
            <p class="mb-0 lh-28px description-ellipsis" style="--line-camp: 4">
              Navigating the world of cryptocurrency can feel like a daunting task, especially when
              you’re an online business owner trying to keep up with the times. Accepting
              cryptocurrencies isn’t just a trend—it’s becoming a necessity. With options like the
              open-source BTCPayServer and the third-party crypto payment processi Navigating the
              world of cryptocurrency can feel like a daunting task, especially when you’re an
              online business owner trying to keep up with the times. Accepting cryptocurrencies
              isn’t just a trend—it’s becoming a necessity. With options like the open-source
              BTCPayServer and the third-party crypto payment processi
            </p>
            <!-- end::Subject -->
          </div>
        </div>
      </div>
    </div>

    <!-- begin::Action -->
    <div
      class="container-fluid border-top border-8 border-primary bg-gray-200 d-flex justify-content-center align-items-end gap-4 h-168px pb-6 mt-n20"
    >
      <!-- begin::Back -->
      <RouterLink
        to="/"
        class="w-40px h-40px d-flex align-items-center justify-content-center rounded bg-white cursor-pointer"
      >
        <inline-svg src="/media/icons/icons/chevron-left.svg" class="svg-icon-primary" height="25">
        </inline-svg>
      </RouterLink>
      <!-- end::Back -->

      <!-- begin::Next -->
      <RouterLink class="btn btn-primary neue-machina w-168px" to="/">Next</RouterLink>
      <!-- end::Next -->
    </div>
    <!-- end::Action -->
  </div>
</template>
