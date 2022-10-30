<script lang="ts">
	import { parseAddress } from '$src/libs/utils/parse_address';
	import { nextJump } from '$src/libs/utils/nest_jump';
	import { onMount } from 'svelte';
	import { newBooking, type zodBookRequestType } from '$src/libs/types/zod_book_request';
	import { writable, type Writable } from "svelte/store";
	export let booking_store:Writable<zodBookRequestType> = writable(newBooking());
	export let Id: string;
	export let placeholder: string;
	export let Klass: string;
	export let nextId: string;
	export let functionsToCallAfter:any;
	onMount(() => {
		let options = ['address_component', 'formatted_address', 'geometry', 'name'];
		const deliveryInput = document.getElementById(Id);
		// @ts-ignore
		const autocomplete_delivery = new google.maps.places.Autocomplete(deliveryInput, options);
		autocomplete_delivery.addListener('place_changed', () => {
			const place = autocomplete_delivery.getPlace();
			const address = parseAddress(place);
			if (address.zip_code == $booking_store.delivery.address.zip_code && address.city == $booking_store.delivery.address.city) {
				$booking_store.delivery.address = address;
				$booking_store.delivery.delivery_zipcode_mismatch_error.valid = true;
				$booking_store.delivery.delivery_address_street_error.valid = true;
				$booking_store.delivery.delivery_address_city_error.valid = true;
				$booking_store.delivery.delivery_address_state_error.valid = true;
				$booking_store.delivery.delivery_address_zip_code_error.valid = true;
			} else {
				nextId = '';
                $booking_store.delivery.delivery_address_street_error.valid = false;
			}
            functionsToCallAfter.forEach((func:any) => {
                func();
		    });
            if (nextId != '') {
			nextJump(nextId);
		}
	});
		
		
	});
</script>

<input id={Id} class={Klass} {placeholder} bind:value={$booking_store.delivery.address.address_line_1} />
