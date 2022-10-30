<script lang="ts">
  import DeliveryCard from "$components/quote/Delivery.svelte";
  import PickupCard from "$components/quote/Pickup.svelte";
  import Item from "$components/quote/Item.svelte";
  import { goto } from "$app/navigation";
  import { fixDelivery } from "$libs/utils/fix_delivery";
  import { fixPickup } from "$libs/utils/fix_pickup";
  import { fixCommodities } from "$libs/utils/fix_commodities";
  import { validatePickupDate } from "$libs/utils/validate_pickup_date";
  import { onMount } from "svelte";
  import { quote_store } from "$src/routes/(admin)/admin/quote/quote_store";
	import { newCommodity } from "$libs/types/commodity";
	import { writable, type Writable } from "svelte/store";
	import { newQuote, zodQuoteRequest, type zodQuoteRequestType } from "$libs/types/quote";
	import { newShipmentDetails } from "$libs/types/shipment_details";
	import type { error_info_type } from "$libs/types/error_info";
	import { business_store } from "$src/stores/basic_provider";
	import { newPickupLocation } from "$src/libs/types/pickup_location";
	import { newDeliveryLocation } from "$src/libs/types/delivery_location";

  let mounted = false;
  let is_pickup_date_valid:Writable<error_info_type> = writable({valid: true, id: "pickup_date", clas:"firstshipper_errors", error_message: "pickup date is not valid or falls of weekends, off hours, public holidays"})
  onMount(() => {
    if(!$quote_store?.shipment_details?.edit_mode){
      $quote_store.pickup = newPickupLocation()
      $quote_store.delivery = newDeliveryLocation()
      $quote_store.commodities = [newCommodity(0)]
      $quote_store.shipment_details = newShipmentDetails()
      $quote_store = newQuote()
    }
    mounted = true;
    return ()=>{
      if($quote_store?.shipment_details?.edit_mode == false){
        $quote_store = newQuote()
      }
    }
  });
  function Submit() {
    // start with not having any errors
    let choosen_date = `${$quote_store?.shipment_details?.display_date}T09:00:00`;
    let pickupDate = new Date(new Date(choosen_date).toLocaleString());
    let { valid } = validatePickupDate(pickupDate);
    if (!valid && $quote_store?.shipment_details != undefined) {
      $is_pickup_date_valid.valid = false
      $quote_store.shipment_details.pickup_date = ""
      $quote_store.shipment_details.display_date = ""
    }
    try {
      if($quote_store.shipment_details){
        $quote_store.shipment_details.business_id = $business_store.business_id 
      }
      isValidPickupDate();
      let zodValidation = {}
      try {
        zodValidation = zodQuoteRequest.parse($quote_store)
      } catch (error:any) {
        debugger
        error.errors.forEach((err:any)=>{
          debugger
          let err_path = err.path.join("_") + "_error"
          if(err_path.includes("commodities")){
            for(let index=0; index <$quote_store.commodities.length; index++){
              err_path = err.path[2] + "_error"
              
              if($quote_store.commodities[index].hasOwnProperty(err_path)){
                console.log("inside commodities validation", err_path)
                // @ts-ignore
                $quote_store.commodities[index][err_path].valid = false
              }
            }
          }
          if($quote_store.pickup.hasOwnProperty(err_path)){
            console.log("inside pickup validation", err_path)
            // @ts-ignore
            $quote_store.pickup[err_path].valid = false
          }
          // @ts-ignore
          if($quote_store.delivery.hasOwnProperty(err_path)){
            console.log("inside delivery validation", err_path)
            // @ts-ignore
            $quote_store.delivery[err_path].valid = false
          }
          if($quote_store.shipment_details.hasOwnProperty(err_path)){
            console.log("inside shipment_details validation", err_path)
            // @ts-ignore
            $quote_store.shipment_details[err_path].valid = false
          }
          
        })
        let element = document.getElementsByClassName("firstshipper_errors");
          
        if(element.length >0){
          element[0].scrollIntoView({ behavior: "smooth", block: "center" });
          return 
        }
        return
         

      }
      // fix enums and other data to fit the backend
      fixPickup(quote_store);
      fixDelivery(quote_store);
      fixCommodities(quote_store);
      goto("/admin/rates");
    } catch (error) {
      console.log(error);
      return
    }
  }
  function addItem() {
    let commodity = newCommodity($quote_store.commodities.length);
    let newCommodities = [...$quote_store.commodities, commodity];
    $quote_store.commodities = newCommodities
  }
  function handleCancel() {
    $quote_store.pickup = newPickupLocation();
    $quote_store.delivery = newDeliveryLocation();
    $quote_store.commodities = [newCommodity(0)];
    $quote_store.shipment_details = newShipmentDetails()
  }
  function isValidPickupDate() {
    let value = (<HTMLInputElement>(
      document.getElementById("shipper_pickup_date")
    )).value;
    let choosen_date = new Date(value + "T10:00:00");
    let pickupDate = new Date(new Date(choosen_date).toLocaleString());
    let { valid } = validatePickupDate(pickupDate);
    if (!valid) {
      $is_pickup_date_valid.valid = false
      $quote_store.shipment_details.pickup_date = ""
      $quote_store.shipment_details.display_date = ""
      return
    } else {
      $is_pickup_date_valid.valid = true
      $quote_store.shipment_details.display_date = pickupDate.toISOString().split("T")[0];
      $quote_store.shipment_details.pickup_date = pickupDate.toISOString();
    }
  }
  function openPickupDate() {
    let element = document.getElementById("shipper_pickup_date");
    //@ts-ignore
    element.showPicker();
  }
</script>
<div class="flex flex-col mb-8 main w-full">
  {#if mounted}
    <h3 class="text-lg font-semibold py-2">Shipping Date</h3>
    <div class="cardWrapper">
      <div class="flex items-center">
        <input
          type="date"
          class="w-[260px] lg:max-w-[400px]"
          id="shipper_pickup_date"
          on:change={isValidPickupDate}
          bind:value={$quote_store.shipment_details.display_date}
          placeholder="select pickup date"
        />
        <button on:click={openPickupDate} class="ml-3">
          <img
            src="/images/icons/calender1.svg"
            width="66px"
            height="40px"
            alt="pick a date to ship"
          />
        </button>
      </div>
      {#if $is_pickup_date_valid["valid"] != true}
        <h3 class={`text-error ${$is_pickup_date_valid.clas}` } id={$is_pickup_date_valid.id}>
          {$is_pickup_date_valid.error_message}
        </h3>
      {/if}
    </div>
    <div class="flex flex-col xl:flex-row gap-2">
      <div class="xl:w-1/2">
        <h3 class="text-lg font-semibold py-3">Pickup</h3>
        <PickupCard quote_store={quote_store}/>
      </div>
      <div class="xl:w-1/2">
        <h3 class="text-lg font-semibold py-3">Delivery</h3>
        <DeliveryCard quote_store={quote_store}/>
      </div>
    </div>
    <div class="flex flex-col w-full">
      <h3 class="text-lg font-semibold py-3">Items Details</h3>
      {#each $quote_store.commodities as _commodity, index}
        <div class="cardWrapper w-full">
          <Item index={index} quote_store={quote_store}/>
        </div>
      {/each}
    </div>
    <div class="flex justify-between md:justify-start mt-4 mr-2">
      <button
        class="btn btn-primary min-w-[150px] md:min-w-[200px] text-white"
        style="background-color: #1B2752;"
        on:click|preventDefault={() => addItem()}
        >ADD ITEM
      </button>
      <div class="flex md:ml-[50px] justify-center items-center">
        <button
          style="background-color: #5CB971"
          type="submit"
          href="/admin/rates"
          class="btn btn-primary min-w-[180px] md:min-w-[300px] text-white items-center justify-center"
          on:click={Submit}
        >
          Get Quote
        </button>
      </div>
    </div>
    <div class="flex mt-4">
      <button
        style="
        background-color: rgba(252, 101, 60, 0.702); text-white;"
        class="btn font-mono  min-w-[150px] md:min-w-[200px]"
        on:click={handleCancel}
        >CANCEL
      </button>
    </div>
  {/if}
</div>
