<template>
  <div class="bg-gray-100 min-h-screen">
    <nav-bar />

    <main>
      <div class="mt-5 mx-auto py-6 sm:px-6 lg:px-8" :class="mainClasses">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'AuthenticatedFrame',
  components: {
    NavBar,
  },
  props: {
    fluidWidth: { type: Boolean, default: false },
    title: { type: String, required: true },
  },
  data() {
    return {
      mainClasses: {
        'max-w-7xl': !this.fluidWidth,
      },
    };
  },
  beforeMount() {
    document.title = `${this.title} - BullRun`;
  },
});
</script>
