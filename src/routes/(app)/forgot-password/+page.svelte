<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';
	import { ErrorToastOptions, InfoToastOptions } from '$src/libs/utils/toast_options';
	import { isEmail } from '$src/libs/utils/valid_email';
	import forgotPassword  from '$src/api/user/forgot_password';
	let data = {
		email: ''
	};
	let errEmail = {
		valid: true,
		message: 'Email address is not valid. Please re-enter email address.'
	};
	let validEmail = false;
	function IsEmail() {
		validEmail = isEmail(data.email);
		if (!validEmail) {
			errEmail.valid = false;
			return;
		} else {
			errEmail.valid = true;
			return;
		}
	}
	function ForgotPassword() {
		if (!isEmail(data.email)) {
			alert('email is invalid.');
			return;
		}
		errEmail.valid = true;
		forgotPassword(data)
			.then((value) => {
				toast.push(value.message, InfoToastOptions);
			})
			.catch((error) => {
				toast.push(error?.response?.data?.data?.message, ErrorToastOptions);
			});
	}
</script>

<div class="flex  justify-center peace min-h-[600px]">
	<div class="peace md:flex justify-center self-center hidden  md:w-1/2">
		<img src="images/icons/peace.svg" alt="iamges" />
	</div>
	<div class="min-h-[600px] w-[100%] md:w-1/2 bg-white flex items-center justify-center">
		<div class="cardWrapper h-[80%] w-[90%]">
			<label class="label text-lg font-bold my-10" for="email">Forget Password?</label>
			<input
				type="email"
				name="email"
				class="max-w-[500px]"
				on:change={IsEmail}
				placeholder="Your Email"
				bind:value={data.email}
			/>
			{#if errEmail.valid == false}
				<div class="text-error">{errEmail.message}</div>
			{/if}
			<div class="flex flex-col mt-3">
				<button
					type="submit"
					class="btn btn-primary text-uppercase my-3 text-white text-xs max-w-[250px]"
					on:click={ForgotPassword}>Send Reset Link</button
				>
				<div class="flex h-[50px] w-full items-center">
					<h3 class="font-bold text-md ">Have no account?</h3>
					<a
						href="/sign-up"
						class="text-xl text-[#5CB971] font-bold underline underline-offset-4 ml-4 inline w-1/2"
						>Create one</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.peace {
		background-image: linear-gradient(260.3deg, #111b3d -7.47%, #111126 134.71%);
		height: 100%;
	}
</style>
