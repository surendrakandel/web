<script lang="ts">
	import { parseAddress } from '$src/libs/utils/parse_address';
	import { nextJump } from '$src/libs/utils/nest_jump';
	import { onMount } from 'svelte';
	import type { zodBookRequestType } from '$src/libs/types/zod_book_request';
	import type { Writable } from "svelte/store";
	export let booking_store:Writable<zodBookRequestType> 
	export let Id: string;
	export let placeholder: string;
	export let Klass: string;
	export let nextId: string;
	export let functionsToCallAfter = [() => {}];
    onMount(() => {
		let options = ['address_component', 'formatted_address', 'geometry', 'name'];
		const pickupInput = document.getElementById(Id);
		// @ts-ignore
		const autocomplete_pickup = new google.maps.places.Autocomplete(pickupInput, options);
		autocomplete_pickup.addListener('place_changed', () => {
			const place = autocomplete_pickup.getPlace();
			const address = parseAddress(place);
            
			if (address.zip_code == $booking_store.pickup.address.zip_code && address.city == $booking_store.pickup.address.city) {
				$booking_store.pickup.address = address;
				$booking_store.pickup.pickup_zipcode_mismatch_error.valid = true;
				$booking_store.pickup.pickup_address_street_error.valid = true;
				$booking_store.pickup.pickup_address_city_error.valid = true;
				$booking_store.pickup.pickup_address_state_error.valid = true;
				$booking_store.pickup.pickup_address_zip_code_error.valid = true;
			} else {
				nextId = '';
                $booking_store.pickup.pickup_address_street_error.valid = false;
			}

			functionsToCallAfter.forEach((func) => {
				func();
			});
			if (nextId != '') {
				nextJump(nextId);
			}
        });
    })
</script>

<input id={Id} class={Klass} {placeholder} bind:value={$booking_store.pickup.address.address_line_1}/>
