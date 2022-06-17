## Reduced Motion

We're using information from Geoff Rich's blog about how to implement reduced motion for accessibility. We have a reducedmotion store available in `$lib/accessibility/reducedMotion`. Essentially we're providing a fallback animation when the user has turned off animaitons on their system.

-   [A Svelte Store for prefers-reduced-motion](https://geoffrich.net/posts/svelte-prefers-reduced-motion-store/)
-   [Accessible Svelte Transitions](https://geoffrich.net/posts/accessible-svelte-transitions/) - This particular article has good links about reduced motion for accessibility.

### Custom Fly Example

The following example will use fade instead of fly when the user prefers reduced motion.

```typescript
<script lang="ts">
    import { reducedMotion, getCustomFly } from '$lib/accessibility/reducedMotion';
    import { fly, fade } from 'svelte/transition';
    import { quadInOut, linear } from 'svelte/easing';

    const customFly = getCustomFly(300);
    $: rmFly = $reducedMotion ? customFly : fly;
</script>

<div
    in:rmFly={{
        delay: 0,
        duration: 300,
        x: -400,
        easing: quadInOut,
        opacity: 1
    }}
    out:rmFly={{
        delay: 0,
        duration: 300,
        x: -400,
        easing: quadInOut,
        opacity: 1
    }}>
    Reduced Motion Fly Animation
</div>
```

### Custom Scale Example

The following example will use fade instead of scale when the user prefers reduced motion.

```typescript
<script lang="ts">
    import { reducedMotion, getCustomScale } from '$lib/accessibility/reducedMotion';
    import { scale, fade } from 'svelte/transition';
    import { quadInOut, linear } from 'svelte/easing';

    const customFly = getCustomScale(300);
    $: rmScale = $reducedMotion ? customFly : scale;
</script>

<div
    in:rmScale={{
            delay: 0,
            duration: 100,
            easing: quadOut,
            opacity: 0,
            start: 0.95
        }}
    out:rmScale={{
        delay: 0,
        duration: 75,
        easing: quadIn,
        opacity: 0,
        start: 0.95
    }}>
    Reduced Motion Scale Animation
</div>
```
