<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { createBooking } from '$src/api/booking/create_booking';
	import PickupAddress from '$src/components/details/PickupAddress.svelte';
	import DeliveryAddress from '$src/components/details/DeliveryAddress.svelte';
	import ShipperDetails from '$src/components/details/ShipperDetails.svelte';
	import ReceiverDetails from '$src/components/details/ReceiverDetails.svelte';
	import ShipmentDetials from '$src/components/details/ShipmentDetails.svelte';
	import ShipmentInfo from '$src/components/details/ShipmentInfo.svelte';
	import { booking_store } from '$src/routes/(admin)/admin/rates/booking_store';
	import Card from '$src/components/widgets/Card.svelte';
	import Circle3 from 'svelte-loading-spinners/Circle3.svelte';
	import { BACKEND_URL, FRONTEND_URL } from '$src/api/config';
	import { sleep } from '$src/libs/utils/sleep';
	import { createBol } from '$src/api/bol/create';
	import { user_store_derived } from '$src/stores/user_store';
	import { newBooking, zodBookRequestSchema } from '$src/libs/types/zod_book_request';
	import type { booking_response } from '$src/gen/book';
	$: isShipmentIsBooked = false;
	$: isBolGenerateStarted = false;
	$: isBolGenerateFinished = false;
	$: isBookingStarted = false;
	$: isBookingFinished = false;
	function handleCancelBooking(){
		booking_store.update(()=>{
			return newBooking()
		})
		goto("/admin/quote")
	}
	onMount(() => {
		// booking_store.update((booking) => {
			
		// 	if (booking.pickup.contact == undefined || booking.pickup.contact == null) {
		// 		booking.pickup.contact = newBookContact(bookInputType.pickup);
		// 	}
		// 	if (booking.delivery.contact == undefined || booking.delivery.contact == null || booking.delivery.contact.first_name == undefined) {
		// 		booking.delivery.contact = newBookContact(bookInputType.delivery);
		// 	}
		// 	return booking;
		// });
		// let isValidDefaultPickupAddress =
		// 	$default_pickup_location_store.address.zip_code ==
		// 	$booking_store.pickup.address.zip_code;
		// if (!isValidDefaultPickupAddress) {
		// 	let shipping_zip_code = $booking_store.pickup.address.zip_code;
		// 	booking_store.update((booking) => {
		// 		booking.pickup.address = newBookPickupLocation().address;
		// 		booking.pickup.address.zip_code = shipping_zip_code;
		// 		return booking;
		// 	});
		// }
	});
	async function handleBookingRequest() {
		try {
			
			let data = zodBookRequestSchema.parse($booking_store)
		} catch (error) {
			
			console.log(error);
			return;
		}
		let bookingRes: booking_response = {
			shipment_details: undefined,
			commodities: [],
			pickup: undefined,
			delivery: undefined,
			bid: undefined,
			booking_success: false,
			DispatchResponse: undefined,
			booking_info: undefined,
			business_id: '',
			quote_id: '',
			svg_data: '',
			bol_url: ''
		};
		try {
			isBookingStarted = true;
			if($booking_store){
				bookingRes = await createBooking($booking_store);
			}
			await sleep(1000);
			//goto(`/bol/booking_id=${bookingRes.quote_id}&token=${$user_provider.token}`)
		} catch (error) {
			alert('Booking did not succeed, please call +17135162836 for booking');
			goto(FRONTEND_URL + 'admin/quote');
			return;
		}
		try {
			isBolGenerateStarted = true;
			let bolRes = await createBol(bookingRes?.quote_id);
			await sleep(1000);
			window.location.href = `${BACKEND_URL}bol/v1/${bolRes.quote_id}`;
		} catch (error) {
			goto(`/documents/manual/booking_id=${bookingRes.quote_id}&token=${$user_store_derived?.token}`);
		}
		// isBookingFinished = true
		// isBolGenerateStarted = true
		// Promise.all([simulateGoToDynamicBookPage(bookingRes.quote_id),createBol(bookingRes.quote_id)]).then((res)=>{
		//   console.log(res)
		//
		//   isBolGenerateFinished = true
		//   toast.push("Booking succeeded. you can download or print bol next, also Copy of the BOL will be sent to your email", InfoToastOptions)
		//   if(browser){
		//     goto(bookingRes?.bol_url)
		//   }
		// }).catch((error)=>{
		//   prompt("booking was created. Please check your email for Bill of lading.")
		//   console.log(error)
		// })
	}
	let pickupdate = $booking_store?.shipment_details.display_date ? $booking_store.shipment_details.display_date.split('T')[0] : "";
</script>

{#if isBolGenerateStarted}
	<div
		class=" cardWrapper inset-0  flex h-[300px] items-center m-2 justify-center duration-300 transition-opacity"
	>
		<Circle3 size="60" unit="px" duration="1s" />
		<h3 class="mt-3 text-black font-mono text-lg sm:text-md">Creating BOL</h3>
	</div>
{/if}
{#if isBookingStarted && !isBookingFinished && !isBolGenerateStarted && !isBolGenerateFinished}
	<div
		class=" cardWrapper inset-0  flex h-[300px] items-center m-2 justify-center duration-300 transition-opacity"
	>
		<Circle3 size="60" unit="px" duration="1s" />
		<h3 class="mt-3 text-black font-mono text-lg sm:text-md">Booking Shipment</h3>
	</div>
{/if}
{#if !isBookingStarted && !isShipmentIsBooked && !isBolGenerateStarted && !isBolGenerateFinished && !isBookingFinished}
	<div class="flex flex-col max-w-[calc(80rem+320px) gap-3 mb-8">
		<label class="text-lg font-semibold" for="pickup_date">Pickup Date</label>
		<Card>
			<h3 class="py-2 text-lg font-bold">
				<i class="fa-solid fa-calendar-days text-2xl ml-3 font-bold" /><span class="ml-4 text-2xl"
					>{pickupdate}</span
				>
			</h3>
		</Card>
		<div class="flex flex-col 2xl:flex-row gap-3 w-full">
			<div class="flex flex-col 2xl:w-1/2">
				<label class="text-lg font-semibold" for="pickup_address">Pickup Address</label>
				<Card>
					<PickupAddress booking_store={booking_store}/>
				</Card>
			</div>
			<div class="flex flex-col  2xl:w-1/2">
				<label class="text-lg font-semibold" for="delivery_address">Delivery Address</label>
				<Card>
					<DeliveryAddress booking_store={booking_store}/>
				</Card>
			</div>
		</div>
		<div class="flex flex-col 2xl:flex-row gap-3 w-full">
			<div class="flex flex-col 2xl:w-1/2">
				<label class="text-lg font-semibold mt-2" id="shipper_details" for="shipper_details"
					>Shipper Details</label
				>
				<Card>
					<ShipperDetails booking_store={booking_store}/>
				</Card>
			</div>
			<div class="flex flex-col 2xl:w-1/2">
				<label class="text-lg font-semibold mt-2" id="receiver_details" for=""
					>Receiver Details</label
				>
				<Card>
					<ReceiverDetails  booking_store={booking_store}/>
				</Card>
			</div>
		</div>
		<label class="text-lg font-semibold" id="shipment_details" for="shipment_details"
			>Shipment Details</label
		>
		{#each $booking_store.commodities as _commo, _index}
			<Card>
				<ShipmentDetials   index={_index} booking_store={booking_store}/>
			</Card>
		{/each}
		<label class="text-lg font-semibold" for="ShipmentInfo">Shipment Info</label>
		<Card>
			<ShipmentInfo booking_store={booking_store}/>
		</Card>
		<div class="flex justify-between md:justify-start mt-4 mr-2">
			<button
				class="btn btn-primary min-w-[150px] md:min-w-[200px] text-white"
				style="background-color: #1B2752;"
				on:click|preventDefault={handleCancelBooking}
				>Cancel Booking
			</button>
			<div class="flex md:ml-[50px] justify-center items-center">
				<button
					style="background-color: #5CB971"
					type="submit"
					href="/admin/rates"
					class="btn btn-primary min-w-[180px] md:min-w-[300px] text-white items-center justify-center"
					on:click={handleBookingRequest}
				>
					Dispatch
				</button>
			</div>
		</div>
	</div>
{/if}
