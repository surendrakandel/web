<script lang="ts">
import { newBooking, type zodBookRequestType } from '$src/libs/types/zod_book_request';
import { writable, type Writable } from "svelte/store";
export let booking_store:Writable<zodBookRequestType> = writable(newBooking())
</script>

<div class="flex flex-col">
	<h3 class="text-md font-semibold py-2" for="shipper_location_with_dock">Pickup Services</h3>
	<div class="flex flex-col">
		{#if $booking_store.pickup.PICKUP_LOCATION_WITH_DOCK == true}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						class="checkbox checkbox-primary"
						id="shipper_location_with_dock"
						type="checkbox"
						name="shipper_location_with_dock"
						disabled
						readonly
						bind:checked={$booking_store.pickup.PICKUP_LOCATION_WITH_DOCK}
					/>
				</div>
				<label class="font-semibold text-lg" for="shipper_location_with_dock">
					Location with loading dock</label
				>
			</div>
		{/if}
		{#if $booking_store.pickup.LIFTGATE_PICKUP == true}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						class="checkbox checkbox-primary"
						id="liftgate_pickup"
						type="checkbox"
						name="liftgate_pickup"
						disabled
						readonly
						bind:checked={$booking_store.pickup.LIFTGATE_PICKUP}
					/>
				</div>
				<label class="font-semibold text-lg" for="liftgate_pickup">Liftgate Required</label>
			</div>
		{/if}
		{#if $booking_store.pickup.PICKUP_NOTIFICATION == true}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						id="shipper_notification"
						type="checkbox"
						class="checkbox checkbox-primary"
						name="shipper_notification"
						disabled
						readonly
						bind:checked={$booking_store.pickup.PICKUP_NOTIFICATION}
					/>
				</div>
				<label class="font-semibold text-lg" for="shipper_notification">Pickup Notificaton</label>
			</div>
		{/if}
		{#if $booking_store.pickup.INSIDE_PICKUP == true}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						id="inside_pickup"
						type="checkbox"
						name="inside_pickup"
						class="checkbox checkbox-primary"
						disabled
						readonly
						bind:checked={$booking_store.pickup.INSIDE_PICKUP}
					/>
				</div>
				<label class="font-semibold text-lg" for="inside_pickup">Inside Pickup</label>
			</div>
		{/if}
		{#if $booking_store.pickup.PICKUP_APPOINTMENT == true}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						id="shipper_appointment"
						type="checkbox"
						name="shipper_appointment"
						class="checkbox checkbox-primary"
						disabled
						readonly
						bind:checked={$booking_store.pickup.PICKUP_APPOINTMENT}
					/>
				</div>
				<label class="font-semibold text-lg" for="shipper_appointment">Pickup Appointment</label>
			</div>
		{/if}
	</div>
</div>
<div class="flex flex-col">
	<h3 class="text-md font-semibold py-2">Delivery Services</h3>
	<div class="flex flex-col">
		{#if $booking_store.delivery.DELIVERY_LOCATION_WITH_DOCK}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						class="checkbox  checkbox-primary"
						id="delivery_location_with_dock"
						type="checkbox"
						name="delivery_location_with_dock"
						disabled
						readonly
						bind:checked={$booking_store.delivery.DELIVERY_LOCATION_WITH_DOCK}
					/>
				</div>
				<label class="font-semibold text-lg" for="delivery_location_with_dock">
					Location with loading dock</label
				>
			</div>
		{/if}
		{#if $booking_store.delivery.LIFTGATE_DELIVERY}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						class="checkbox checkbox-primary"
						id="liftgate_delivery"
						type="checkbox"
						name="liftgate_delivery"
						disabled
						readonly
						bind:checked={$booking_store.delivery.LIFTGATE_DELIVERY}
					/>
				</div>
				<label class="font-semibold text-lg" for="liftgate_delivery">Liftgate Required</label>
			</div>
		{/if}
		{#if $booking_store.delivery.DELIVERY_NOTIFICATION}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						id="delivery_notification"
						type="checkbox"
						class="checkbox   checkbox-primary"
						name="delivery_notification"
						disabled
						readonly
						bind:checked={$booking_store.delivery.DELIVERY_NOTIFICATION}
					/>
				</div>
				<label class="font-semibold text-lg" for="delivery_notification"
					>Delivery Notification</label
				>
			</div>
		{/if}
		{#if $booking_store.delivery.INSIDE_DELIVERY}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						id="inside_delivery"
						type="checkbox"
						name="inside_delivery"
						class="checkbox   checkbox-primary"
						disabled
						readonly
						bind:checked={$booking_store.delivery.INSIDE_DELIVERY}
					/>
				</div>
				<label class="font-semibold text-lg" for="inside_delivery">Inside Delivery</label>
			</div>
		{/if}
		{#if $booking_store.delivery.DELIVERY_APPOINTMENT}
			<div class="itemWrapper">
				<div class="checkboxContainer">
					<input
						id="delivery_appointment"
						type="checkbox"
						name="delivery_appointment"
						class="checkbox  checkbox-primary"
						disabled
						readonly
						bind:checked={$booking_store.delivery.DELIVERY_APPOINTMENT}
					/>
				</div>
				<label class="font-semibold text-lg" for="delivery_appointment">Delivery Appointment</label>
			</div>
		{/if}
	</div>
</div>
