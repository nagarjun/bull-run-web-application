<template>
  <div class="bg-gray-100 min-h-screen">
    <nav-bar />

    <header class="mb-5 bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-lg leading-6 font-semibold text-gray-900">{{ title }}</h1>
      </div>
    </header>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
    title: { type: String, required: true },
  },
  beforeMount() {
    document.title = `${this.title} - BullRun`;
  },
});
</script>
