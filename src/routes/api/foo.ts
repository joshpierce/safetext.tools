// Leaving this hanging around as an example of a svelte endpoint
export async function get() {
    const item = 'bar';

    return {
        body: { item },
    };
}
