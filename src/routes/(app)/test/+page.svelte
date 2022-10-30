<script>
    import Whitelogo from "$components/widgets/Whitelogo.svelte";
    import Toggler from "$components/core/navbar/NavToggler/index.svelte"
import { fade } from 'svelte/transition';
    $: showingMenu = false // this is a reactive statement
    function toggleMenu() {
        console.log("menu toggleing")
        showingMenu = !showingMenu
    }
</script>


<div class="relative px-4 pt-6 sm:px-6 lg:px-8">
    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global">
        <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div class="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                    <span class="sr-only">First Shipper</span>
                    <Whitelogo/>
                </a>
            </div>
        </div>
        <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            <a href="/track" class="font-medium text-gray-500 hover:text-gray-900">Track</a>
            <a href="/admin/quote" class="font-medium text-gray-500 hover:text-gray-900">Get Quote</a>
            <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">Log
                in</a>
        </div>
    </nav>
</div>
<div class="absolute inset-x-0 top-0 z-10 origin-top-right transform py-4 px-2     md:hidden">
    <div
        class="overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5 py-1">
        <div class="flex items-center justify-between px-5">
            <div>
                <Whitelogo/>
            </div>
            <div class="-mr-2">
                <!-- {#if showingMenu}
                    <button type="button"
                        class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        on:click={toggleMenu}
                    >
                        <span class="sr-only">Close main menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"         fill="blue"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12">

                            </path>
                        </svg>
                    </button>
                {:else}
                <button type="button"
                    class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    on:click={toggleMenu}
                >
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
                {/if} -->
                <Toggler/>
            </div>
        </div>

    </div>
    {#if showingMenu}
        <div class="flex flex-col" transition:fade>
            <div class="space-y-1 px-2 pt-4 pb-3  -mt-2 rounded-lg navigation">
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Product</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Features</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Marketplace</a>
                <a href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Company</a>
                <a href="#"
                    class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100 login">Log
                    in
                </a>
            </div>
        
        </div>
    {/if}
</div>
<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80"
        alt="">
</div>
<style>
    .navigation{
        background-image: linear-gradient(260.3deg, #1B2752 -7.47%, #111126 134.71%);
    }
    .navigation a{
        color: white;
    }
    .navigation a.login{
        color: blue;
    }
</style>