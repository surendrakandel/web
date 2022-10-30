<script type="ts">
	import type { login_type } from '$src/api/user/login';
	import logIn from '$src/api/user/login';
	import { validateToken } from '$src/api/user/validate_token';
	import { isEmail } from '$src/libs/utils/valid_email';
	import { isValidPassword } from '$src/libs/utils/valid_password';
	import { user_store } from '$src/stores/user_store';
	import { onMount } from 'svelte';
	import { Circle3 } from 'svelte-loading-spinners';
	let loading = false;
	let mounted = false;
	let data_validation = {
		valid_email: true,
		valid_password: true
	};
	let data: login_type = {
		email: '',
		password: ''
	};
	async function LoginUser() {
		if (!isEmail(data.email)) {
			data_validation.valid_email = false;
			return;
		} else {
			data_validation.valid_email = true;
		}
		if (!isValidPassword(data.password)) {
			data_validation.valid_password = false;
			return;
		}
		loading = true;
		logIn(data)
			.then((res) => {
				if(res.status === 200){
					user_store.set(res.data.body);
					window.location.href = "/admin"
				} else {
					loading = false;
					mounted = true;
					return	
				}
			}).catch((error) => {
				loading = false;
				mounted = true;
				console.log('errror returned', error);
			});
			loading = false;
			mounted = true;
		}
	onMount(async() => {
		let valid = await validateToken()
		debugger
		console.log($user_store)
		if (valid) {
			window.location.href = "/admin"
		} else {
			mounted = true;
			loading = false;
		}
		mounted = true;
		loading = false;
	});
</script>

<div class="flex min-h-[100vh] max-w-[calc(80rem+320px)] bg-[rgb(28,38.82)]">
	{#if loading && mounted}
		<div
			class="inset-0 bg-white flex w-full min-h-[400px] items-center justify-center duration-300 transition-opacity"
		>
			<div class="flex flex-col pb-[100px] w-full justify-center items-center">
				<Circle3 size="60" unit="px" duration="1s" />
				<div class="mt-3 text-black font-mono text-lg sm:text-md">Loging In</div>
			</div>
		</div>
	{:else if mounted}
		<div
			class="hidden md:flex md:w-1/2 bg-cover"
			style="background-image: url(images/background/sign_up.svg)"
		/>
		<div
			class="md:hidden bg-cover w-full pt-12"
			style="background-image: url(images/background/sign_up.svg)"
		>
			<div class="flex flex-col items-center mt-5">
				<h2 class="my-3 text-center text-xl intro_text">Sign in to your account</h2>
			</div>
			<form
				class="gap-3 pageWrapper bg-[rgb(243,243,246)] bg-opacity-50 "
				action="#"
				method="POST"
			>
				<div class="rounded-md shadow-sm  flex flex-col gap-3 bg-none">
					<div class="flex flex-col text-white gap-3">
						<label for="email-address">Email Address</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autocomplete="username"
							required
							class="placeholder:text-primary placeholder:text-sm bg-white text-primary"
							placeholder="Email address"
							bind:value={data.email}
							on:change={() => {
								if (isEmail(data.email)) {
									data_validation.valid_email = true;
								}
							}}
						/>
					</div>
					{#if data_validation.valid_email == false}
						<h3 class="text-error">Email is not Valid</h3>
					{/if}
					<div class="flex flex-col text-white gap-3">
						<label for="password">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="placeholder:text-primary placeholder:text-sm bg-white text-primary"
							placeholder="Password"
							bind:value={data.password}
							on:change={() => {
								if (isValidPassword(data.password)) {
									data_validation.valid_password = true;
								}
							}}
						/>
					</div>
					{#if data_validation.valid_password == false}
						<h3 class="text-error">Password is not Valid</h3>
					{/if}
				</div>
				<button
					type="submit"
					class="btn btn-primary py-2 px-4  mt-5 text-white"
					on:click|preventDefault={LoginUser}
				>
					<span class="flex items-center pl-3">
						<!-- Heroicon name: solid/lock-closed -->
						<svg
							class="h-5 w-5 text-white group-hover:text-indigo-400 mr-10"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="#fff"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					Sign in
				</button>
				<div class="flex flex-col   w-full gap-3  mt-3">
					<div class="font-medium text-md text-white">Don't have account yet?</div>
					<a href="/sign-up" class="hover:text-white"
						><span class="text-lg font-semibold text-green-500  hover:text-white"
							>Sign Up Now
						</span></a
					>
				</div>
				<div class="flex flex-col text-sm w-full">
					<h3 class="text-white py-3">Forgot your password?</h3>
					<a href="/forgot-password" class="mt-3"
						><span class="text-md font-semibold text-red-500  hover:text-white"
							>Reset Now</span
						></a
					>
				</div>
			</form>
		</div>
		<div class="hidden md:flex md:flex-col  md:w-1/2  mt-12 px-12 mx-auto p-10">
			<div class="flex flex-col items-center">
				<h2 class="my-3 text-center text-xl intro_text">Sign in to your account</h2>
			</div>
			<form
				class="gap-3  pageWrapper bg-[rgb(243,243,246)] bg-opacity-50 "
				action="#"
				method="POST"
			>
				<input type="hidden" name="remember" value="true" />
				<div class="flex flex-col gap-3">
					<div class="flex flex-col gap-2">
						<label for="email-address" class="font-semibold normal-text"
							>Email Address</label
						>
						<input
							id="email-address"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="text-sm text-white"
							placeholder="Email address"
							bind:value={data.email}
						/>
					</div>
					<div class="flex flex-col gap-2">
						<label for="password" class="font-semibold normal-text">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="text-sm text-white"
							placeholder="Password"
							bind:value={data.password}
						/>
					</div>
				</div>
				<button
					type="submit"
					class="btn btn-primary mt-5 text-white"
					on:click|preventDefault={LoginUser}
				>
					<span class="flex items-center pl-3">

						<svg
							class="h-5 w-5 text-white mr-10"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
					Sign in
				</button>
				<div class="flex flex-col  gap-5 mt-3">
					<a for="remember-me" class="font-medium text-xl text-[#5CB971]" href="/sign-up">
						Don't have account yet? Sign Up Now
					</a>
					<div class="flex flex-col text-md gap-2">
						<h3 class="normal-text font-semibold">Forgot your password?</h3>
						<a href="/forgot-password" class="mt-3">
							<span class="text-md font-semibold text-red-500  hover:text-[#1B2752]"
								>Reset Now</span
							>
						</a>
					</div>
				</div>
			</form>
				
		</div>
	{/if}
</div>
