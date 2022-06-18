<script>
    import { interpolateLab } from 'd3-interpolate';
    import { tweened } from 'svelte/motion';

    const colors = ['rgb(255, 62, 0)', 'rgb(64, 179, 255)', 'rgb(103, 103, 120)'];

    const color = tweened(colors[0], {
        duration: 800,
        interpolate: interpolateLab,
    });
</script>

{#each colors as c}
    <button
        style="background-color: {c}; color: white; border: none;"
        on:click={(e) => color.set(c)}>{c}</button
    >
{/each}

<h1 style="color: {$color}">{$color}</h1>
