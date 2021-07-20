<template>
  <div class="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
    <!-- Instruments -->
    <div class="flex flex-col items-center p-5 bg-green-50 rounded-lg">
      <dt class="text-xs font-medium text-gray-500 truncate">{{ positions.length }} Instruments</dt>
      <dl class="mt-2 text-sm" v-for="p in positions" :key="p.Instrument">
        <dt>{{ p.Instrument }}</dt>
      </dl>
    </div>

    <!-- Metrics -->
    <div class="flex flex-col divide-y divide-gray-200 mt-8">
      <!-- Row 1 -->
      <div>
        <div class="flex divide-x divide-gray-200">
          <div class="flex flex-1 flex-col items-center">
            <dt class="text-xs font-medium text-gray-500 truncate">Combined LTP</dt>
            <dl class="mt-2 text-xl font-semibold text-gray-900">
              <dt>&#8377; {{ combinedLtv }}</dt>
            </dl>
          </div>
          <div class="flex flex-1 flex-col items-center">
            <dt class="text-xs font-medium text-gray-500 truncate">Stop Loss</dt>
            <dl class="mt-2 text-xl font-semibold text-gray-900">
              <dt>&#8377; <span contenteditable="true" v-text="stopLoss" @keydown="showButton" /></dt>
            </dl>
          </div>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="mt-5">
        <div class="flex flex-1 flex-col items-center mt-5">
          <dt class="text-xs font-medium text-gray-500 truncate">Bid/Ask effect combined value</dt>
          <dl class="mt-2 text-xl font-semibold text-gray-900">
            <dt>&#8377; {{ combinedLtv }}</dt>
          </dl>
        </div>
      </div>
    </div>

    <div class="mt-5" v-if="showExecuteButton">
      <Button :loading="executingSpread" @click="executeSpread">Execute</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Positions } from '@/store/index';
import Button from '@/components/Buttons.vue';

export default defineComponent({
  name: 'PositionSpread',
  components: {
    Button,
  },
  props: {
    positions: { type: Array as PropType<Positions[]>, required: true },
  },
  data() {
    return {
      showExecuteButton: true,
      executingSpread: false,
      stopLoss: 0,
    };
  },
  computed: {
    combinedLtv(): string {
      let total = 0;
      this.positions.forEach((p) => {
        total += p.LTP;
      });

      return total.toFixed(2);
    },
  },
  methods: {
    showButton() {
      if (!this.showExecuteButton) {
        this.showExecuteButton = true;
        this.executingSpread = false;
      }
    },

    executeSpread() {
      this.executingSpread = true;
      setTimeout(() => {
        this.showExecuteButton = false;
        this.executingSpread = false;
      }, 1000);
    },
  },
});
</script>
