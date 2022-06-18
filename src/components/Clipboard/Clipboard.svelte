<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCopy, faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
    import Clipboard from 'svelte-clipboard';
    import { reducedMotion, getCustomScale } from '$lib/accessibility/reducedMotion';
    import { scale, fade } from 'svelte/transition';
    import { quadInOut, linear } from 'svelte/easing';
    import { interpolateLab } from 'd3-interpolate';
    import { tweened } from 'svelte/motion';

    export let textValue: string;
    export let processing: boolean;
    let isSuccess: boolean = false;

    const customScale = getCustomScale(300);
    $: rmScale = $reducedMotion ? customScale : scale;
    $: if (processing) {
        color.set('#3963FF');
    } else if (!processing) {
        color.set('#7636B0');
    }

    const color = tweened('#7636B0', {
        duration: 300,
        interpolate: interpolateLab,
        easing: quadInOut,
    });
</script>

<Clipboard
    text={textValue}
    let:copy
    on:copy={() => {
        isSuccess = true;
        color.set('#0ACD40');
        setTimeout(() => {
            color.set('#7636B0');
            isSuccess = false;
        }, 1500);
    }}
>
    <button
        on:click={copy}
        disabled={processing}
        class="absolute top-5 right-5 h-10 w-10 rounded-full"
        style="background-color: {$color}"
    >
        {#if processing}
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                in:rmScale={{ duration: 300, easing: quadInOut }}
                out:rmScale={{ duration: 300, easing: quadInOut }}
            >
                <Fa icon={faSpinner} fw class="text-white" spin />
            </div>
        {:else if !isSuccess}
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                in:rmScale={{ duration: 300, easing: quadInOut }}
                out:rmScale={{ duration: 300, easing: quadInOut }}
            >
                <Fa icon={faCopy} fw class="text-white" />
            </div>
        {:else if isSuccess}
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                in:rmScale={{ duration: 300, easing: quadInOut }}
                out:rmScale={{ duration: 300, easing: quadInOut }}
            >
                <Fa icon={faCheck} fw class="text-white" />
            </div>
        {/if}
    </button>
</Clipboard>
