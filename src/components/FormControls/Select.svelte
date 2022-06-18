<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCheck, faChevronDown, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
    import { fade } from 'svelte/transition';
    import { quadIn } from 'svelte/easing';
    import { clickOutside } from '$lib/clickOutside';
    import { type ISelectItem } from '$components/FormControls/Select';

    export let label: string = '';
    export let items: ISelectItem[] = [];
    export let currentItem: ISelectItem | null = null;
    export let placeholder: string = '';
    export let selectedIcon: IconDefinition = faCheck;
    let isSelectOpen: boolean = false;

    function closeMenu() {
        isSelectOpen = false;
    }
</script>

<div class="text-left">
    <label id="listbox-label" for="dropdown" class="block text-sm font-medium text-gray-700"
        >{label}</label
    >
    <div class="mt-1 relative" use:clickOutside on:click_outside={closeMenu}>
        <button
            name="dropdown"
            type="button"
            class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            on:click={() => (isSelectOpen = !isSelectOpen)}
        >
            {#if currentItem}
                <span class="block truncate">{currentItem?.label}</span>
            {:else if !currentItem && placeholder}
                <span class="block truncate">
                    {placeholder}
                </span>
            {:else}
                <span class="block truncate">Select...</span>
            {/if}
            <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Fa icon={faChevronDown} fw class="text-gray-500" />
            </span>
        </button>

        {#if isSelectOpen}
            <ul
                out:fade={{
                    duration: 100,
                    easing: quadIn,
                }}
                class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                tabindex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
            >
                {#each items as item}
                    <li
                        class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-50"
                        class:bg-gray-100={item === currentItem}
                        id="listbox-option-0"
                        role="option"
                        on:click={() => {
                            currentItem = item;
                            closeMenu();
                        }}
                    >
                        <span class="font-normal block truncate" class:font-semibold={1 == 1}>
                            {item.label}
                        </span>

                        {#if item.value == currentItem?.value}
                            <span
                                class="text-[#982ef7] absolute inset-y-0 right-0 flex items-center pr-4"
                            >
                                <Fa icon={selectedIcon} fw />
                            </span>
                        {/if}
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</div>
