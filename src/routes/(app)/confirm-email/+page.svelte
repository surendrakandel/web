<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import confirmEmail  from '$src/api/user/confirm-email';
	import type { confirm_email } from '$src/gen/confirm_email';
	import { sleep } from '$src/libs/utils/sleep';
	import { onMount } from 'svelte';
	import { Circle3 } from 'svelte-loading-spinners';
	let confirming = true;
	onMount(async () => {
		const email = $page.url.searchParams.get('email') || "";
		const token = $page.url.searchParams.get('token')|| "";
		const business_id = $page.url.searchParams.get('business_id')|| "";
		if (email == null || token == null) {
			document.location.replace('/login');
		}
		let data: confirm_email = {
			email: email,
			user_name: '',
			confirmation_code: '',
			business_id: business_id,
			token: token
		};
		console.log('confirm data', data);
		await confirmEmail(data)
			.then(async (res) => {
				let callRes = res;
				await sleep(1000).then(() => {
					console.log(callRes);
					goto('/login');
				});
			})
			.catch((error) => {
				console.log("could not confirm user's email", error);
				goto('/confirm-email/inform');
			});
		confirming = false;
	});
</script>

<div
	class="inset-0 bg-white flex w-full items-center justify-center duration-300 transition-opacity min-h-[100vh]"
>
	{#if confirming}
		<div class="flex flex-col pb-[100px] w-full justify-center items-center">
			<Circle3 size="60" unit="px" duration="1s" />
			<div class="mt-3 text-black font-mono text-lg sm:text-md">Confirming Email</div>
		</div>
	{/if}
</div>
