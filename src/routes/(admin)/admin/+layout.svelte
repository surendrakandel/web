<script lang="ts">
	import DashFooter from '$src/components/core/footer/Dashfooter/index.svelte';
	import { page } from '$app/stores';
	import { right_menu_provider, toggle_state_provider } from '$src/stores/nav_state_provider';
	import Nav from '$src/components/core/navbar/Index.svelte';
	import Close from '$src/components/core/navbar/NavToggler/Close.svelte';
	import { onMount } from 'svelte';
	import { quote_store } from '$src/routes/(admin)/admin/quote/quote_store';
	import { afterNavigate, goto } from '$app/navigation';
	import Circle3 from 'svelte-loading-spinners/Circle3.svelte';
	import { ErrorToastOptions } from '$src/libs/utils/toast_options';
	import { validateToken } from '$src/api/user/validate_token';
	import { toast } from '@zerodevx/svelte-toast';
	import { newQuote } from '$src/libs/types/quote';
	import { getBasicInfo } from '$src/api/business/get_basic_info';
	let loading = true;
	afterNavigate((value) => {
		console.log('in afternavigate: ', value);
		toggle_state_provider.update((value) => {
			if (value) {
				return !value;
			}
			return value;
		});
	});
	let mounted = false;
	onMount(async () => {
		debugger
		let valid = await validateToken();
		await getBasicInfo();
		debugger;
		if (valid == false) {
			toast.push('please login', ErrorToastOptions);
			loading = false;
			goto('/login');
			return;
		}
		$quote_store = newQuote();
		loading = false;
		mounted = true;
	});
</script>

{#if loading}
	<div
		class="inset-0 bg-white flex w-full min-h-[400px] items-center justify-center duration-300 transition-opacity"
	>
		<div class="flex flex-col pb-[100px] w-full justify-center items-center">
			<Circle3 size="60" unit="px" duration="1s" />
			<div class="mt-3 text-black font-mono text-lg sm:text-md">Refreshing</div>
		</div>
	</div>
{/if}
{#if mounted}
	<Nav />
	<div class="lg:ml-[160px] max-w-[calc(80rem+320px)] min-h-[100vh] mt-[60px] mb-[50px]">
		<!-- {#if $page.url.pathname.includes("quote")}
  <div class="sticky flex flex-wrap   top-[48px] sm:top-[60px] subNav p-2">
    <span class:active={$page.url.pathname == "/admin/quote"} href="/admin/quote">
      Information
    </span>
    <span class:active={$page.url.pathname == "/admin/quote/rates"} href="/admin/quote/rates">
      Rates
    </span>
    <span class:active={$page.url.pathname == "/admin/quote/details"} href="#!">Details</span>
    <span class:active={$page.url.pathname == "/admin/quote/payment"} href="#!">
      Payment
    </span>
  </div>
  {/if} -->
		<div class="p-2">
			<slot />
		</div>
		{#if $right_menu_provider}
			<ul
				class="flex flex-col   fixed  bottom-[70px] right-[5px] w-[250px] max-w-[90%] transition-[transform 0.12s ease-out 0s] justify-between bg-[#1B2752] rounded-sm pl-3  text-white pb-4 h-[300px]"
			>
				<button
					on:click={() => ($right_menu_provider = !$right_menu_provider)}
					class=" self-end py-2 px-2 h-10"
				>
					<Close />
				</button>
				<li class:active={$page.url.pathname == '/admin/documents'}>
					<a href="/admin/documents" class="flex  gap-4">
						<span>
							<img
								src="/images/icons/document.svg"
								width="26"
								height="26"
								alt="documents"
								class="bg-white rounded-sm"
							/>
						</span>
						<span>Documents</span>
					</a>
				</li>
				<li class:active={$page.url.pathname == '/admin/claims'}>
					<a href="/admin/claims" class="flex gap-4">
						<span>
							<img
								src="/images/icons/claims.svg"
								width="26"
								height="26"
								alt="claims"
								class="bg-white rounded-sm"
							/>
						</span>
						<span>Claims</span>
					</a>
				</li>
				<li class:active={$page.url.pathname == '/admin/settings'}>
					<a href="/admin/settings" class="flex gap-4">
						<span>
							<img
								src="/images/icons/customer.svg"
								width="26"
								height="26"
								alt="customer"
								class="bg-white rounded-sm"
							/>
						</span>
						<span>Customer</span>
					</a>
				</li>
				<li class:active={$page.url.pathname == '/admin/feedback'}>
					<a href="/admin/feedback" class="flex  gap-4">
						<span>
							<img
								src="/images/icons/feedback.svg"
								width="26"
								height="26"
								alt="feedback"
								class="bg-white rounded-sm"
							/>
						</span>
						<span>Feedback</span>
					</a>
				</li>
			</ul>
		{/if}
	</div>
	<DashFooter />
{/if}
