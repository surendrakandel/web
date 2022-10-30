<script lang="ts">
	import { goto } from '$app/navigation';
	import { basic_provider, newBasicInfo } from '$src/stores/basic_provider';
	import { booking_store } from '$src/routes/(admin)/admin/rates/booking_store';
	import { quote_store } from '$src/routes/(admin)/admin/quote/quote_store';
	import { unsubsList } from '$src/stores/unsubs';
	import { user_store } from '$src/stores/user_store';
	import { onMount } from 'svelte';
	import { Circle3 } from 'svelte-loading-spinners';
	import logOut from '$src/api/user/log_out';
	import { newBooking } from '$src/libs/types/zod_book_request';
	import { getBasicInfo } from '$src/api/business/get_basic_info';
	import { newQuote } from '$src/libs/types/quote';
	import { newUser } from '$src/libs/types/user';
	onMount(async () => {
		console.log("tryping to mount logout")
		localStorage.removeItem('basic_store_data');
		localStorage.removeItem('quote_request_data');
		localStorage.removeItem('booking_request_data');
		window.localStorage.clear();
		$booking_store = newBooking();
		$basic_provider = newBasicInfo();
		$quote_store = newQuote()
		$user_store = {token: "", user: undefined}
		//document.cookie = 'login_guard=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		unsubsList.update((value) => {
			console.log('starting unsub for localStorage', value);
			let i = 0;
			value.forEach((func) => {
				console.log(`unsubfunction ${i}`);
				i++;
				func();
			});
			return [];
		});
		let res = await logOut()
		console.log("logout res", res)
		goto("/")
	});
</script>

<div class="flex flex-col justify-center items-center w-full h-[500px] max-w-[calc(80rem+320px)]">
	<Circle3 size="60" unit="px" duration="1s" />
	<p class="text-md">Thank you for visiting firstshipper</p>
</div>
