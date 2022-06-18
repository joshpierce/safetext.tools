<script lang="ts">
    import MobileHeader from '$components/Navbar/MobileHeader.svelte';
    import Navbar from '$components/Navbar/Navbar.svelte';
    import '../app.css';

    let mobileNavIsOpen = false;
</script>

<div class="flex flex-col h-full">
    <Navbar bind:mobileNavIsOpen />

    <div class="lg:pl-64 flex flex-col flex-grow max-h-full">
        <MobileHeader bind:mobileNavIsOpen />
        <slot />
    </div>
</div>

<!-- <div id="outer" class="flex flex-col min-h-screen">
    <Navbar bind:mobileNavIsOpen />

     Main column
    <div id="main-column" class="lg:pl-64 flex flex-col flex-grow">
        <MobileHeader bind:mobileNavIsOpen />
        <main id="slot-holder" class="flex flex-col flex-grow"><slot /></main>
    </div>
</div> -->
