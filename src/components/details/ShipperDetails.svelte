<script lang="ts">
	import { nextJump } from '$src/libs/utils/nest_jump';
	import { isNumeric } from '$src/libs/utils/is_numeric';
	import { isEmail } from '$src/libs/utils/valid_email';
	import { newBooking, type zodBookRequestType } from '$src/libs/types/zod_book_request';
	import { writable, type Writable } from "svelte/store";
	import { handleAxiosError } from '$src/libs/utils/axios_error';
	import { goto } from '$app/navigation';
	import { bookInputType, newBookContact } from '$src/libs/types/book';
	import { user_store } from '$src/stores/user_store';
	import { onMount } from 'svelte';
	import type { basic_info } from '$src/gen/basic_info';
	import { getBasicInfo } from '$src/api/business/get_basic_info';
	export let booking_store:Writable<zodBookRequestType> = writable(newBooking());
	let mounted = false;
	onMount(() => {
		$booking_store.pickup.contact == null ||
		$booking_store.pickup.contact == undefined
			? ($booking_store.pickup.contact = newBookContact(bookInputType.pickup))
			: () => {};
		if ($user_store?.user != undefined && $user_store?.user != null) {
			if (
				$booking_store.pickup.contact == undefined ||
				$booking_store.pickup.contact == null
			) {
				$booking_store.pickup.contact = newBookContact(bookInputType.pickup);
			}
			$booking_store.pickup.contact.first_name = $user_store?.user?.first_name;
			$booking_store.pickup.contact.last_name = $user_store?.user?.last_name;
			$booking_store.pickup.contact.email_address = $user_store?.user?.email;
			$booking_store.pickup.contact.phone_number =
				$user_store?.user?.phone_numbers[0];
		} else {
			getBasicInfo()
		}
		mounted = true;
	});
	function CheckCompanyName(): boolean {
		let valid = true;
		if ($booking_store?.pickup?.company_name && $booking_store?.pickup?.company_name.length< 2) {
			$booking_store.pickup.shipper_company_name_error.valid = false;
			valid = false;
		} else {
			$booking_store.pickup.shipper_company_name_error.valid = true;
		}
		return valid;
	}
	function CheckFirstName(): boolean {
		let valid = true;
		if ($booking_store.pickup.contact.first_name.length < 2) {
			$booking_store.pickup.shipper_first_name_error.valid = false;
			valid = false;
		} else {
			$booking_store.pickup.shipper_first_name_error.valid = true;
		}
		return valid;
	}
	function CheckLastName(): boolean {
		let valid = true;
		if ($booking_store.pickup.contact.last_name.length < 2) {
			$booking_store.pickup.shipper_last_name_error.valid = false;
			valid = false;
		} else {
			$booking_store.pickup.shipper_last_name_error.valid = true;
		}
		return valid;
	}
	function CheckEmail(): boolean {
		let valid = true;
		if (!isEmail($booking_store?.pickup?.contact?.email_address)) {
			$booking_store.pickup.shipper_email_error.valid = false;
			valid = false;
		} else {
			$booking_store.pickup.shipper_email_error.valid = true;
		}
		return valid;
	}
	function CheckPhoneNumber(): boolean {
		let valid = true;
		if (
			!isNumeric($booking_store.pickup.contact.phone_number) &&
			$booking_store.pickup.contact.phone_number.length > 9 &&
			$booking_store.pickup.contact.phone_number.length < 12
		) {
			$booking_store.pickup.shipper_email_error.valid = false;
			valid = false;
		} else {
			$booking_store.pickup.shipper_email_error.valid = true;
			valid = true;
		}
		return valid;
	}
</script>

{#if mounted}
	<div class="flex flex-col py-3">
		<div class="flex flex-col">
			<label class="text-lg font-semibold pb-2" for="shipper_company_name">Company Name</label
			>
			<input
				class="w-full"
				id="shipper_company_name"
				type="text"
				name="shipper_company_name"
				placeholder="shipper company name"
				bind:value={$booking_store.pickup.company_name}
				on:change={() => {
					let valid = CheckCompanyName();
					if (!valid) {
						return;
					}
					nextJump('shipper_first_name');
				}}
			/>
			{#if $booking_store?.pickup?.shipper_company_name_error?.valid != true}
				<h3
					class={`text-error ${$booking_store?.pickup?.shipper_company_name_error?.clas}`}
					id={$booking_store?.pickup?.shipper_company_name_error?.id}
				>
					{$booking_store?.pickup?.shipper_company_name_error?.error_message}
				</h3>
			{/if}
		</div>
		<div class="flex flex-col sm:flex-row w-full gap-2">
			<div class="flex flex-col sm:w-1/2">
				<label class="text-lg font-semibold py-2" for="shipper_first_name">First Name</label
				>
				<input
					id="shipper_first_name"
					class="w-full"
					type="text"
					name="shipper_first_name"
					placeholder="shipper first name"
					bind:value={$booking_store.pickup.contact.first_name}
					on:change={() => {
						let valid = CheckFirstName();
						if (!valid) {
							return;
						}
						nextJump('shipper_last_name');
					}}
				/>
				{#if $booking_store?.pickup?.shipper_first_name_error?.valid != true}
					<h3
						class={`text-error ${$booking_store?.pickup?.shipper_first_name_error?.clas}`}
						id={$booking_store?.pickup?.shipper_first_name_error?.id}
					>
						{$booking_store?.pickup?.shipper_first_name_error?.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex flex-col sm:w-1/2">
				<label class="text-lg font-semibold py-2" for="shipper_last_name">Last Name</label>
				<input
					class="w-full"
					id="shipper_last_name"
					type="text"
					name="shipper_last_name"
					placeholder="shipper last name"
					on:change={() => {
						let valid = CheckLastName();
						if (!valid) {
							return;
						}
						nextJump('shipper_email_address');
					}}
					bind:value={$booking_store.pickup.contact.last_name}
				/>
				{#if $booking_store?.pickup?.shipper_last_name_error?.valid != true}
					<h3
						class={`text-error ${$booking_store?.pickup?.shipper_last_name_error?.clas}`}
						id={$booking_store?.pickup?.shipper_last_name_error?.id}
					>
						{$booking_store?.pickup?.shipper_last_name_error?.error_message}
					</h3>
				{/if}
			</div>
		</div>
		<div class="flex flex-col md:flex-row w-full gap-2 justify-around">
			<div class="flex flex-col md:w-[60%]">
				<label class="text-lg font-semibold py-2" for="shipper_email_address"
					>Email Address</label
				>
				<input
					class="w-full"
					id="shipper_email_address"
					type="email"
					name="shipper_email_address"
					placeholder="shipper email"
					on:change={() => {
						let valid = CheckEmail();
						if (!valid) {
							return;
						}
						nextJump('shipper_phone_number');
					}}
					bind:value={$booking_store.pickup.contact.email_address}
				/>
				{#if $booking_store.pickup.shipper_email_error.valid != true}
					<h3
						class={`text-error ${$booking_store?.pickup?.shipper_email_error?.clas}`}
						id={$booking_store?.pickup?.shipper_email_error?.id}
					>
						{$booking_store?.pickup?.shipper_email_error?.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex gap-2 w-full md:w-[40%]">
				<div class="flex flex-col w-[70%]">
					<label class="text-lg font-semibold py-2" for="shipper_phone_number"
						>Phone Number</label
					>
					<input
						class=""
						id="shipper_phone_number"
						type="tel"
						name="shipper_phone_number"
						placeholder="phone number"
						on:change={() => {
							let valid = CheckPhoneNumber();
							if (!valid) {
								return;
							}
							nextJump('shipment_description_0');
						}}
						bind:value={$booking_store.pickup.contact.phone_number}
					/>
					{#if $booking_store?.pickup?.shipper_phone_number_error?.valid != true}
						<h3
							class={`text-error ${$booking_store?.pickup?.shipper_phone_number_error?.clas}`}
							id={$booking_store?.pickup?.shipper_phone_number_error?.id}
						>
							{$booking_store?.pickup?.shipper_phone_number_error
								?.error_message}
						</h3>
					{/if}
				</div>
				<div class="flex flex-col w-[30%] md:pr-2">
					<label class="text-lg font-semibold py-2" for="shipper_phone_ext">Ext</label>
					<input
						class=""
						id="shipper_phone_ext"
						type="number"
						name="shipper_phone_ext"
						placeholder="ext"
						on:change={() => nextJump('pickup_instructions')}
						bind:value={$booking_store.pickup.contact.phone_number_extension}
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<label class="text-lg font-semibold py-3" for="pickup_instructions"
				>pickup instruction</label
			>
			<textarea
				class="text-white text-md p-2"
				placeholder="pickup instructions"
				id="pickup_instructions"
				bind:value={$booking_store.pickup.shipper_instructions}
			/>
		</div>
	</div>
{/if}

<style>
	textarea::placeholder {
		font-size: 15px !important;
	}
</style>
