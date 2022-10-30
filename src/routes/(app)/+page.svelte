<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import type { HomePageType } from '$src/libs/types/home_page_type';
	import { zipCodeRegex } from '$src/libs/utils/regex';
	import { quote_store } from '$src/routes/(admin)/admin/quote/quote_store';
	import dataobj from "./data.json"
	//@ts-ignore
	let homePageData: HomePageType  = dataobj
	console.log(dataobj)
	type banner_data = {
		pickup_zip_code: string;
		delivery_zip_code: string;
		valid: boolean;
	};
	let data: banner_data = {
		pickup_zip_code: '',
		delivery_zip_code: '',
		valid: false
	};
	function HomePage() {
		quote_store.update((value) => {
			if (zipCodeRegex.test(data.pickup_zip_code) && zipCodeRegex.test(data.delivery_zip_code)) {
				if(value != null){
					value.pickup.address.zip_code = data.pickup_zip_code;
					value.delivery.address.zip_code = data.delivery_zip_code;
				}
			}
			return value;
		});
		goto('/admin/quote');
	}
</script>

<div class="h-[120vh] lg:h-[calc(100vh-60px)] mainContainer w-full" transition:fade>
	<div
		class="flex flex-col lg:flex-row gap-4 w-full h-full justify-around lg:justify-center max-w-screen-2xl  mx-auto px-12 py-20 lg:py-0"
	>
		<div class="flex flex-col w-full lg:w-1/2  lg:h-full justify-center items-center">
			<h1 class="text-white text-left text-4xl sm:text-4xl pt-7  sm:pt-12 max-w-[600px]">
				{ homePageData.introheading }
			</h1>
			<!-- <div class="flex flex-col  lg:flex-row gap-3 items-center justify-center pt-8">
				<div class="flex flex-col w-[100%] justify-center items-center py-2">
					<input
						id="pickup_zipcode"
						class="min-w-[100%] text-xs placeholder:font-space"
						placeholder="pickup zip code"
						bind:value={data.pickup_zip_code}
					/>
				</div>
				<div class="flex flex-col w-[100%] justify-center items-center py-2">
					<input
						id="delivery_zipcode"
						class="min-w-[100%] text-sm placeholder:font-space"
						placeholder="delivery zip code"
						bind:value={data.delivery_zip_code}
					/>
				</div>
			</div>
			<button
				on:click={HomePage}
				id="get_quote"
				class="btn-primary flex flex-col w-[100%] p-[16px] rounded-md text-white font-space justify-center font-semibold items-center mt-10 mb-4"
				style="background-color: #5CB971;">GET RATES</button
			> -->
			<p class="text-white text-2xl font-space  pt-5 font-semibold max-w-[600px]">
				<span class="text-white text-2xl font-space font-semibold">You</span> <span class="text-orange-400 text-2xl font-space font-semibold">focus </span>
				<span class="text-white text-2xl font-space font-semibold">on building <span class="text-orange-400 text-2xl font-space font-semibold"> best product</span>. We will take care of shipping.</span>
			</p>
			<div class="pt-20 flex flex-col gap-5 md:gap-0 md:flex-row w-full justify-center lg:justify-start md:items-center  max-w-[600px]">
				<div class="rounded-md shadow flex w-full md:w-[50%]">
					<a href="/sign-up" class="rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base  text-white hover:bg-indigo-700  hover:text-gray-700  md:text-lg  font-space w-full text-center font-bold">Get started</a>
				</div>
				<div class="rounded-md shadow flex w-full md:w-[50%] md:ml-4">
					<a href="/demo" class="rounded-md border border-transparent bg-firstshipper-primary-default px-8 py-3 text-base   hover:bg-firstshipper-primary-100 hover:text-black text-white  md:text-lg text-center font-bold font-space w-full">Live demo</a>
				  </div>
			</div>
		</div>
		<div class="flex flex-col  w-full lg:w-1/2 py-4 lg:h-full justify-center sidePallet mt-8">
		</div>

	</div>
</div>

<style>
	div {
		font-family: 'Goldman', 'courier';
	}
	.sidePallet {
		background-image: url('/images/banner/banner_img.png'); /* The image used */
		height: 700px; /* You must set a specified height */
		background-position: center; /* Center the image */
		background-repeat: no-repeat; /* Do not repeat the image */
		background-size: contain; /* Resize the background image to cover the entire container */
	}
	.mainContainer {
		background-image: linear-gradient(260.3deg, #1b2752 -7.47%, #111126 134.71%);
	}
</style>
