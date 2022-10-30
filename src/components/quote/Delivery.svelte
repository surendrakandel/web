
<script lang="ts">
// @ts-nocheck
  import { getDeliveryLocationServices } from "$libs/utils/delivery_location_services";
  import { changeDeliveryLocationServices } from "./delivery";
  import Delivery from '$src/components/places/QuoteDeliveryZip.svelte';
  import type { Writable } from "svelte/store";
	import type { zodQuoteRequestType } from '$src/libs/types/quote';
	export let quote_store:Writable<zodQuoteRequestType> 
</script>

<div class="cardWrapper">
  <div class="flex flex-col mb-3">
    <label class="label text-lg font-bold" for="receiver_zip_code"
      >Delivery Zip Code</label
    >
    <Delivery
				Id={'receiver_zipcode'}
				Klass={'w-full lg:w-[350px]'}
				placeholder={'delivery zip code'}
        quote_store={quote_store}
		/>
    <div class="flex pt-2">
      {#if $quote_store.delivery.address.city != ""}
        
          <span class="inline text-sm text-gray-700 font-semibold">{$quote_store.delivery.address.city}</span>

      {/if}
      {#if $quote_store.delivery.address.state != ""}
          <span class="inline text-sm text-gray-700 font-semibold">,&nbsp {$quote_store.delivery.address.state}</span>
      {/if}
    </div>
    {#if $quote_store?.delivery?.delivery_address_zip_code_error?.valid == false}
      <h3 class={`text-error flex flex-wrap py-2 ${$quote_store?.delivery?.delivery_address_zip_code_error?.clas}`} id={$quote_store?.delivery?.delivery_address_zip_code_error?.id}>
        {$quote_store?.delivery?.delivery_address_zip_code_error?.error_message}
      </h3>
    {/if}
  </div>
  <div class="flex flex-col mb-3">
    <h4 class="text-lg font-bold pb-3">Delivery Services</h4>
    <div class="flex flex-col md:flex-row gap-2 md:flex-wrap">
      {#each getDeliveryLocationServices() as service}
        <div class="itemWrapper">
          <label for={service.id} class="flex w-full items-center">
            <input
              class="checkbox  checkbox-accent"
              id={service.id}
              type="checkbox"
              name={service.value}
              on:change={changeDeliveryLocationServices}
              bind:checked={$quote_store.delivery[service.id]}
            />
            <span class="ml-3 text-lg font-semibold">{service.label}</span>
          </label>
        </div>
      {/each}
    </div>
    {#if $quote_store?.delivery?.delivery_additional_services_error?.valid == false}
      <h3 class={`text-error flex flex-wrap py-2 ${$quote_store?.delivery?.delivery_additional_services_error?.clas}`} id={$quote_store?.delivery?.delivery_additional_services_error?.id}>
        {$quote_store?.delivery?.delivery_additional_services_error?.error_message}
      </h3>
    {/if}
  </div>
  <div class="flex flex-col mb-3">
    <label class="text-lg font-semibold py-2" for="receiver_instructions"
      >Delivery Instructions</label
    >
    <textarea
      type="text"
      class="mt-3 h-[100px] p-[15px]"
      id="receiver_instructions"
      name="receiver_instructions"
      bind:value={$quote_store.delivery.receiver_instructions}
      placeholder="delivery instructions"
    />
  </div>
</div>
