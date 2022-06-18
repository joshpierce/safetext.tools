<script lang="ts">
    import Fa from 'svelte-fa';
    import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
    import Clipboard from '$components/Clipboard/Clipboard.svelte';
    import { text } from 'svelte/internal';

    let text1: string = '';
    let text2: string = '';
    let swapped: boolean = false;

    $: text2 = (() => {
        console.log('reacting!');
        console.log('swapping: ', swapped);
        const ret = !swapped && text1 ? text1 + 'test' : text2;
        swapped = false;
        return ret;
    })();

    function swapLists() {
        console.log('Setting swapping to true');
        swapped = true;
        let temp = text1;
        console.log('changing both values');
        text1 = text2;
        text2 = temp;
        console.log('changed both values');
        console.log('Setting swapping to false');
    }
</script>

<div class="flex flex-row h-full">
    <textarea
        type="text"
        placeholder="Search"
        bind:value={text1}
        class="basis-2/5 h-full resize-none ring-0 focus:ring-0 border-r-[1px] border-gray-300"
        data-gramm="false"
    />
    <div class="basis-1/5 text-center flex flex-col py-2 px-4">
        <button
            on:click={swapLists}
            class="bg-[#7636B0] rounded-md grid place-items-center p-2 text-white"
        >
            <div>
                <Fa icon={faRightLeft} fw class="text-white inline mr-2" />
                Swap Lists
            </div>
        </button>
        <div />
    </div>
    <textarea
        type="text"
        placeholder="Search"
        bind:value={text2}
        class="basis-2/5 h-full resize-none ring-0 focus:ring-0 border-l-[1px] border-gray-300 relative"
        data-gramm="false"
        readonly
    />
    <Clipboard bind:textValue={text2} />
</div>
