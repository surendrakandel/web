<script lang="ts">
	import { nextJump } from '$src/libs/utils/nest_jump';
	import { isEmail } from '$src/libs/utils/valid_email';
	import { isNumeric } from '$src/libs/utils/is_numeric';
	import { writable, type Writable } from 'svelte/store';
	import { newBooking, type zodBookRequestType } from '$src/libs/types/zod_book_request';
	export let booking_store:Writable<zodBookRequestType>  = writable(newBooking());
	let mounted = true;
	// onMount(() => {
	// 	$booking_store.delivery.contact == null ||
	// 	$booking_store.delivery.contact == undefined
	// 		? ($booking_store.delivery.contact = newBookContact(bookInputType.delivery))
	// 		: () => {};
	// 	mounted = true;
	// });
	function CheckCompanyName(): boolean {
		let valid = true;
		booking_store.update((value) => {
			if(value != null){
				if (value?.delivery?.company_name && value?.delivery?.company_name.length < 2) {
				value.delivery.receiver_company_name_error.valid = false;
				valid = false;
				} else {
					value.delivery.receiver_company_name_error.valid = true;
				}
				return value;
			}
			return value
			
		});
		return valid;
	}
	function CheckFirstName(): boolean {
		let valid = true;
		booking_store.update((value) => {
			if ($booking_store.delivery.contact.first_name.length < 2) {
				value.delivery.receiver_first_name_error.valid = false;
				valid = false;
			} else {
				value.delivery.receiver_first_name_error.valid = true;
			}
			return value;
		});
		return valid;
	}
	function CheckLastName(): boolean {
		let valid = true;
		booking_store.update((value) => {
			if ($booking_store.delivery.contact.last_name.length < 2) {
				value.delivery.receiver_last_name_error.valid = false;
				valid = false;
			} else {
				value.delivery.receiver_last_name_error.valid = true;
			}
			return value;
		});
		return valid;
	}
	function CheckEmail(): boolean {
		let valid = true;
		booking_store.update((value) => {
			if (!isEmail($booking_store.delivery.contact.email_address)) {
				value.delivery.receiver_email_error.valid = false;
				valid = false;
			} else {
				value.delivery.receiver_email_error.valid = true;
			}
			return value;
		});
		return valid;
	}
	function CheckPhoneNumber(): boolean {
		let valid = true;
		booking_store.update((value) => {
			if (
				!isNumeric(value.delivery.contact.phone_number) &&
				value.delivery.contact.phone_number.length > 9 &&
				value.delivery.contact.phone_number.length < 12
			) {
				value.delivery.receiver_email_error.valid = false;
				valid = false;
			} else {
				value.delivery.receiver_email_error.valid = true;
			}
			return value;
		});
		return valid;
	}
</script>

{#if mounted}
	<div class="flex flex-col py-3">
		<div class="flex flex-col">
			<label class="text-lg font-semibold pb-2" for="receiver_company_name"
				>Company Name</label
			>
			<input
				class="w-full"
				id="receiver_company_name"
				type="text"
				name="receiver_company_name"
				placeholder="receiver company name"
				bind:value={$booking_store.delivery.company_name}
				on:change={() => {
					let valid = CheckCompanyName();
					if (!valid) {
						return;
					}
					nextJump('receiver_first_name');
				}}
			/>
			{#if $booking_store?.delivery?.receiver_company_name_error?.valid != true}
				<h3
					class={`text-error ${$booking_store?.delivery?.receiver_company_name_error?.clas}`}
					id={$booking_store?.delivery?.receiver_company_name_error?.id}
				>
					{$booking_store?.delivery?.receiver_company_name_error
						?.error_message}
				</h3>
			{/if}
		</div>
		<div class="flex flex-col sm:flex-row w-full gap-2">
			<div class="flex flex-col sm:w-1/2">
				<label class="text-lg font-semibold py-2" for="receiver_first_name"
					>First Name</label
				>
				<input
					id="receiver_first_name"
					class="w-full"
					type="text"
					name="receiver_first_name"
					placeholder="receiver first name"
					bind:value={$booking_store.delivery.contact.first_name}
					on:change={() => {
						let valid = CheckFirstName();
						if (!valid) {
							return;
						}
						nextJump('receiver_last_name');
					}}
				/>
				{#if $booking_store?.delivery?.receiver_first_name_error?.valid != true}
					<h3
						class={`text-error ${$booking_store?.delivery?.receiver_first_name_error?.clas}`}
						id={$booking_store?.delivery?.receiver_first_name_error?.id}
					>
						{$booking_store?.delivery?.receiver_first_name_error
							?.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex flex-col sm:w-1/2">
				<label class="text-lg font-semibold py-2" for="receiver_last_name">Last Name</label>
				<input
					class="w-full"
					id="receiver_last_name"
					type="text"
					name="receiver_last_name"
					placeholder="receiver last name"
					on:change={() => {
						let valid = CheckLastName();
						if (!valid) {
							return;
						}
						nextJump('receiver_email_address');
					}}
					bind:value={$booking_store.delivery.contact.last_name}
				/>
				{#if $booking_store?.delivery?.receiver_last_name_error?.valid != true}
					<h3
						class={`text-error ${$booking_store?.delivery?.receiver_last_name_error?.clas}`}
						id={$booking_store?.delivery?.receiver_last_name_error?.id}
					>
						{$booking_store?.delivery?.receiver_last_name_error
							?.error_message}
					</h3>
				{/if}
			</div>
		</div>
		<div class="flex flex-col md:flex-row w-full gap-2 justify-around">
			<div class="flex flex-col md:w-[60%]">
				<label class="text-lg font-semibold py-2" for="receiver_email_address"
					>Email Address</label
				>
				<input
					class="w-full"
					id="receiver_email_address"
					type="email"
					name="receiver_email_address"
					placeholder="receiver email"
					on:change={() => {
						let valid = CheckEmail();
						if (!valid) {
							return;
						}
						nextJump('receiver_phone_number');
					}}
					bind:value={$booking_store.delivery.contact.email_address}
				/>
				{#if $booking_store?.delivery?.receiver_email_error?.valid != true}
					<h3
						class={`text-error ${$booking_store?.delivery?.receiver_email_error?.clas}`}
						id={$booking_store?.delivery?.receiver_email_error?.id}
					>
						{$booking_store?.delivery?.receiver_email_error?.error_message}
					</h3>
				{/if}
			</div>
			<div class="flex gap-2 w-full md:w-[40%]">
				<div class="flex flex-col w-[70%]">
					<label class="text-lg font-semibold py-2" for="receiver_phone_number"
						>Phone Number</label
					>
					<input
						class=""
						id="receiver_phone_number"
						type="tel"
						name="receiver_phone_number"
						placeholder="receiver phone number"
						on:change={() => {
							let valid = CheckPhoneNumber();
							if (!valid) {
								return;
							}
							nextJump('shipment_description_0');
						}}
						bind:value={$booking_store.delivery.contact.phone_number}
					/>
					{#if $booking_store?.delivery?.receiver_phone_number_error?.valid != true}
						<h3
							class={`text-error ${$booking_store?.delivery?.receiver_phone_number_error?.clas}`}
							id={$booking_store?.delivery?.receiver_phone_number_error
								?.id}
						>
							{$booking_store?.delivery?.receiver_phone_number_error
								?.error_message}
						</h3>
					{/if}
				</div>
				<div class="flex flex-col w-[30%] md:pr-2">
					<label class="text-lg font-semibold py-2" for="receiver_phone_ext">Ext</label>
					<input
						class=""
						id="receiver_phone_ext"
						type="number"
						name="receiver_phone_ext"
						placeholder="ext"
						on:change={() => {
							nextJump('delivery_instructions');
						}}
						bind:value={$booking_store.delivery.contact
							.phone_number_extension}
					/>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<label class="text-lg font-semibold py-3" for="delivery_instructions"
				>delivery instruction</label
			>
			<textarea
				class="text-white text-sm p-2"
				placeholder="delivery instructions"
				id="delivery_instructions"
				bind:value={$booking_store.delivery.receiver_instructions}
			/>
		</div>
	</div>
{/if}
