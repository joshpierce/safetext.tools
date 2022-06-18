<script lang="ts">
    import { faTableColumns } from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa';
    import MobileNavbar from './MobileNavbar.svelte';

    export let mobileNavIsOpen = false;

    const menuItems = [
        {
            name: 'List Tool',
            url: '/list-tool',
            icon: faTableColumns,
        },
    ];
</script>

<MobileNavbar bind:mobileNavIsOpen menuItems={menuItems} />

<!-- Static sidebar for desktop -->
<div class="hidden lg:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex-1 flex flex-col min-h-0 bg-[#2F3137]">
        <div
            class="grid place-items-center h-16 flex-shrink-0 px-4 bg-[#202225] text-white font-semibold text-2xl"
        >
            <a href="/"> safetext.tools </a>
        </div>
        <div class="flex-1 flex flex-col overflow-y-auto">
            <nav class="flex-1 px-2 py-4 space-y-1">
                {#each menuItems as item, itemIdx}
                    <a
                        href={item.url}
                        class="bg-[#42464E] text-white group flex items-center px-2 py-2 text-sm font-base rounded-md"
                    >
                        <div class="bg-[#7636B0] grid place-items-center rounded-full h-8 w-8 mr-3">
                            <Fa icon={item.icon} fw class="text-white" />
                        </div>
                        {item.name}
                    </a>
                {/each}
            </nav>
        </div>
    </div>
</div>
