<script lang="ts">
	import { goto } from '$app/navigation';
	import Delivery from '$src/components/places/Delivery.svelte';
	import type { zodBookRequestType } from '$src/libs/types/zod_book_request';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let booking_store: Writable<zodBookRequestType> 
	let mounted = false;
	onMount(() => {
		$booking_store.delivery.address.zip_code == null ||
		$booking_store.delivery.address.zip_code == undefined
			? goto('/admin/quote')
			: () => {};
		mounted = true;
	});

	function CheckStreet1() {
		if (
			$booking_store.delivery.address.address_line_1 != '' &&
			$booking_store.delivery.address.address_line_1 != undefined &&
			$booking_store.delivery.address.address_line_1.length > 6
		) {
			$booking_store.delivery.delivery_address_street_error.valid = true;
		} else {
			$booking_store.delivery.delivery_address_street_error.valid = false;
		}
	}
	function CheckCity() {
		if (
			$booking_store.delivery.address.city != '' &&
			$booking_store.delivery.address.city != undefined &&
			$booking_store.delivery.address.city.length > 2
		) {
			$booking_store.delivery.delivery_address_city_error.valid = true;
		} else {
			$booking_store.delivery.delivery_address_city_error.valid = false;
		}
	}
	function CheckState() {
		if (
			$booking_store.delivery.address.state != '' &&
			$booking_store.delivery.address.state != undefined &&
			$booking_store.delivery.address.state.length > 1
		) {
			$booking_store.delivery.delivery_address_state_error.valid = true;
		} else {
			$booking_store.delivery.delivery_address_state_error.valid = false;
		}
	}
	function CheckZipcode() {
		;
		if (
			$booking_store.delivery.address.zip_code != '' &&
			$booking_store.delivery.address.zip_code != undefined &&
			$booking_store.delivery.address.zip_code.length == 5
		) {
			$booking_store.delivery.delivery_address_zip_code_error.valid = true;
		} else {
			$booking_store.delivery.delivery_address_zip_code_error.valid = false;
		}
	}
</script>

{#if mounted}
	<div class="flex flex-col w-full py-3">
		<div class="flex flex-col w-full">
			<div class="flex flex-col w-full">
				<label class="text-lg font-semibold py-2" for="receiver_address">Street</label>
				<Delivery
					Id={'receiver_address'}
					Klass={'w-full lg:w-[350px]'}
					placeholder={'delivery street'}
					nextId={'shipper_company_name'}
					functionsToCallAfter={[CheckStreet1, CheckCity, CheckState, CheckZipcode]}
				/>
				{#if $booking_store?.delivery.delivery_address_street_error.valid == false}
					<h3
						class={`text-error ${$booking_store?.delivery.delivery_address_street_error.clas}`}
						id={$booking_store?.delivery.delivery_address_street_error.id}
					>
						{$booking_store?.delivery.delivery_address_street_error
							.error_message}
					</h3>
				{/if}
				{#if $booking_store?.delivery.delivery_address_state_error?.valid == false}
					<h3
						class={`text-error ${$booking_store?.delivery.delivery_address_state_error.clas}`}
						id={$booking_store?.delivery.delivery_address_state_error.id}
					>
						{$booking_store?.delivery.delivery_address_state_error
							.error_message}
					</h3>
				{/if}
			</div>
			<div class="lg:hidden">
				<label class="text-lg font-semibold py-2" for="receiver_city">City</label>
				<input
					class="w-full"
					id="receiver_city"
					placeholder="delivery city"
					on:change={CheckCity}
					bind:value={$booking_store.delivery.address.city}
				/>
				{#if $booking_store?.delivery.delivery_address_city_error?.valid == false}
					<h3
						class={`text-error ${$booking_store?.delivery.delivery_address_city_error.clas}`}
						id={$booking_store?.delivery.delivery_address_city_error.id}
					>
						{$booking_store?.delivery.delivery_address_city_error
							.error_message}
					</h3>
				{/if}
			</div>
		</div>
		<div class="flex fex-col lg:flex-row gap-2 w-full">
			<div class="hidden lg:flex flex-col lg:w-[230px]">
				<label class="py-2 font-semibold" for="receiver_city">City</label>
				<input
					class="w-full"
					id="receiver_city"
					placeholder="delivery city"
					on:change={CheckCity}
					bind:value={$booking_store.delivery.address.city}
				/>
				{#if $booking_store?.delivery.delivery_address_city_error?.valid == false}
					<h3
						class={`text-error ${$booking_store?.delivery.delivery_address_city_error.clas}`}
						id={$booking_store?.delivery.delivery_address_city_error.id}
					>
						{$booking_store?.delivery.delivery_address_city_error
							.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex flex-col w-1/2 lg:w-[230px]">
				<label class="py-2 font-semibold" for="receiver_state">State</label>
				<input
					class=""
					id="receiver_state"
					placeholder="delivery state"
					on:change={CheckState}
					bind:value={$booking_store.delivery.address.state}
				/>
				{#if $booking_store?.delivery.delivery_address_state_error?.valid == false}
					<h3
						class={`text-error ${$booking_store?.delivery.delivery_address_state_error.clas}`}
						id={$booking_store?.delivery.delivery_address_state_error.id}
					>
						{$booking_store?.delivery.delivery_address_state_error
							.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex flex-col w-1/2 lg:w-[230px]">
				<label class="font-semibold py-2" for="receiver_zipcode">Zip</label>
				<input
					class=""
					id="receiver_zipcode"
					placeholder="delivery zipcode"
					readonly
					on:change={CheckZipcode}
					bind:value={$booking_store.delivery.address.zip_code}
				/>
				{#if $booking_store?.delivery.delivery_address_zip_code_error?.valid == false}
					<h3
						class={`text-error ${$booking_store?.delivery.delivery_address_zip_code_error.clas}`}
						id={$booking_store?.delivery.delivery_address_zip_code_error.id}
					>
						{$booking_store?.delivery.delivery_address_zip_code_error
							.error_message}
					</h3>
				{/if}
			</div>
		</div>
		{#if $booking_store?.delivery.delivery_zipcode_mismatch_error?.valid == false}
			<h3
				class={`text-error ${$booking_store?.delivery.delivery_zipcode_mismatch_error.clas}`}
				id={$booking_store?.delivery.delivery_zipcode_mismatch_error.id}
			>
				{$booking_store?.delivery.delivery_zipcode_mismatch_error.error_message}
			</h3>
		{/if}
	</div>
{/if}
