

<script lang="ts">
	// @ts-nocheck
	import { getPickupLocationServices } from '$src/libs/utils/pickup_location_services';
	import { changePickupLocationServices } from './pickup';
	import Pickup from '$src/components/places/QuotePickupZip.svelte';
	import type { Writable } from "svelte/store";
	import type { zodQuoteRequestType } from '$src/libs/types/quote';
	export let quote_store:Writable<zodQuoteRequestType> 
</script>

<div class="cardWrapper">
		<div class="flex flex-col mb-3">
			<label class="label text-lg font-bold" for="shipper_zipcode">Pickup Zip Code</label>
			<Pickup
				Id={'shipper_zipcode'}
				Klass={'w-full lg:w-[400px]'}
				placeholder={'pickup zip code'}
				quote_store={quote_store}
			/>
			<div class="flex pt-2">
				{#if $quote_store.pickup.address.city != ""}
					
						<span class="inline text-sm text-gray-700 font-semibold">{$quote_store.pickup.address.city}</span>

				{/if}
				{#if $quote_store.pickup.address.state != ""}
						<span class="inline text-sm text-gray-700 font-semibold">,&nbsp {$quote_store.pickup.address.state}</span>
				{/if}
			</div>
			{#if $quote_store.pickup.pickup_address_zip_code_error?.valid == false}
				<h3
					class={`text-error ${$quote_store.pickup.pickup_address_zip_code_error?.clas}`}
					id={$quote_store.pickup.pickup_address_zip_code_error?.id}
				>
					{$quote_store.pickup.pickup_address_zip_code_error?.error_message}
				</h3>
			{/if}
		</div>
		<div class="flex flex-col mb-3">
			<h4 class="text-lg font-bold pb-3">Pickup Services</h4>
			<div class="flex flex-col md:flex-row gap-2 md:flex-wrap">
				{#each getPickupLocationServices() as service}
					<div class="itemWrapper">
						<label for={service.id} class="flex w-full items-center">
							<input
								class="checkbox  checkbox-accent"
								id={service.id}
								type="checkbox"
								name={service.value}
								on:change={changePickupLocationServices}
								bind:checked={$quote_store.pickup[service.id]}
							/>
							<span class="ml-3 text-lg font-semibold">{service.label}</span>
						</label>
					</div>
				{/each}
			</div>
			{#if $quote_store.pickup.shipper_additional_services_error?.valid == false}
				<h3
					class={`text-error ${$quote_store.pickup.shipper_additional_services_error?.clas}`}
					id={$quote_store.pickup.shipper_additional_services_error?.id}
				>
					{$quote_store.pickup.shipper_additional_services_error?.error_message}
				</h3>
			{/if}
		</div>
		<div class="flex flex-col mb-3">
			<label class="text-lg font-semibold  py-2" for="shipper_instructions"
				>Pickup Instructions</label
			>
			<textarea
				type="text"
				class="mt-3 h-[100px] p-[15px]"
				id="shipper_instructions"
				name="shipper_instructions"
				bind:value={$quote_store.pickup.shipper_instructions}
				placeholder="pickup instructions"
			/>
		</div>
</div>
