<script lang="ts">
    import { reducedMotion, getCustomFly } from '$lib/accessibility/reducedMotion';
    import { fly, fade } from 'svelte/transition';
    import { quadInOut, linear } from 'svelte/easing';
    import Fa from 'svelte-fa';

    export let mobileNavIsOpen: boolean;
    export let menuItems: any[];

    function closeMobileNav() {
        console.log('wrong wrong wrong');
        mobileNavIsOpen = false;
    }

    const customFly = getCustomFly(300);
    $: rmFly = $reducedMotion ? customFly : fly;
</script>

{#if mobileNavIsOpen}
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div class="fixed inset-0 flex z-50 lg:hidden" role="dialog" aria-modal="true">
        <div
            in:fade={{
                delay: 0,
                duration: 300,
                easing: linear,
            }}
            out:fade={{
                delay: 0,
                duration: 300,
                easing: linear,
            }}
            class="fixed inset-0 bg-gray-600 bg-opacity-75"
        />

        <div
            in:rmFly={{
                delay: 0,
                duration: 300,
                x: -400,
                easing: quadInOut,
                opacity: 1,
            }}
            out:rmFly={{
                delay: 0,
                duration: 300,
                x: -400,
                easing: quadInOut,
                opacity: 1,
            }}
            class="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-[#2F3137]"
        >
            <div
                in:fade={{
                    delay: 0,
                    duration: 300,
                    easing: quadInOut,
                }}
                out:fade={{
                    delay: 0,
                    duration: 300,
                    easing: quadInOut,
                }}
                class="absolute top-0 right-0 -mr-12 pt-2"
            >
                <button
                    type="button"
                    class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    on:click={closeMobileNav}
                >
                    <span class="sr-only">Close sidebar</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <div
                class="flex-shrink-0 flex items-center px-4 h-16 text-white font-base text-2xl bg-[#202225]"
            >
                <a href="/"> safetext.tools </a>
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2 space-y-1">
                    {#each menuItems as item, itemIdx}
                        <a
                            href={item.url}
                            class="bg-[#42464E] text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        >
                            <div
                                class="bg-red-500 grid place-items-center rounded-full h-8 w-8 mr-3"
                            >
                                <Fa icon={item.icon} />
                            </div>
                            {item.name}
                        </a>
                    {/each}
                </nav>
            </div>
        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
    </div>
{/if}
