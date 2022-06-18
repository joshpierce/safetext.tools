<script lang="ts">
    import Fa from 'svelte-fa';
    import { faRecycle, faRightLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
    import Clipboard from '$components/Clipboard/Clipboard.svelte';
    import Select from '$components/FormControls/Select.svelte';
    import { separators } from '$data/separators';

    let separatorItems = separators.map((separator) => ({
        label: separator.name,
        value: separator.id,
    }));
    let fromSeparator = separatorItems.find((item) => item.value == 'newLine');
    let toSeparator = separatorItems.find((item) => item.value == 'comma');

    $: if (fromSeparator && toSeparator) {
        if (!swapped) {
            processText();
        } else {
            swapped = false;
        }
    }

    let text1: string = '';
    let text2: string = '';
    let swapped: boolean = false;
    let processing: boolean = false;

    let processingTimeout: any;
    let processingResponseTimeout: any;

    async function processText() {
        processing = true;
        clearTimeout(processingResponseTimeout);
        clearTimeout(processingTimeout);
        processingTimeout = setTimeout(() => {
            let fromSeparatorData = separators.find(
                (separator) => separator.id == fromSeparator?.value,
            )?.data;
            let to = separators.find((separator) => separator.id == toSeparator?.value);
            let toSeparatorData = to?.stringData || (to?.data as string);

            //todo: we shouldn't run into this case but we might want to have an alert if no separator is selected.
            if (fromSeparatorData && toSeparatorData) {
                let items = text1.split(fromSeparatorData);
                text2 = items.join(toSeparatorData);
            }
        }, 500);

        processingResponseTimeout = setTimeout(() => {
            console.log('finished processing');
            processing = false;
        }, 1000);
    }

    function swapLists() {
        swapped = true;
        let temp = text1;
        text1 = text2;
        text2 = temp;
        let tempSep = fromSeparator;
        fromSeparator = toSeparator;
        toSeparator = tempSep;
    }
</script>

<div class="flex flex-row h-full items-stretch">
    <div class="flex-grow relative flex flex-row items-stretch ">
        <textarea
            type="text"
            placeholder="Search"
            bind:value={text1}
            on:input={processText}
            class="flex-grow border-gray-300 focus:border-gray-300 ring-0 focus:ring-0 pr-16"
            data-gramm="false"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
        />
        <Clipboard bind:textValue={text1} bind:processing />
    </div>
    <div class="basis-1/4 text-center flex flex-col py-4 px-4">
        <button
            on:click={swapLists}
            class="bg-[#7636B0] rounded-md grid place-items-center p-2 text-white"
        >
            <div>
                <Fa icon={faRightLeft} fw class="text-white inline mr-2" />
                Swap Lists
            </div>
        </button>
        <div class="flex mt-4 space-x-4">
            <div class="basis-1/2">
                <Select
                    label="From Separator"
                    items={separatorItems}
                    bind:currentItem={fromSeparator}
                />
            </div>
            <div class="basis-1/2">
                <Select
                    label="To Separator"
                    items={separatorItems}
                    bind:currentItem={toSeparator}
                />
            </div>
        </div>

        <!-- Add Step Button to be turned back on when we add additional processing steps -->
        <!-- <div class="relative mt-4">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center">
                <button
                    type="button"
                    class="inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                >
                    <Fa icon={faPlus} fw class="mr-2" />
                    <span>Add Step</span>
                </button>
            </div>
        </div> -->
    </div>
    <div class="flex-grow relative flex flex-row items-stretch">
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
