<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';
	import { ErrorToastOptions, InfoToastOptions } from '$src/libs/utils/toast_options';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { isValidPassword } from '$src/libs/utils/valid_password';
	import { isEmail } from '$src/libs/utils/valid_email';
	import { browser } from '$app/environment';
	import  resetPassword  from '$src/api/user/reset_password';
	let valid = false;
	let password_1_entered = false;
	let email = '';
	let token = '';

	if (browser) {
		token = $page.url.searchParams.get('token') || '';
		email = $page.url.searchParams.get('email') || '';
	}

	let data = {
		token: token,
		new_password: '',
		confirm_password: '',
		email: email
	};
	onMount(async () => {
		if (!token) {
			await goto('/forgotpassword');
		}
	});
	let errData = {
		valid_password_message:
			'Please choose stronger password with 1 number, 1 capital letter, 1 symbol and must be 8 characters long.',
		match_password_message: 'New Password and Confirm Password does not match.',
		valid_password: true,
		valid_password_match: true
	};
	function ResetPassword() {
		if (!valid) {
			return;
		}
		valid = isValidPassword(data.confirm_password);
		valid = isEmail(email);
		if (valid && data.new_password == data.confirm_password) {
			errData.valid_password_match = true;
			errData.valid_password = true;
			resetPassword(data)
				.then((res) => {
					toast.push(res?.message, InfoToastOptions);
					goto('/login?email=' + data.email);
					console.log(res);
				})
				.catch((error) => {
					console.log(error);
					toast.push('could not reset password. please try later.', ErrorToastOptions);
				});
		} else {
			return;
		}
	}
	function validatePassword() {
		password_1_entered = true;
		valid = isValidPassword(data.new_password);
		if (!valid) {
			errData.valid_password = false;
			password_1_entered = false;
			valid = false;
		} else {
			errData.valid_password = true;
			valid == true ? true : false;
		}
		if (data.confirm_password != '') {
			validateMatch();
		}
	}

	function validateMatch() {
		if (!password_1_entered) {
			return;
		}
		if (data.new_password != data.confirm_password) {
			errData.valid_password_match = false;
			valid = false;
		} else {
			errData.valid_password_match = true;
			valid == true ? true : false;
		}
	}
</script>

<div class="bg-white min-h-[700px] flex flex-col items-center">
	<h2 class="my-5 text-lg font-bold">Reset Password</h2>
	<div class="cardWrapper  p-5 min-w-[600px] gap-3">
		<label class="" for="new_password">Email</label>
		<input
			type="email"
			name="new_password"
			id="new_password"
			class="input"
			on:change={validatePassword}
			value={data.email}
			disabled
			placeholder="New Password"
		/>
		<label class="" for="new_password">New Password</label>
		<input
			type="password"
			name="new_password"
			id="new_password"
			class="input"
			on:change={validatePassword}
			bind:value={data.new_password}
			placeholder="New Password"
		/>
		{#if errData.valid_password == false}
			<div class="text-error">{errData.valid_password_message}</div>
		{/if}
		<label class="" for="confirm_password">Retype password</label>
		<input
			type="password"
			id="confirm_password"
			name="confirm_password"
			class="input"
			on:change={validateMatch}
			bind:value={data.confirm_password}
			placeholder="Confirm Password"
		/>
		{#if errData.valid_password_match == false}
			<div class="text-error">{errData.match_password_message}</div>
		{/if}

		<button
			type="submit"
			class="btn btn-primary text-uppercase max-w-[250px] mt-5"
			on:click={ResetPassword}>Submit</button
		>
		<div class="flex items-center h-[50px]">
			<h3 class="font-bold text-md">Have no account?</h3>
			<a
				href="/sign-up"
				class="text-xl text-[#5CB971] font-bold underline underline-offset-4 ml-4 inline"
				>Create one</a
			>
		</div>
	</div>
</div>