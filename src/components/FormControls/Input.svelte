<script lang="ts">
    export let label: string = '';
    export let value: string = '';
    export let type: string = 'text';
    export let name: string = '';
    export let id: string = '';
    export let placeholder: string = '';
</script>

<div class="text-left">
    {#if label}
        <label for="email" class="block text-sm font-medium text-gray-700">{label}</label>
    {/if}
    <div class="mt-1">
        {#if (type = 'text')}
            <input
                type="text"
                name={name}
                id={id}
                class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                bind:value
            />
        {:else if (type = 'password')}
            <input
                type="password"
                name={name}
                id={id}
                class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                bind:value
            />
        {:else if (type = 'email')}
            <input
                type="email"
                name={name}
                id={id}
                class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                bind:value
            />
        {:else if (type = 'number')}
            <input
                type="number"
                name={name}
                id={id}
                class="shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                bind:value
            />
        {/if}
    </div>
</div>
