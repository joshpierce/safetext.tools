<script lang="ts">
    import { fly, fade, slide, scale } from 'svelte/transition';
    import { quadIn, quadOut, quadInOut, linear } from 'svelte/easing';
    import { fadeScale } from '$lib/animations/svelte-fade-scale';
    import { clickOutside } from '$lib/clickOutside';

    export let mobileNavIsOpen: boolean;
    let mobileUserMenuIsOpen: boolean;

    function toggleMobileNav() {
        mobileNavIsOpen = !mobileNavIsOpen;
    }
    function toggleMobileUserMenu() {
        mobileUserMenuIsOpen = !mobileUserMenuIsOpen;
    }
</script>

<!-- Search header -->
<div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
    <!-- Sidebar toggle, controls the 'sidebarOpen' sidebar state. -->
    <button
        type="button"
        class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
        on:click={toggleMobileNav}
    >
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: outline/menu-alt-1 -->
        <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
            />
        </svg>
    </button>
    <div class="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
        <div class="flex-1 flex items-center" />
        <div class="flex items-center" />
    </div>
</div>
