<script lang="ts">
	import cookie from 'cookie';
	import { goto } from '$app/navigation';
	import { zipCodeRegex } from '$src/libs/utils/regex';
	import type { booking_response } from '$src/gen/book';
	import { browser } from '$app/environment';
	import { quote_store } from '$src/routes/(admin)/admin/quote/quote_store';
	let bookings: booking_response[] = [];
	let ready = false;
	let data = {
		valid: true,
		zip_code: ""
	};
	$quote_store.delivery.address.zip_code = '';
	let cookies: Record<string, string> = {};
	if (browser) {
		cookies = cookie.parse(document.cookie);
	}
	let hasBookings:boolean = false
	console.log(cookies);
	// onMount(() => {
	// 	getBookings()
	// 		.then((bookingsRes) => {
	// 			if(bookingsRes.length > 0){
	// 				hasBookings = true 
	// 				bookings = bookingsRes;
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// 	ready = true;
	// });

	function getQuote() {
		if (handleZipInput()) {
			$quote_store.shipment_details.edit_mode = true
			goto('/admin/quote');
		}
	}
	function handleZipInput(): boolean {
		$quote_store.delivery.address.zip_code = '';
		if (!zipCodeRegex.test(data.zip_code)) {
			data.valid = false;
			data.zip_code = "";
			return false;
		} else {
			$quote_store.delivery.address.zip_code = data.zip_code
			return true;
		}
	}
</script>

<h2 class="text-2xl font-bold my-4">My Dashboard</h2>
<div class="flex flex-col cardWrapper  gap-4">
	<label class="item_title label" for="destination_zip">Book a shipment</label>
	<input
		type="text"
		name="receiver_zipcode"
		placeholder="Destination ZIP"
		class="max-w-[500px]"
		id="receiver_zipcode"
		on:change={handleZipInput}
		bind:value={data.zip_code}
	/>
	{#if data.valid != true}
		<h3 class="text-error">Delivery ZipCode is not valid</h3>
	{/if}
	<button
		type="submit"
		class="btn text-white max-w-[300px] max-h-[70px] h-[60px] rounded-md my-3"
		style="background-color: #5cb971;"
		on:click={getQuote}>Get Quote</button
	>
</div>
{#if ready}
	<h3 class="text-lg font-bold my-4">Recent Bookings</h3>
	<div class="cardWrapper">
		<div class="flex flex-col">
			<div class="hidden md:flex w-1/2 md:w-full md:justify-start flex-col md:flex-row gap-2">
				<h3 class="w-full md:w-1/6">S.N</h3>
				<h3 class="w-full md:w-1/6">Shipment ID</h3>
				<h3 class="w-full md:w-1/6">Origin</h3>
				<h3 class="w-full md:w-1/6">Destination</h3>
				<h3 class="w-full md:w-1/6">Pickup Date</h3>
				<h3 class="w-full md:w-1/6">Download BOL</h3>
			</div>
			{#if hasBookings}
				{#each bookings as booking, index}
				<div class="flex w-full mt-3">
					<div class="flex flex-col w-1/2  gap-2 md:hidden">
						<h3 class="w-full">S.N</h3>
						<h3 class="w-full">Shipment ID</h3>
						<h3 class="w-full">Origin</h3>
						<h3 class="w-full">Destination</h3>
						<h3 class="w-full">Pickup Date</h3>
						<h3 class="w-full">Download BOL</h3>
					</div>
					{#if bookings.length > 0}
						<div
							class="flex  flex-col w-1/2  md:flex-row md:w-full md:justify-start gap-2 lg:border-b-2 border-gray-400"
						>
							<h3 class="w-full md:w-1/6">{index + 1}</h3>
							<h3 class="w-full md:w-1/6">{booking.quote_id}</h3>
							<h3 class="w-full md:w-1/6">
								{booking?.pickup?.address?.zip_code}, {booking?.pickup?.address?.city}
							</h3>
							<h3 class="w-full md:w-1/6">
								{booking?.delivery?.address?.zip_code}, {booking?.delivery?.address?.city}
							</h3>
							<h3 class="w-full md:w-1/6">{booking?.shipment_details?.display_date}</h3>
							<a class="w-full md:w-1/6 max-h-[40px]" href={booking.bol_url} target="blank">
								<i class="fa-solid fa-cloud-arrow-down text-xl text-green-600" />
							</a>
						</div>
					{/if}
				</div>
			{/each}
			{/if}
		</div>
	</div>
{/if}
