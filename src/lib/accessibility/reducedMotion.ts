import { readable } from 'svelte/store';
import { fade } from 'svelte/transition';
import { quadInOut } from 'svelte/easing';
import { browser } from '$app/env';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

const getInitialMotionPreference = () =>
    browser ? window.matchMedia(reducedMotionQuery).matches : false;

export const reducedMotion = readable(getInitialMotionPreference(), (set) => {
    // Only run when in the browser because window isn't available in SSR
    if (browser) {
        const updateMotionPreference = (event) => {
            set(event.matches);
        };

        const mediaQueryList = window.matchMedia(reducedMotionQuery);
        mediaQueryList.addEventListener('change', updateMotionPreference);

        return () => {
            mediaQueryList.removeEventListener('change', updateMotionPreference);
        };
    } else {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return () => {};
    }
});

export const getCustomFly = (duration) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (node, params) => fade(node, { duration, easing: quadInOut });
};

export const getCustomScale = (duration) => {
    return (node, params) => fade(node, { duration, easing: quadInOut });
};
