<script lang="ts">
// @ts-nocheck
import { getFreightClass } from "$libs/utils/freight_class";
import { getSelectedCommodityServices } from "$libs/utils/get_selected_commodity_services";
import { getPackageType } from "$libs/utils/package_type";
import { newBooking, type zodBookRequestType } from '$src/libs/types/zod_book_request';
import { writable, type Writable } from "svelte/store";
export let booking_store:Writable<zodBookRequestType> = writable(newBooking());
export let index:number = 0;
let commodity = $booking_store[index]
let mounted = true 
// onMount(()=>{
//     if(commodity.quote_id == undefined || commodity.quote_id == null){
//         goto("/admin/quote")
//         return 
//     }else{
//         mounted = true
//     }
//     console.log("rerendering")
// })
</script>
{#if mounted}
    <div class="flex flex-row mb-3 min-w-[50px] min-h-[20px] items-center">
        <span class="text-lg font-medium">Item {index + 1}</span>
        <span class="w-10 h-10 rounded-full flex items-center justify-center ml-10" style="background-color: rgba(252, 101, 60, 0.702)">
            <button
                type="button"
                default
                class="h-full w-full"
                >
            
                <i class="fal fa-trash-alt text-white min-w-[40px]">
                </i>
            </button>
        </span>
    </div>
    <div class="flex flex-col lg:flex-row gap-3">
        <div class="flex flex-col lg:w-[50%]">
            <label class='py-2 font-semibold' for="shipment_description_index">Shipment Description</label>
            <input 
                type="text" 
                class="" 
                id="shipment_description_index" 
                name="shipment_description_index"
                bind:value={commodity.shipment_description}
                placeholder="what are you shipping?"
            />
        </div>
        <div class='hidden lg:flex flex-col w-[25%]'>
            <label class='py-2 font-semibold' for="package_type_index">Package Type</label>
            <select
                readonly
                id="package_type_index"
                type="text"
                class="w-full"
                disabled
                bind:value={commodity.frontend_package_type}
                >
                <option 
                        value="PACKAGE_NONE"
                        label= "Please Select Package Type"
                        default
                        selected
                >Please Select Freight Class</option>
                {#each getPackageType() as package_type}
                    <option 
                    selected={package_type.default}
                    default={package_type.default}
                    value={package_type.value}
                    label= {package_type.label}
                    />
                {/each}
            </select>
        </div>
        <div class="hidden lg:flex flex-col w-[25%]">
            <label class="py-2 font-semibold" for="freight_class_index">Freight Class</label>
            <select
                readonly
                disabled
                id="freight_class_index"
                name="freight_class"
                placeholder="freight class"
                class=""
                type="text"
        
                bind:value={commodity.frontend_freight_class}
                >
                <option 
                value="CLASS_NONE"
                label= "Please Select Freight Class"
                default
                selected
                >Please Select Freight Class</option>
                {#each getFreightClass() as freight}
                    <option 
                    selected={freight.default}
                    default={freight.default}
                    value={freight.value}
                    label= {freight.label}
                    />
                {/each}
            </select>
        </div>
    
    </div>
    <div class="flex flex-col">
        <div class="flex w-full gap-2">
            <div class="w-1/2 lg:w-[20%]">
                <label class="py-2 w-full font-semibold" for="quantity_index">Quanity</label>
                <input  class="w-full font-semibold"  id="quantity_index" name="quantity" type="number" bind:value={commodity.quantity}  readonly />
                {#if !commodity.quantity_error.valid}
                    <h3 class="text-error" id={"quantity_error_" + index}>{commodity.quantity_error.error_message}</h3>
                {/if}
            </div>
            <div class='lg:hidden w-1/2'>
                    <label class='py-2 font-semibold' for="package_type_index">Package Type</label>
                    <select
                        readonly
                        id="package_type_index"
                        type="text"
                        class="w-full"
                        disabled
                        bind:value={commodity.frontend_package_type}
                        >
                        <option 
                        value="PACKAGE_NONE"
                        label= "Please Select Package Type"
                        default
                                selected
                        >Please Select Freight Class</option>
                        {#each getPackageType() as package_type}
                            <option 
                            selected={package_type.default}
                            default={package_type.default}
                            value={package_type.value}
                            label= {package_type.label}
                            />
                        {/each}
                    </select>
            </div>
            <div class="hidden lg:flex gap-2 lg:w-[80%]">
                <div class="flex flex-col  lg:w-[25%]">
                    <label class="py-2 font-semibold" for={"length_"+ index}>Length</label>
                    <input 
                        readonly
                        id={"length_"+index}
                        name={"length_"+index}
                        type="number"
                        placeholder="length"
                        required
                            class=""
                        autocomplete="on"
                        bind:value={commodity.length}
                    />
                </div>
                <div class="flex flex-col  lg:w-[25%]">
                    <label class="py-2 font-semibold" for={"width_"+index}>Width</label>
                    <input 
                        readonly
                        id={"width_"+index}
                        name={"width_"+index}
                        type="number"
                        placeholder="width"
                        required
                        class=""
                        autocomplete="on"
                        bind:value={commodity.width}
                    />
                </div>
                <div class="flex flex-col  lg:w-[25%]">
                    <label class="py-2 font-semibold" for={"height_"+index}>Height</label>
                    <input 
                        readonly
                        id={"height_"+index}
                        name={"height_"+index}
                        type="number"
                        placeholder="height"
                        required
                        class=""
                        autocomplete="on"
                        bind:value={commodity.height}
                    />
                </div>
                <div class="flex flex-col  lg:w-[25%]">
                    <label class="py-2 font-semibold" for="dimension_uom_index">UOM</label>
                    <select
                        readonly
                        disabled
                        id="dimension_uom_index"
                        name="dimension_uom"
                        class=""
                        bind:value={commodity.frontend_dimension_uom}
                    >
                        <option
                            selected
                            value="0"
                            label="inch"
                            
                        >inch</option>
                        <option 
                            value="1"
                            label="cms"
                        >cms</option>
                    </select>
                </div>
            </div>
        </div>
    
    </div>  
    <div class="flex w-full justify-between gap-2 lg:hidden">
        <div class="flex flex-col w-[32%] md:w-[25%]">
            <label class="py-2 font-semibold" for={"length_"+index}>Length</label>
            <input 
                readonly
                id={"length_"+index}
                name={"length_"+index}
                type="number"
                placeholder="length"
                required
                class=""
                autocomplete="on"
                bind:value={commodity.length}
            />
        </div>
        <div class="flex flex-col  w-[32%] md:w-[25%]">
            <label class="py-2 font-semibold" for={"width_"+index}>Width</label>
            <input 
                readonly
                id={"width_"+index}
                name={"width_"+index}
                type="number"
                placeholder="width"
                required
                class=""
                autocomplete="on"
                bind:value={commodity.width}
            />
        </div>
        <div class="flex flex-col  w-[32%] md:w-[25%]">
            <label class="py-2 font-semibold" for={"height_"+index}>Height</label>
            <input 
                readonly
                id={"height_"+index}
                name={"height_"+index}
                type="number"
                placeholder="height"
                required
                class=""
                autocomplete="on"
                bind:value={commodity.height}
            />
        </div>
        <div class="hidden md:flex flex-col  md:w-[25%]">
            <label class="py-2 font-semibold" for="dimension_uom_index">UOM</label>
            <select
                readonly
                disabled
                id="dimension_uom_index"
                name="dimension_uom"
                class=""
                bind:value={commodity.frontend_dimension_uom}
            >
                <option
                    selected
                    value="0"
                    label="inch"
                    
                >inch</option>
                <option 
                    value="1"
                    label="cms"
                >cms</option>
            </select>
        </div>
    </div>
    <div class="flex md:hidden gap-2">
        <div class="flex flex-col w-1/2">
            <label class="py-2 font-semibold" for="dimension_uom_index">UOM</label>
            <select
                readonly
                disabled
                id="dimension_uom_index"
                name="dimension_uom"
                class="min-w-full"
                bind:value={commodity.frontend_dimension_uom}
            >
                <option
                    selected
                    value="0"
                    label="inch"
                    
                >inch</option>
                <option 
                    value="1"
                    label="cms"
                >cms</option>
            </select>
        </div>
        <div class="flex flex-col w-1/2">
            <label class="py-2 font-semibold" for="freight_class_index">Freight Class</label>
            <select
                readonly
                disabled
                id="freight_class_index"
                name="freight_class"
                placeholder="freight class"
                class=""
                type="text"
        
                bind:value={commodity.frontend_freight_class}
                >
                <option 
                    value="CLASS_NONE"
                    label= "Please Select Freight Class"
                    default
                    selected
                >Please Select Freight Class</option>
                {#each getFreightClass() as freight}
                    <option 
                    selected={freight.default}
                    default={freight.default}
                    value={freight.value}
                    label= {freight.label}
                    />
                {/each}
            </select>
        </div>
    </div>
    <label class="py-4 font-semibold" for="shipment_instructions_index">Shipment Instructions</label>
    <div class="flex flex-col">
        <textarea 
            type="text" 
            class="p-2" 
            id="shipment_instructions_index" 
            bind:value={$booking_store.shipment_details.shipment_instructions}
            placeholder="shipment instructions"
        />
    </div>
    <label class="py-4 font-semibold" for="index_additional_services">Additional Services</label>
    <div class="flex flex-col mb-4">
        <div class="flex flex-wrap gap-2">
            {#each getSelectedCommodityServices(commodity) as service}
                <div class="itemWrapper">
                    <label for={service.id}  class="flex w-full items-center">
                        <input
                            class="checkbox  checkbox-accent"
                            id={service.id}
                            type="checkbox"
                            name={service.value}
                            bind:checked={commodity[service.id]}
                        />
                        <span class="ml-3 text-lg font-semibold">{service.label}</span>
                    </label>
                </div>
            {/each}
        </div>
    </div>
{/if}