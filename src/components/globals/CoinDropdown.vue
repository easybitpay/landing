<script setup>
// Vue
import { computed, ref } from 'vue'

// Hook
import useIconImage from '@/hooks/useIconImage'

// Props
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    required: true
  },
  selected: {
    type: [Object],
    required: true
  },
  showImage: {
    type: Boolean,
    default: false
  },
  showCoinNetwork: {
    type: Boolean,
    default: false
  },
  show: {
    type: String,
    default: 'symbol'
  },
  check: {
    type: String,
    default: 'id'
  }
})

// Emit
const emit = defineEmits(['change'])

// ----- START ----- //

const { iconImage, storageImage } = useIconImage()

const networks = computed(() => store.networks)

const search = ref('')

/**
 * Filtered Items
 */
const filteredItems = () => {
  var all = props.items,
    item = search.value

  if (!item) {
    return all
  }

  item = item.trim().toLowerCase()

  all = all.filter((currentItem) => {
    if (props.show) {
      if (currentItem[props.show].toLowerCase().indexOf(item) !== -1) {
        return currentItem
      }
    }

    if (currentItem.symbol) {
      if (currentItem.symbol.toLowerCase().indexOf(item) !== -1) {
        return currentItem
      }
    }
  })

  return all
}
</script>

<template>
  <div class="dropdown select-coin-dropdown">
    <a
      class="dropdown-toggle"
      role="button"
      :disabled="disabled"
      id="coinDropdownMenuLink"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="true"
    >
      <div v-if="selected && Object.keys(selected).length">
        <img
          class="coin-icon"
          :src="selected.logo ? storageImage(selected.logo, 24) : iconImage(selected.symbol)"
          :alt="selected[show]"
        />
      </div>

      <inline-svg
        :src="`media/icons/shapes/${$filters.shapeStatus('balance-2')}.svg`"
        height="24"
        width="24"
      ></inline-svg>
    </a>

    <ul class="dropdown-menu dropdown-menu-end w-100" aria-labelledby="coinDropdownMenuLink">
      <!-- begin::Search Input -->
      <div class="position-relative d-flex align-items-center mb-6" v-if="items.length > 30">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Search anything"
          v-model="search"
        />

        <!-- begin::Icon -->
        <inline-svg
          src="media/icons/icons/search.svg"
          class="position-absolute end-16px"
        ></inline-svg>
        <!-- end::Icon -->
      </div>
      <!-- end::Search Input -->

      <!-- begin::Items -->
      <div class="custom-scroll d-flex flex-column gap-2">
        <!-- begin::Item -->
        <li v-for="(item, index) in filteredItems()" :key="index" @click="$emit('change', item)">
          <a :class="[{ 'dropdown-item': true }, { active: selected[check] === item[check] }]">
            <div class="d-flex align-items-center gap-2">
              <img
                v-if="showImage"
                class="small-coin-icon"
                :src="item.logo ? storageImage(item.logo, 24) : iconImage(item.symbol)"
                :alt="item[show]"
              />
              {{ item[show] }}
              <span v-if="showCoinNetwork" class="fs-9 text-gray-600">
                {{ item.network?.name }}
              </span>
            </div>
          </a>
        </li>
        <!-- end::Item -->
      </div>
      <!-- end::Items -->
    </ul>
  </div>
</template>
