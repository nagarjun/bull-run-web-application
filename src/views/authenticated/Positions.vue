<template>
  <authenticated-frame title="Positions">
    <!-- Replace with your content -->
    <div class="px-4 py-4 sm:px-0">
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
    </div>
    <!-- /End replace -->
  </authenticated-frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthenticatedFrame from '@/components/AuthenticatedFrame.vue';

export default defineComponent({
  name: 'Positions',
  components: {
    AuthenticatedFrame,
  },
});
</script>
