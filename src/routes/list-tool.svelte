<script lang="ts">
    import Fa from 'svelte-fa';
    import { faRightLeft } from '@fortawesome/free-solid-svg-icons';

    let text1: string = '';
    let swapping: boolean = false;

    $: text2 = (() => {
        console.log('reacting!');
        console.log('swapping: ', swapping);
        return !swapping && text1 ? text1 + 'test' : '';
    })();

    function swapLists() {
        console.log('Setting swapping to true');
        swapping = true;
        let temp = text1;
        console.log('changing both values');
        text1 = text2;
        text2 = temp;
        console.log('changed both values');
        console.log('Setting swapping to false');
        setTimeout(() => {
            swapping = false;
        }, 1000);
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
        class="basis-2/5 h-full resize-none ring-0 focus:ring-0 border-l-[1px] border-gray-300"
        data-gramm="false"
        readonly
    />
</div>
