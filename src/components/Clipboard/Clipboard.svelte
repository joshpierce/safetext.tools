<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
    import Clipboard from 'svelte-clipboard';
    import { reducedMotion, getCustomScale } from '$lib/accessibility/reducedMotion';
    import { scale, fade } from 'svelte/transition';
    import { quadInOut, linear } from 'svelte/easing';
    import { interpolateLab } from 'd3-interpolate';
    import { tweened } from 'svelte/motion';

    export let textValue: string;
    let isSuccess: boolean = false;

    const customScale = getCustomScale(300);
    $: rmScale = $reducedMotion ? customScale : scale;

    const color = tweened('#7636B0', {
        duration: 300,
        interpolate: interpolateLab,
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
        }, 2500);
    }}
>
    <div
        on:click={copy}
        class="absolute top-5 right-5 h-10 w-10 rounded-full"
        style="background-color: {$color}"
    >
        {#if isSuccess}
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                in:scale={{ duration: 300, easing: quadInOut }}
                out:scale={{ duration: 300, easing: quadInOut }}
            >
                <Fa icon={faCheck} fw class="text-white" />
            </div>
        {/if}
        {#if !isSuccess}
            <div
                class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                in:scale={{ duration: 300, easing: quadInOut }}
                out:scale={{ duration: 300, easing: quadInOut }}
            >
                <Fa icon={faCopy} fw class="text-white" />
            </div>
        {/if}
    </div>
</Clipboard>
