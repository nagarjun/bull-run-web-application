<template>
  <authenticated-frame title="Positions">
    <div class="flex flex-col mb-5">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                <tr v-for="p in positions" :key="p.product">
                  <td class="px-6 py-4 bg-white whitespace-nowrap text-sm font-medium text-gray-900">
                    <input
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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
    </div>
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
  data() {
    return {
      positions: this.$store.state.positions.default,
    };
  },
});
</script>
