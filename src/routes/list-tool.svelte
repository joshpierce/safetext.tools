<script lang="ts">
    import Fa from 'svelte-fa';
    import { faRecycle, faRightLeft } from '@fortawesome/free-solid-svg-icons';
    import Clipboard from '$components/Clipboard/Clipboard.svelte';
    import { text } from 'svelte/internal';

    let text1: string = '';
    let text2: string = '';
    let processing: boolean = false;

    let processingTimeout: any;
    let processingResponseTimeout: any;

    async function processText() {
        clearTimeout(processingTimeout);
        processing = true;
        processingTimeout = setTimeout(() => {
            clearTimeout(processingResponseTimeout);
            let items = text1.split(/\n/g);
            text2 = items.join(',');
            processingResponseTimeout = setTimeout(() => {
                processing = false;
            }, 500);
        }, 500);
    }

    $: console.log('processing:', processing);

    function swapLists() {
        let temp = text1;
        text1 = text2;
        text2 = temp;
    }
</script>

<div class="flex flex-row h-full items-stretch">
    <div class="basis-2/5 relative flex flex-row items-stretch ">
        <textarea
            type="text"
            placeholder="Search"
            bind:value={text1}
            class="flex-grow border-gray-300 focus:border-gray-300 ring-0 focus:ring-0 pr-16"
            data-gramm="false"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
        />
        <Clipboard bind:textValue={text1} bind:processing />
    </div>
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
        <button
            on:click={processText}
            class="bg-[#0ACD40] rounded-md grid place-items-center p-2 mt-2 text-white"
        >
            <div>
                <Fa icon={faRecycle} fw class="text-white inline mr-2" />
                Process Text
            </div>
        </button>
    </div>
    <div class="basis-2/5 relative flex flex-row items-stretch">
        <textarea
            type="text"
            placeholder="Search"
            bind:value={text2}
            class="flex-grow border-gray-300 focus:border-gray-300 ring-0 focus:ring-0 pr-16"
            data-gramm="false"
            readonly
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
        />
        <Clipboard bind:textValue={text2} bind:processing />
    </div>
</div>
