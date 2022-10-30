<script lang="ts">
import { goto } from '$app/navigation';
import { toggle_state_provider } from '$src/stores/nav_state_provider';
import { quote_store } from '$src/routes/(admin)/admin/quote/quote_store';
import { toogleQuoteEditMode } from '$src/libs/utils/edit_mode';
import { fade } from 'svelte/transition';
function updateDeliveryZipCode (){
    if($quote_store?.delivery.address.zip_code.length == 5){
        $quote_store.delivery.delivery_address_zip_code_error.valid = true
    }else{
        $quote_store.delivery.delivery_address_zip_code_error.valid = false
    }
}
type nav_link = {
    href: string;
    title: string;
    text: string
}
let nav_items:nav_link[] = [
    {
        href: "/track",
        text: "Track A Shipment",
        title: "track your shipments here"
    },
    {
        href: "/admin/quote",
        text: "Get New Quote",
        title: "get shipping quote"
    },
    {
        href: "/login",
        text: "Log in",
        title: "login to first shipper to get shipping quote"
    },
]
function GetQuote(){
    // send to login and login will handle rest
    if($quote_store){
        $quote_store.shipment_details.edit_mode = true  
        goto('/login')
    }
    toogleQuoteEditMode()
    goto("/admin/quote")  
}

</script>
{#if $toggle_state_provider == true}
<ul class="md:hidden fixed  w-full min-h-[100vh] flex flex-col items-center background text-center mt-[70px]">
    <div transition:fade class="w-full flex flex-col pt-8" >
        {#each nav_items as nav, index}
            <li class:mt-3={index==0}><a href={nav.href} title={nav.title} class="text-white w-full text-md font-semibold">{nav.text}</a></li>
        {/each}
        <div class="flex flex-col  gap-3 items-center  pt-12 w-full px-12">
            <div class="flex flex-col w-full justify-center items-center pb-2">
                <label class="label self-start text-sm" for="shipper_zip_code">Pickup Zip Code</label>
                <input id="shipper_zip_code" 
                class="w-full md:max-w-[400px] text-md" 
                placeholder="pickup zip code"  
                bind:value={$quote_store.pickup.address.zip_code}
                />
                {#if  $quote_store?.pickup?.pickup_address_zip_code_error?.valid == false}
                    <h3 class={`text-error self-start pt-3 ${$quote_store?.pickup?.pickup_address_zip_code_error?.clas}`} id={$quote_store?.pickup?.pickup_address_zip_code_error?.id}>{$quote_store?.pickup?.pickup_address_zip_code_error?.error_message}</h3>
                {/if}
            </div>
            <div class="flex flex-col w-full justify-center items-center">
                <label class="label self-start text-sm" for="receiver_zipcode">Delivery Zipcode</label>
                <input id="receiver_zipcode" class="w-full text-md placeholder:font-extralight" placeholder="delivery zip code" bind:value={$quote_store.delivery.address.zip_code} on:change={updateDeliveryZipCode} />
                {#if  $quote_store?.delivery?.delivery_address_zip_code_error?.valid == false}
                    <h3 class={`text-error self-start pt-3 ${$quote_store?.delivery?.delivery_address_zip_code_error?.clas}`} id={$quote_store?.delivery?.delivery_address_zip_code_error?.id}>{$quote_store?.delivery?.delivery_address_zip_code_error?.error_message}</h3>
                {/if}
            </div>
            <button type="submit" id="get_quote" class="btn-primary flex flex-col w-[100%] p-[16px] rounded-md text-white font-space justify-center items-center mt-10 mb-4" style="background-color: #5CB971;color:#fff;" on:click={GetQuote}>GET RATES</button>
        </div>
    </div>
</ul>
{/if}

<style>
    ul li a, a{
        align-items: center;
        padding: 5px;
        width: 100%;
        cursor: pointer;
        font-family: "Space Grotesk";
        width: 95%;
    }
    .background{
        background-image: linear-gradient(260.3deg, #1B2752 -7.47%, #111126 134.71%);
        color: #ffffff;
    }
    ul{
        height:  calc(100vh + 1px);
    }
    ul li{
        padding: 6px 0;
        width: 95%;
        border-radius: 10px ;
    }
    ul li:hover{
        background-color: #5CB971;
        color: "#ffffff"
    }
</style>