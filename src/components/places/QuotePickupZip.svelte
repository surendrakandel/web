<script lang="ts">
	import { parseAddress } from '$src/components/places/parse_quote_address';
	import { afterUpdate, onMount } from 'svelte';
	import { addressType, newAddress } from '$src/libs/types/address';
	import { isNumeric } from '$src/libs/utils/is_numeric';
	import type { Writable } from 'svelte/store';
	import type { zodQuoteRequestType } from '$src/libs/types/quote';
	import { newPickupLocation } from '$src/libs/types/pickup_location';
	export let quote_store: Writable<zodQuoteRequestType>;
	export let Id: string;
	export let placeholder: string;
	export let Klass: string;
	function onZipEmpty (){
		if($quote_store.pickup.address.zip_code == ""){
			$quote_store.pickup = newPickupLocation()
			$quote_store.pickup.address.zip_code = ""
		}
	}
	onMount(() => {
		let options = ['address_component', 'formatted_address', 'geometry', 'name'];
		const pickupInput = document.getElementById(Id);
		// @ts-ignore
		const autocomplete_pickup = new google.maps.places.Autocomplete(pickupInput, options);
		autocomplete_pickup.addListener('place_changed', () => {
			const place = autocomplete_pickup.getPlace();
			let address = parseAddress(place);
			let isnum = /^\d+$/.test(address.zip_code);
			let zip_code = isnum == true ? address.zip_code : '';
			if (zip_code != '' && zip_code.length == 5) {
				$quote_store.pickup.address = address;
				$quote_store.pickup.pickup_address_zip_code_error.valid = true;
			} else {
				$quote_store.pickup.address = newAddress(addressType.pickup);
				$quote_store.pickup.pickup_address_zip_code_error.valid = false;
			}
		});
	});
	afterUpdate(() => {
		console.log('pickup location updated');
		if (
			$quote_store?.pickup?.address?.free_form_address.length == 5 &&
			isNumeric($quote_store.pickup.address.free_form_address)
		) {
			$quote_store.pickup.address.zip_code = $quote_store.pickup.address.free_form_address;
		}
	});
</script>

<input id={Id} class={Klass} {placeholder} bind:value={$quote_store.pickup.address.zip_code} on:change={onZipEmpty}/>
