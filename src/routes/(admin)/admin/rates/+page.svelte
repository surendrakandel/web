<script lang="ts">
  import Rate from "$components/rate/Rate.svelte";
  import Circle3 from "svelte-loading-spinners/Circle3.svelte";
  import { onMount } from "svelte";
  import { quote_store } from "$src/routes/(admin)/admin/quote/quote_store";
  import { ErrorToastOptions } from "$libs/utils/toast_options";
  import { booking_store } from "$src/routes/(admin)/admin/rates/booking_store";
  import { goto } from "$app/navigation";
  import { toast } from "@zerodevx/svelte-toast";
  import { createQuote } from "$api/quote/create";
	import { bookInputType, newBookContact } from "$src/libs/types/book";
	import { addBookingPickupErrors } from "$src/libs/utils/add_booking_pickup_errors";
	import { addBookingDeliveryErrors } from "$src/libs/utils/add_booking_delivery_errors";
	import { addBookingCommoditiesErrors } from "$src/libs/utils/add_booking_commodities_errors";
	import { business_store } from "$src/stores/basic_provider";
	import { fixQuoteResponse } from "./fix_quote_response";
	import type { zodBookRequestType } from "$src/libs/types/zod_book_request";
  
  let loading = true;
  let pickup_state = $quote_store.pickup.address.state || null
  let pickup_city = $quote_store.pickup.address.city || null
  let pickup_place = pickup_state != null && pickup_city != null ? pickup_city + ", " + pickup_state : null
  let delivery_state = $quote_store.delivery.address.state || null
  let delivery_city = $quote_store.delivery.address.city || null
  let delivery_place = delivery_state != null && delivery_city != null ? delivery_city + ", " + delivery_state : null
  onMount(() => {
    try {
      createQuote($quote_store).then((res) => {
        if (res.quote_id) {
          booking_store.update((value) => {
            let newValue:zodBookRequestType = {
              shipment_details: res?.shipment_details,
              commodities: res?.commodities,
              pickup: res?.pickup,
              delivery: res?.delivery,
              bid: res?.bid,
              business_id: res?.business_id,
              quote_id: res?.quote_id,
              type: "booking_request",
              bids: res?.bids,
              booking_success: res?.booking_success,
              special_instruction: res?.special_instruction,
            };
            newValue = fixQuoteResponse(newValue)
            newValue.shipment_details.business_id = $business_store.business_id
            
            if(newValue.pickup.address.zip_code == $quote_store.pickup.address.zip_code){
              newValue.pickup.address = $quote_store.pickup.address 
            }
            if(newValue.delivery.address.zip_code == $quote_store.delivery.address.zip_code){
              newValue.delivery.address = $quote_store.delivery.address
            }
            newValue.pickup.contact = newValue?.pickup?.contact.first_name == undefined ? newBookContact(bookInputType.pickup): newValue?.pickup?.contact;
            newValue.delivery.contact = newValue?.delivery?.contact.first_name == undefined ? newBookContact(bookInputType.delivery): newValue?.delivery?.contact ;
            newValue.pickup = addBookingPickupErrors(newValue.pickup)
            newValue.delivery = addBookingDeliveryErrors(newValue.delivery)
            newValue.commodities  = addBookingCommoditiesErrors(newValue.commodities)
            value = newValue
            return value;
          });
        } else {
          toast.push("could not get the quote", ErrorToastOptions);
          goto("/admin/quote")
        }
        loading = false;
      });
    } catch (error) {
      loading = false;
      console.log(error);
    }
  });
  function editQuote() {
     $booking_store.shipment_details.edit_mode = true;
     goto("/admin/quote")
  }
</script>

{#if loading}
  <div
    class=" cardWrapper inset-0  flex h-[300px] items-center m-2 justify-center duration-300 transition-opacity"
  >
    <Circle3 size="60" unit="px" duration="1s" />
    <h3 class="mt-3 text-black font-mono text-lg sm:text-md">Getting Quotes</h3>
  </div>
{:else}
  <div class="shipment_info cardWrapper m-2 py-3  max-w-[1000px] w-full">
    <div class="flex justify-start py-2 gap-5 w-full">
      <div class="w-[80px] min-w-[80px]">
        <img
        src="/images/icons/pallet.svg"
        width="50"
        alt="pickup icon"
        class="self-center"
      />
      </div>
      <a
        class="btn btn-primary text-md font-bold text-white"
        href="/admin/quote"
        on:click={editQuote}>Edit Quote</a
      >
    </div>
    <h2 class="text-sm sm:text-xl font-bold py-2 w-full mt-3">Shipment Info</h2>
    <div class="flex justify-start gap-5 w-full mt-3">
      <div class="w-1/2">
        <h3 class="text-sm sm:text-lg font-bold w-full">Origin</h3>
        <p class="text-sm sm:text-lg py-2 tracking-wide font-semibold w-full">
          {$quote_store.pickup.address.zip_code}  {pickup_place}
        </p>
      </div>
      <div class="w-1/2">
        <h4 class="text-sm sm:text-lg  font-bold w-full">Destination</h4>
        <p class="text-sm sm:text-lg py-2 tracking-wide font-semibold w-full">
          {$quote_store.delivery.address.zip_code}  {delivery_place}
        </p>
      </div>
    </div>
    <div class="flex justify-start gap-3 w-full mt-3">
      <h3 class="text-xs  md:text-lg font-bold w-[30px] sm:w-[60px]">S.N</h3>
      <h3 class="text-xs  md:text-lg font-bold w-[70px] sm:w-[140px]">Package Type</h3>
      <h3 class="text-xs  md:text-lg font-bold w-[120px] sm:w-[200px]">Dimensions</h3>
      <h3 class="text-xs  md:text-lg font-bold w-[100px] sm:w-[200px]">Weight</h3>
    </div>
    <div class="flex justify-start gap-3 w-full mt-1">
      {#each $quote_store.commodities as commodity, index}
        <div class="w-[30px] sm:w-[60px]">
            <p class="text-xs md:text-lg  py-2 tracking-wide font-semibold">
              {index+1}
            </p>
        </div>
        <div class="w-[70px]  sm:w-[140px]">
            <p class="text-xs md:text-lg py-2 tracking-wide font-semibold">
              {commodity.frontend_package_type}
            </p>
        </div>
        <div class="w-[120px]  sm:w-[200px]">
          <p class="text-xs md:text-lg py-2 tracking-wide font-semibold">
            {commodity?.length}*{commodity?.width}*{commodity?.height} {commodity.frontend_dimension_uom == "0"? "inch": "cm"}
          </p>
        </div>
        <div class="w-[100px]  sm:w-[200px]">
          <p class="text-xs md:text-lg py-2 tracking-wide font-semibold">
            {commodity.weight}  {commodity.frontend_weight_uom == "0" ? "lbs" : "kgs"}
          </p>
        </div>
      {/each}
    </div>
  </div>
  <h3 class="text-lg font-bold mx-2 my-4">Available Rates</h3>
  {#each $booking_store?.bids as bid}
    <Rate bid={bid} booking_store={booking_store}/>
  {/each}
{/if}
