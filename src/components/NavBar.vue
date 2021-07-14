<template>
  <Disclosure as="nav" class="bg-indigo-600" v-slot="{ open }">
    <!-- Desktop -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow" />
          </div>

          <!-- Main nav items -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <template v-for="(route, name) in navItems" :key="route">
                <router-link
                  class="text-white hover:bg-indigo-500 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium"
                  active-class="bg-indigo-700"
                  :to="route"
                  >{{ name }}</router-link
                >
              </template>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="
                    p-1
                    bg-indigo-600
                    rounded-full
                    text-indigo-200
                    hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white
                  "
                >
                  <span class="sr-only">View notifications</span>
                  <UserIcon class="h-6 w-6" aria-hidden="true" />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-48
                    rounded-md
                    shadow-lg
                    py-1
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                >
                  <MenuItem>
                    <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </router-link>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="javascript:void"
                      :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >
                      Log out
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="
              bg-indigo-600
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-indigo-200
              hover:text-white hover:bg-indigo-500 hover:bg-opacity-75
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <template v-for="(route, name) in navItems" :key="route">
          <router-link
            class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium"
            active-class="bg-indigo-700"
            :to="route"
            >{{ name }}</router-link
          >
        </template>
      </div>
      <div class="pt-4 pb-3 border-t border-indigo-700">
        <div class="px-2 space-y-1">
          <router-link
            to="/settings"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
          >
            Settings
          </router-link>
          <a
            href="javascript:void"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75"
            >Log out</a
          >
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { MenuIcon, UserIcon, XIcon } from '@heroicons/vue/outline';

const navItems: { [key: string]: string } = {
  Positions: '/positions',
  Logs: '/logs',
};

export default defineComponent({
  name: 'NavBar',
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    UserIcon,
    XIcon,
  },
  data() {
    return {
      navItems,
      open,
    };
  },
});
</script>
