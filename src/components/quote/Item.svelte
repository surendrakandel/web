
<script lang="ts">
// @ts-nocheck
import { getCommodityServices } from "$libs/utils/commodities_services";
import { getFreightClass } from "$libs/utils/freight_class";
import { getPackageType } from "$libs/utils/package_type";
import type { Writable } from "svelte/store";
import type { zodQuoteRequestType } from '$src/libs/types/quote';
import { ValidateItem } from "./item";
export let quote_store:Writable<zodQuoteRequestType> 
export let index:number;
function DeleteItem(){
    if($quote_store.commodities.length>1){
        //let removingIndex
        let newCommodities = $quote_store.commodities
        newCommodities.splice(index,1)
        for(let i = 0; i < newCommodities.length; i++){
            newCommodities[i].index = i
        }
        $quote_store.commodities = newCommodities
    }
    
}
</script>

<div class="flex flex-row mb-3  items-center">
    <span class="text-lg font-medium">Item {index + 1}</span>
    <span class="w-10 h-10 rounded-full flex items-center justify-center ml-10" style="background-color: rgba(252, 101, 60, 0.702)">
        <button
            type="button"
            on:click={DeleteItem}
            class="h-full w-full"
            >
            <i class="fa-solid fa-trash-can text-white min-w-[40px]">
            </i>
        </button>
    </span>
</div>  
<div class="flex flex-col w-full gap-1">
    <label class='font-semibold text-lg mt-1' for={"shipment_description_" +index}>Shipment Description</label>
    <input 
        type="text" 
        class="w-full lg:w-[50%]" 
        id={"shipment_description_" +index}
        name="shipment_description"
        bind:value={$quote_store["commodities"][index]["shipment_description"]}
        placeholder="what are you shipping?"
        on:change={ValidateItem}
    />
    {#if $quote_store["commodities"][index]?.shipment_description_error?.valid != true}
    <h3 class="text-error" id={$quote_store["commodities"][index]?.shipment_description_error?.id}>
        {$quote_store["commodities"][index]?.shipment_description_error?.error_message}
    </h3>
    {/if}
</div>  
<div class="flex flex-col lg:flex-row mt-4 gap-2">
    <div class="flex gap-1 w-full lg:w-[50%] justify-between md:justify-start">
        <div class="w-[50%] flex flex-col gap-1">
            <label class="font-semibold text-lg mt-1 w-full" for={"quantity_"+index}>Quantity</label>
            <input 
                class="w-full"
                id={"quantity_"+index} 
                name="quantity" 
                type="number" 
                bind:value={$quote_store["commodities"][index]["quantity"]}
                placeholder="quantity"
                on:change={ValidateItem}
            />
            {#if  $quote_store["commodities"][index]?.quantity_error?.valid != true}
                <h3 class="text-error" id={$quote_store["commodities"][index]?.quantity_error?.id}>
                    {$quote_store["commodities"][index]?.quantity_error?.error_message}
                </h3>
            {/if}
        </div>
        <div class="w-[50%] flex flex-col gap-1">
            <label class="font-semibold text-lg mt-1 w-full" for={"package_type_"+index}>Package Type</label>
            <select
                required
                id={"package_type_"+index}
                name={"package_type_"+index}
                type="text"
                class="w-full"
                bind:value={$quote_store["commodities"][index].frontend_package_type}
                selected
                >
            {#each getPackageType() as package_type}
                <option 
                  selected={package_type.default}
                  default={package_type.default}
                  value={package_type.value}
                  label= {package_type.label}
                >{package_type.label}</option>
            {/each}
            </select>
        </div>
    </div>
    <div class="flex gap-1 w-full lg:w-[50%] justify-between md:justify-start">
        <div class="w-[50%] flex flex-col gap-1">
            <label class="font-semibold text-lg mt-1" for={"weight_"+index}>Weight</label>  
            <input 
                type="number" 
                class="w-full"
                id={"weight_"+index}
                name="weight" 
                bind:value={$quote_store["commodities"][index]["weight"]}
                placeholder="weight"
                on:change={ValidateItem}
            />  
            {#if $quote_store["commodities"][index].weight_error?.valid != true}
                <h3 class={`text-error ${$quote_store["commodities"][index].weight_error?.clas}`} id={$quote_store["commodities"][index].weight_error.id}>
                    {$quote_store["commodities"][index].weight_error.error_message}
                </h3>
            {/if}
        </div>
        <div class="w-[50%] flex flex-col gap-1">
            <label class="font-semibold text-lg mt-1 w-full" for={"weight_uom_"+index}>UOM</label>
            <select
                id={"weight_uom_"+index}
                name={"weight_uom_"+index}
                type="text"
                class="w-full"
                bind:value={$quote_store["commodities"][index].frontend_weight_uom}
            >
                <option 
                    value="LB"
                    label="LB"
                >LB</option>
                <option 
                    value="KG"
                    label="KG"
                >KG</option>
            </select>
        </div>
    </div>
</div>        
<div class="flex flex-col  lg:flex-row gap-1">
    <div class="flex flex-col w-full lg:w-[25%] gap-1">
        <label class="font-semibold text-lg mt-1" for={"length_"+ index}>Length</label>
        <input 
            id={"length_"+index}
            name="length"
            type="number"
            placeholder="length"
            required
            class="lg:min-w-[120px]"
            autocomplete="on"
            bind:value={$quote_store["commodities"][index]["length"]}
            on:change={ValidateItem}
        />
        {#if $quote_store["commodities"][index].length_error.valid != true}
            <h3 class={`text-error ${$quote_store["commodities"][index].length_error.clas}`} id={$quote_store["commodities"][index].length_error.id}>
                {$quote_store["commodities"][index].length_error.error_message}
            </h3>
        {/if}
    </div>
    <div class="flex flex-col w-full lg:w-[25%] gap-1">
        <label class="font-semibold text-lg mt-1" for={"width_"+index}>Width</label>
        <input 
            id={"width_"+index}
            name={"width_"+index}
            type="number"
            placeholder="width"
            required
            class="lg:min-w-[120px]"
            autocomplete="on"
            bind:value={$quote_store["commodities"][index]["width"]}
            on:change={ValidateItem}
        />
        {#if $quote_store["commodities"][index]?.width_error.valid != true}
            <h3 class={`text-error ${$quote_store["commodities"][index]?.width_error.clas}`} id={$quote_store["commodities"][index]?.width_error.id}>
                {$quote_store["commodities"][index]?.width_error.error_message}</h3>
        {/if}
    </div>
    <div class="flex flex-col w-full lg:w-[25%] gap-1">
        <label class="font-semibold text-lg mt-1" for={"height_"+index}>Height</label>
        <input 
            id={"height_"+index}
            name={"height_"+index}
            type="number"
            placeholder="height"
            required
            class="lg:min-w-[120px]"
            autocomplete="on"
            bind:value={$quote_store["commodities"][index]["height"]}
            on:change={ValidateItem}
        />
        {#if $quote_store["commodities"][index]?.height_error.valid != true}
            <h3 class={`text-error ${$quote_store["commodities"][index]?.height_error.clas}`} id={$quote_store["commodities"][index]?.height_error.id}>
                {$quote_store["commodities"][index]?.height_error.error_message}
            </h3>
        {/if}
    </div>
    <div class="hidden lg:flex flex-col w-full lg:w-[25%] gap-1">
        <label class="font-semibold text-lg mt-1" for={"dimension_uom_"+index}>UOM</label>
        <select
            id={"dimension_uom_"+index}
            name="dimension_uom"
            class="w-full select-accent"
            bind:value={$quote_store["commodities"][index].frontend_dimension_uom}
        >
            <option
                value="INCH"
                label="INCH"
            >INCH</option>
            <option 
                value="CM"
                label="CM"
            >CM</option>
        </select>
    </div>
</div>
<div class="flex flex-col lg:hidden w-full gap-1">
    <label class="font-semibold text-lg mt-2" for={"dimension_uom_"+index}>UOM</label>
    <select
        id={"dimension_uom_"+index}
        name="dimension_uom"
        class="min-w-[150px] w-full"
        bind:value={$quote_store["commodities"][index].frontend_dimension_uom}>
        <option
            value=0
            label="inch"
            
        >inch</option>
        <option 
            value=1
            label="cms"
        >cms</option>
    </select>
</div>
<div class="flex flex-col w-full gap-1">
    <label class="font-semibold text-lg mt-2" for={"freight_class_"+index}>Freight Class</label>
    <select 
        id={"freight_class_"+index}
        name="freight_class"
        class="w-full select-wrapper lg:w-[50%]"
        type="text"
        bind:value={$quote_store["commodities"][index].frontend_freight_class}
    >
        {#each getFreightClass() as freight}
            <option 
              selected= {freight.default}
              disabled={freight.default}
              value={freight.value}
              label= {freight.label}
            >{freight.label}</option>
        {/each}
    </select>
</div>
<h3 class="font-semibold text-lg my-4">Additional Services</h3>
<div class="flex flex-col sm:flex-row sm:flex-wrap gap-2">
    {#each getCommodityServices() as service}
        <div class="itemWrapper">
        <label for={service.id}  class="flex w-full items-center">
            <input
            class="checkbox  checkbox-accent"
            id={service.id}
            type="checkbox"
            name={service.value}
            bind:checked={$quote_store["commodities"][index][service.id]}
            />
            <span class="ml-3 text-lg font-semibold">{service.label}</span>
        </label>
        </div>
    {/each}
</div>
<div class="flex flex-col max-w-[900px] my-4">
    <label class="font-semibold text-md" for={"shipment_instructions_" + index}>Shipment Instructions</label>
    <textarea 
        type="text" 
        class="mt-3 h-[100px] p-[15px]" 
        id={"shipment_description_"+ index} 
        bind:value={$quote_store["commodities"][index]["commodity_instructions"]}
        placeholder="shipment instructions"
    />
</div> 