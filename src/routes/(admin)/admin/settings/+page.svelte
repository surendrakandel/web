<script lang="ts">
import { onMount } from "svelte";
import DefaultPickupAddress from "$components/address/DefaultPickupAddress.svelte";
import User from "$components/user/User.svelte";
import BusinessAddress from "$components/address/BusinessAddress.svelte";
import AddUser from "$components/user/AddUser.svelte"
import { basic_provider } from "$src/stores/basic_provider";
import { getBasicInfo } from "$src/api/business/get_basic_info";
let mounted = false 
onMount(async ()=>{
    if($basic_provider && $basic_provider.business){
        getBasicInfo()
    }
    mounted = true 
})
</script>
{#if mounted}
<div class="my-10">
    <h3 class="text-xl px-2 font-bol">Customer</h3>
    <BusinessAddress/>
    <h3 class="text-lg mt-5 font-bold">Default Pickup Address</h3>
    <DefaultPickupAddress/>
    <h3 class="my-3 px-2 font-bold text-xl">Users</h3>
    <User/>
    <h3 class="text-lg mt-10 mx-2 font-bold">Add New User</h3>
    <AddUser/>
</div>
{/if}
