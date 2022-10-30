<script lang="ts">
	import Place from '$src/components/places/AddressInput.svelte';
	import type { address } from '$src/gen/address';
	import { Icon, Pencil } from 'svelte-hero-icons';
	import { onMount } from 'svelte';
	import { basic_store_helper, business_store, default_pickup_location_store } from '$src/stores/basic_provider';
	import { getBasicInfo } from '$src/api/business/get_basic_info';
	import { updatePickupAddress } from '$src/api/business/upate_pickup_address';
	let edit_default_pickup_location_active = false;
	function updateDefaultPickupLocation(data: address) {
		edit_default_pickup_location_active = false;
		updatePickupAddress(data)
			.then((res) => {
			})
			.catch((error) => {
				console.log(error);
			});
		edit_default_pickup_location_active = false;
	}
	function editDefaultPickupLocation() {
		edit_default_pickup_location_active = true;
		setTimeout(() => {
			edit_default_pickup_location_active = false;
		}, 20000);
	}

	onMount(() => {
		console.log('default pickup addrss compoennet businessStore', $business_store);
	});
</script>

<div class="cardWrapper w-full mt-4">
	<div class="flex flex-col sm:flex-row gap-2 sm:items-center min-h-[100px] w-full">
		<img src="/images/icons/pickup.svg" width="35px" alt="pickup icon" class="self-start" />
		<div class="flex flex-col  gap-2 pb-3  justify-start w-full  sm:ml-4">
			{#if $business_store.needs_default_pickup_address_update == undefined && edit_default_pickup_location_active != true}
				<h3>{$default_pickup_location_store?.address?.address_line_1 || ''}</h3>
				<h3>
					{$default_pickup_location_store?.address?.state || ''}
					{$default_pickup_location_store?.address?.zip_code || ''}
				</h3>
				<button
					class="btn max-w-[70px] mt-3"
					title="edit default pickup location"
					style="background-color: #5CB971; padding:0;"
					on:click={editDefaultPickupLocation}
				>
					<Icon src={Pencil} class="h-6" />
				</button>
			{:else}
				<label class="text-md font-bold mb-3" for="default_pickup_address"
					>Add Pickup Address</label
				>
				<Place
					Id={'default_pickup_address'}
					Klass={'w-full lg:max-w-[500px]'}
					placeholder={'street address'}
					functionToCallAfter={updateDefaultPickupLocation}
				/>
			{/if}
		</div>
	</div>
</div>
