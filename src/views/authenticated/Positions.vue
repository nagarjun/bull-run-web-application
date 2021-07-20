<template>
  <authenticated-frame fluidWidth title="Positions">
    <div class="flex flex-row gap-x-10 mb-5">
      <!-- Table -->
      <div class="flex-grow -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Checkbox</span>
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Instrument
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Qty.
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Avg.
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    LTP
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    P&amp;L
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Chg.
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="p in positions" :key="p.Instrument">
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm font-medium text-gray-900">
                    <input
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      @change="toggleSelection(p)"
                    />
                  </td>
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm font-medium text-gray-900">
                    <span
                      class="
                        inline-flex
                        items-center
                        px-2.5
                        py-0.5
                        rounded-md
                        text-sm
                        font-medium
                        bg-blue-100
                        text-blue-800
                      "
                    >
                      {{ p.Product }}
                    </span>
                  </td>
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm text-gray-500">
                    {{ p.Instrument }}
                  </td>
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm text-gray-500">
                    <span class="text-gray-500" v-if="p.Qty === 0">{{ p.Qty }}</span>
                    <span class="text-blue-500" v-if="p.Qty > 0">{{ p.Qty }}</span>
                    <span class="text-red-500" v-if="p.Qty < 0">{{ p.Qty }}</span>
                  </td>
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm text-gray-500">
                    {{ p.Avg }}
                  </td>
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm text-gray-500">
                    {{ p.LTP }}
                  </td>
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm text-gray-500">
                    <span class="text-gray-500" v-if="p['P&L'] === 0">{{ p['P&L'] }}</span>
                    <span class="text-green-500" v-if="p['P&L'] > 0">{{ p['P&L'] }}</span>
                    <span class="text-red-500" v-if="p['P&L'] < 0">{{ p['P&L'] }}</span>
                  </td>
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-xs">
                    <span class="text-gray-500" v-if="p.Chg === 0">{{ p.Chg }}%</span>
                    <span class="text-green-500" v-if="p.Chg > 0">{{ p.Chg }}%</span>
                    <span class="text-red-500" v-if="p.Chg < 0">{{ p.Chg }}%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Position Spreads -->
      <div class="flex flex-col gap-y-5 w-96">
        <!-- Empty State -->
        <div
          class="w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center"
          v-if="selectedPositions.length < 2"
        >
          <CurrencyRupeeIcon class="mx-auto text-gray-400 w-10 h-10" aria-hidden="true" />
          <span class="mt-3 block text-sm font-medium text-gray-900">
            No Spreads to monitor. Select two or more positions to create a Spread.
          </span>
        </div>

        <!-- Individual Spread -->
        <div v-else>
          <position-spread :positions="selectedPositions" />
        </div>

        <button
          type="button"
          class="
            flex
            justify-center
            px-4
            py-2
            border border-gray-300
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-gray-700
            bg-white
            hover:bg-gray-50
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          View Past Spreads
        </button>
      </div>
    </div>
  </authenticated-frame>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CurrencyRupeeIcon } from '@heroicons/vue/outline';
import AuthenticatedFrame from '@/components/AuthenticatedFrame.vue';
import PositionSpread from '@/components/PositionSpread.vue';
import { Positions } from '@/store/index';

export default defineComponent({
  name: 'Positions',
  components: {
    CurrencyRupeeIcon,
    AuthenticatedFrame,
    PositionSpread,
  },
  data() {
    return {
      positions: this.$store.state.positions.default,
      selectedPositions: [] as Positions[],
    };
  },
  methods: {
    toggleSelection(selected: Positions) {
      const positions = JSON.parse(JSON.stringify(this.selectedPositions));
      positions.push(selected);
      this.selectedPositions = positions;
    },
  },
});
</script>
