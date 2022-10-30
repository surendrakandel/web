<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import type { zodBidType } from '$src/libs/types/bid';
	import type { Writable } from "svelte/store";
	import type { zodBookRequestType } from '$src/libs/types/zod_book_request';
	export let booking_store:Writable<zodBookRequestType> = undefined
	export let bid: zodBidType;
	let day = parseInt(bid?.transit_time) > 1 ? 'days' : 'day';
	function handleDetails() {
		booking_store.update((booking_data) => {
			booking_data.bid = bid;
			return booking_data;
		})
		if (browser) {
			goto('/admin/rates/details');
		}
	}
</script>

<div class="flex flex-col lg:flex-row gap-5   shadow-x    max-w-[1000px]  cardWrapper p-4 my-3">
	<figures class="flex items-center justify-center">
		<img src={bid.company_large_logo_url} class="logo" alt="company logo" />
	</figures>
	<div class="flex flex-col">
		<h3 class="company_name pb-1 text-lg font-semibold">{bid.carrier}</h3>
		<div class="py-3">
			<ul class="reting_star ul_li py-1">
				<li class="active"><i class="fas fa-star" /></li>
				<li class="active"><i class="fas fa-star" /></li>
				<li class="active"><i class="fas fa-star" /></li>
				<li class="active"><i class="fas fa-star" /></li>
				<li><i class="fas fa-star" /></li>
			</ul>
			<h6 class="info_text my-1 py-1 text-lg font-semibold">
				Transition time:
				<strong>{bid.transit_time} {day}</strong>
			</h6>
			<h6 class="info_text py-1 text-lg font-semibold">
				Estimated Delivery:
				<strong>{bid.delivery_date}</strong>
			</h6>
			<div class="price_text my-1">
				<strong>{bid?.amount?.net_amount | 0}</strong>
				<del>{bid?.amount?.net_amount + 75.0 | 0}</del>
			</div>
		</div>
		<button class="btn btn-primary max-w-[300px] text-white" type="button" on:click={handleDetails}
			>Book Now
		</button>
	</div>
</div>
