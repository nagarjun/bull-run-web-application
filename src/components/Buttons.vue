<template>
  <button
    :type="type"
    class="
      w-full
      flex
      justify-center
      border border-transparent
      rounded-md
      shadow-sm
      text-sm
      font-medium
      text-white
      bg-indigo-600
      hover:bg-indigo-700
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      disabled:opacity-50 disabled:cursor-not-allowed
    "
    :class="classes"
    :disabled="loading"
  >
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      v-if="loading"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

enum Sizes {
  xs,
  sm,
  base,
  lg,
  xl,
}

// TODO: Force prop type for size
// TODO: Set classes based on size
// TODO: Add button variations
// TODO: Add support for icons
// TODO: Polish loading state
export default defineComponent({
  name: 'Button',
  props: {
    type: { type: String, default: 'button' },
    loading: { type: Boolean, default: false },
    size: { type: Number as PropType<Sizes>, default: Sizes.base },
  },
  data() {
    return {
      classes: {
        'px-4': true,
        'py-2': true,
      },
    };
  },
});
</script>
