<script lang="ts">
	import { parseAddress } from '$src/components/places/parse_quote_address';
	import { afterUpdate, onMount } from 'svelte';
	import { addressType, newAddress } from '$src/libs/types/address';
	import { isNumeric } from '$src/libs/utils/is_numeric';
	import type { Writable } from "svelte/store";
	import type { zodQuoteRequestType } from '$src/libs/types/quote';
	import { newDeliveryLocation } from '$src/libs/types/delivery_location';
	export let quote_store:Writable<zodQuoteRequestType> 
	export let Id: string;
	export let placeholder: string;
	export let Klass: string;
	function onZipEmpty (){
		if($quote_store?.delivery?.address.zip_code == ""){
			$quote_store.delivery = newDeliveryLocation()
			$quote_store.delivery.address.zip_code = ""
		}
	}
	onMount( () => {
		let options = ['address_component', 'formatted_address', 'geometry', 'name'];
		const deliveryInput = document.getElementById(Id);
		// @ts-ignore
		const autocomplete_delivery = new google.maps.places.Autocomplete(deliveryInput, options);
		autocomplete_delivery.addListener('place_changed', () => {
			const place = autocomplete_delivery.getPlace();
			const address = parseAddress(place);
            let isnum = /^\d+$/.test(address.zip_code);
            let zip_code = isnum == true ? address.zip_code : ""
            if ( zip_code != "" && zip_code.length == 5 ) {
                $quote_store.delivery.address = address;
                $quote_store.delivery.delivery_address_zip_code_error.valid = true
            }else{
                $quote_store.delivery.address = newAddress(addressType.delivery)
                $quote_store.delivery.delivery_address_zip_code_error.valid = false
            }
		});
	})
    afterUpdate(()=>{
        if($quote_store.delivery.address.free_form_address.length == 5 && isNumeric($quote_store.delivery.address.free_form_address)){
            $quote_store.delivery.address.zip_code = $quote_store.delivery.address.free_form_address
        }
    })
</script>

<input id={Id} class={Klass} {placeholder} bind:value={$quote_store.delivery.address.zip_code} on:change={onZipEmpty}/>
