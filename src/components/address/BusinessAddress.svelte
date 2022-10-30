<script lang="ts">
import { basic_provider } from '$src/stores/basic_provider';
import Place from "$components/places/AddressInput.svelte";
import { addBusinessAddress } from "$src/api/business/add_business_address";
import type { address } from "$src/gen/address";
import { basic_store_helper, business_address_store, business_store } from "$stores/basic_provider";
import { onDestroy } from "svelte";
import { onMount } from "svelte";
import {Icon, Pencil} from "svelte-hero-icons";
	import { getBasicInfo } from '$src/api/business/get_basic_info';
let updatingBusinessAddress:boolean = false
let mounted = false 
onMount(()=>{
    mounted = true
})
function editBusinessAddress(){
    updatingBusinessAddress = true  
    setTimeout(()=>{
        updatingBusinessAddress = false 
    }, 30000)
}
onDestroy(()=>{
    //unsub()
    console.log("component is destoryed")
})
export function addAddress(add: address){
    // add address will be handled by place component
    addBusinessAddress(add).then( (res)=>{
        getBasicInfo()
        updatingBusinessAddress = false 
    }).catch((error)=>{
        console.log("promise all error", error)
    })
    
}
</script>
{#if mounted}
<div class="flex flex-col lg:flex-row mt-8 gap-4 cardWrapper py-5">
    <div class="flex gap-3 lg:w-1/2">
        <div class="self-start mt-2">
            <img src="/images/icons/business.svg"  alt="user" width="35px" />
        </div>
        <div class="flex flex-col gap-2 w-full">
                {#if $business_address_store?.address == undefined &&  updatingBusinessAddress == false && $business_store.needs_address_update == true}
                <label class="label text-lg font-semibold w-full" for="add_business_address">Business Address has not been set.</label>
                <Place Id={"add_business_address"} Klass={"w-full lg:max-w-[500px]"} placeholder={"add business address"} functionToCallAfter={addAddress}/>
                {:else if updatingBusinessAddress == true}
                <label class="label text-lg font-semibold w-full" for="add_business_address">Update Business Address</label>
                <Place Id={"update_business_address"} Klass={"w-full lg:max-w-[500px]"} placeholder={"add business address"} functionToCallAfter={addAddress}/>
                {:else} 
                <div class="flex flex-col  gap-2">
                    <h3 class="text-xl font-semibold  intro_text tracking-wider">
                        {$business_store.business_name.toUpperCase() || ""}
                    </h3>
                    <h3>{$basic_provider?.business_address?.address?.address_line_1 || ""}</h3>
                    <h3>{$business_address_store?.address?.city || ""}</h3>
                    <h3>{$business_address_store?.address?.state || ""}, {$business_address_store?.address?.zip_code || ""}</h3>
                </div>
                <!-- <button [400px]class="btn mt-4 max-w-" title="edit default pickup location" style="background-color: #0C1EA3;" on:click={editBusinessAddress}>
                    <i class="fa-solid fa-location-pin text-white"></i>
                    <h3 class="block text-white pl-3">Update Business Address</h3>
                </button> -->
                <button class="btn max-w-[70px] mt-3" title="edit default pickup location" style="background-color: #5CB971; padding:0;" on:click={editBusinessAddress}>
                    <Icon src={Pencil} class="h-6"/>
                </button>
                {/if}
        </div>
    </div>
    <div class="flex md:min-w-[300px] gap-3 mt-2 w-1/2">
        <div class="flex flex-col gap-2">
            <div class="flex">
                <img src="/images/icons/phone_black.svg"  alt="user" width="25px" height="25px"/>
            </div>
            <div class="flex">
                <img src="/images/icons/binding.svg"  alt="user" width="25px" height="25px"/>
            </div>
        </div>
        <div class="flex flex-col gap-2 h-[50px] justify-between">
            <a id="phone" class="font-semibold tracking-wider" href="tel:{$business_store?.phone_number}">{$business_store?.phone_number}</a>
            <h3>Liable Party: {$business_store.business_id}</h3>
        </div>
    </div>
</div>

{/if}