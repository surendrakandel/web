<script lang="ts">
	import { goto } from '$app/navigation';
	import Pickup from '$src/components/places/Pickup.svelte';
	import { newBooking, type zodBookRequestType } from '$src/libs/types/zod_book_request';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	export let booking_store:Writable<zodBookRequestType>  = writable(newBooking());
	let mounted = false;
	onMount(() => {
		$booking_store.pickup.address.zip_code == null ||
		$booking_store.pickup.address.zip_code == undefined
			? goto('/admin/quote')
			: () => {};
		mounted = true;
	});
	function CheckStreet1() {
		if (
			$booking_store.pickup.address.address_line_1 != '' &&
			$booking_store.pickup.address.address_line_1 != undefined &&
			$booking_store.pickup.address.address_line_1.length > 6
		) {
			booking_store.update((value) => {
				value.pickup.pickup_address_street_error.valid = true;
				return value;
			});
		} else {
			booking_store.update((value) => {
				value.pickup.pickup_address_street_error.valid = false;
				return value;
			});
		}
	}
	function CheckCity() {
		if (
			$booking_store.pickup.address.city != '' &&
			$booking_store.pickup.address.city != undefined &&
			$booking_store.pickup.address.city.length > 2
		) {
			booking_store.update((value) => {
				value.pickup.pickup_address_city_error.valid = true;
				return value;
			});
		} else {
			booking_store.update((value) => {
				value.pickup.pickup_address_city_error.valid = false;
				return value;
			});
		}
	}
	function CheckState() {
		if (
			$booking_store.pickup.address.state != '' &&
			$booking_store.pickup.address.state != undefined &&
			$booking_store.pickup.address.state.length > 1
		) {
			booking_store.update((value) => {
				value.pickup.pickup_address_state_error.valid = true;
				return value;
			});
		} else {
			booking_store.update((value) => {
				value.pickup.pickup_address_state_error.valid = false;
				return value;
			});
		}
	}
	function CheckZipcode() {
		if (
			$booking_store.pickup.address.zip_code != '' &&
			$booking_store.pickup.address.zip_code != undefined &&
			$booking_store.pickup.address.zip_code.length == 5
		) {
			booking_store.update((value) => {
				value.pickup.pickup_address_zip_code_error.valid = true;
				return value;
			});
		} else {
			booking_store.update((value) => {
				value.pickup.pickup_address_zip_code_error.valid = false;
				return value;
			});
		}
	}
</script>

{#if mounted}
	<div class="flex flex-col w-full py-3">
		<div class="flex flex-col">
			<div class="flex flex-col">
				<label class="font-semibold py-2" for="shipper_address">Street</label>
				<Pickup
					Id={'shipper_address'}
					Klass={'w-full lg:w-[350px]'}
					placeholder={'pickup street'}
					nextId={'delivery_address'}
					booking_store={booking_store}
					functionsToCallAfter={[CheckStreet1, CheckCity, CheckState, CheckZipcode]}
				/>
				{#if $booking_store?.pickup.pickup_address_street_error.valid == false}
					<h3
						class={`text-error ${$booking_store?.pickup.pickup_address_street_error.clas}`}
						id={$booking_store?.pickup.pickup_address_street_error.id}
					>
						{$booking_store?.pickup.pickup_address_street_error.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex flex-col lg:hidden">
				<label class="font-semibold" for="shipper_city">City</label>
				<input
					class="w-full"
					id="shipper_city"
					name="shipper_city"
					placeholder="pickup city"
					bind:value={$booking_store.pickup.address.city}
					on:change={CheckCity}
				/>
				{#if $booking_store?.pickup.shipper_additional_services_error.valid != true}
					<h3
						class={`text-error ${$booking_store?.pickup.shipper_additional_services_error.clas}`}
						id={$booking_store?.pickup.shipper_additional_services_error.id}
					>
						{$booking_store?.pickup.shipper_additional_services_error.error_message}
					</h3>
				{/if}
			</div>
		</div>
		<div class="flex fex-col lg:flex-row gap-2 w-full">
			<div class="hidden lg:flex flex-col lg:w-[230px]">
				<label class="py-2 font-semibold" for="shipper_city">City</label>
				<input
					class="w-full"
					id="shipper_city"
					placeholder="pickup city"
					bind:value={$booking_store.pickup.address.city}
					on:change={CheckCity}
				/>
				{#if $booking_store?.pickup.pickup_address_city_error.valid != true}
					<h3
						class={`text-error ${$booking_store?.pickup.pickup_address_city_error.clas}`}
						id={$booking_store?.pickup.pickup_address_city_error.id}
					>
						{$booking_store?.pickup.pickup_address_city_error.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex flex-col w-1/2 lg:w-[230px]">
				<label class="py-2 font-semibold " for="shipper_state">State</label>
				<input
					class=""
					id="shipper_state"
					placeholder="pickup state"
					bind:value={$booking_store.pickup.address.state}
					on:change={CheckState}
				/>
				{#if $booking_store?.pickup.pickup_address_state_error.valid != true}
					<h3
						class={`text-error ${$booking_store?.pickup.pickup_address_state_error.clas}`}
						id={$booking_store?.pickup.pickup_address_state_error.id}
					>
						{$booking_store?.pickup.pickup_address_state_error.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex flex-col w-1/2 lg:w-[230px]">
				<label class="font-semibold py-2" for="shipper_zipcode">Zip</label>
				<input
					class=""
					id="shipper_zipcode"
					placeholder="pickup zipcode"
					readonly
					on:change={CheckZipcode}
					bind:value={$booking_store.pickup.address.zip_code}
				/>
				{#if $booking_store?.pickup.pickup_address_zip_code_error.valid != true}
					<h3
						class={`text-error ${$booking_store?.pickup.pickup_address_zip_code_error.clas}`}
						id={$booking_store?.pickup.pickup_address_zip_code_error.id}
					>
						{$booking_store?.pickup.pickup_address_zip_code_error.error_message}
					</h3>
				{/if}
			</div>
		</div>
		{#if $booking_store?.pickup.pickup_zipcode_mismatch_error.valid != true}
			<h3
				class={`text-error ${$booking_store?.pickup.pickup_zipcode_mismatch_error.clas}`}
				id={$booking_store?.pickup.pickup_zipcode_mismatch_error.id}
			>
				{$booking_store?.pickup.pickup_zipcode_mismatch_error.error_message}
			</h3>
		{/if}
	</div>
{/if}
