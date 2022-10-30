<script lang="ts">
	import { ErrorToastOptions, InfoToastOptions } from '$src/libs/utils/toast_options.js';
	import { toast } from '@zerodevx/svelte-toast';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { toggle_state_provider } from '$src/stores/nav_state_provider';
	import { role } from '$src/gen/role';
	import { isEmail } from '$src/libs/utils/valid_email';
	import { isValidPassword } from '$src/libs/utils/valid_password';
	import { isNumeric } from '$src/libs/utils/is_numeric';
	import type { sign_up } from '$src/gen/sign_up';
	import createUser from '$src/api/user/create';
	import { writable, type Writable } from 'svelte/store';
	import { z } from 'zod';

	let disabled = false;

	let data: Writable<sign_up> = writable({
		first_name: '',
		middle_name: '',
		last_name: '',
		email: '',
		password: '',
		phone_number: '',
		role: [role.BUSINESS_OWNER, role.BUSINESS_MANAGER, role.BUSINESS_STAFF],
		terms_aggrement: true,
		company_name: ''
	});
	let data_error:Writable<any> = writable({
		first_name: {
			valid: true,
			err_messsage: 'first name is required or not valid'
		},
		middle_name: {
			valid: true,
			err_messsage: 'last name is required or not valid'
		},
		last_name: {
			valid: true,
			err_messsage: 'last name is required or not valid'
		},
		email: {
			valid: true,
			err_messsage: 'email is required or not valid'
		},
		password: {
			valid: true,
			err_messsage:
				'password  is required or not valid. Password should be 8 characters long with one number and one special character'
		},
		phone_number: {
			valid: true,
			err_messsage: 'phone_number name is required or not valid'
		},
		role: [role.BUSINESS_OWNER, role.BUSINESS_MANAGER, role.BUSINESS_STAFF],
		terms_aggrement: true,
		company_name: {
			valid: true,
			err_messsage: 'company name is  required or not valid'
		}
	});
	

	function submit() {
		const zodSignUp = z.object({
			first_name: z.string().min(1,"first name is required"),
			middle_name: z.string().optional().nullable(),
			last_name: z.string().min(1,"last name is required"),
			email: z.string().email("email must be valid"),
			password: z.string().min(8,"password must be 8 characters or more"),
			phone_number: z.string().min(10,"phone number must be 10 digits long"),
			role: z.array(z.number()).optional().nullable(),
			terms_aggrement: z.boolean().default(true),
			company_name: z.string().min(5,"company name is required")
		})
		let validData = {}
		try {
			validData = zodSignUp.parse($data)
		} catch (error: any) {
			let i = 0
			error.issues.forEach((err:any)=>{
				console.log(`err: ${i}`, err )
				if($data_error.hasOwnProperty(err.path[0])){
					$data_error[err.path[0]].valid = false 
					$data_error[err.path[0]].err_messsage = err.message
				}
				i++
				return
			})
			return
		}
		setTimeout(async () => {
			disabled = true;
			let res = await createUser($data)
			debugger
			if (res.token !=""){
				toast.push('account has been created.Please check your email to confirm your email address',InfoToastOptions);
				goto("/confirm-email/inform")
			}else{
				toast.push('could not create account. Please try later.', ErrorToastOptions);
			}
		}, 200);
	}
	onMount(() => {
		$toggle_state_provider == true ? ($toggle_state_provider = false) : () => {};
		return()=>{
			$data = {
				first_name: '',
				middle_name: '',
				last_name: '',
				email: '',
				password: '',
				phone_number: '',
				role: [],
				terms_aggrement: false,
				company_name: ''
			}
			$data_error = undefined
		}
	});
	function onChange(id: string) {
		let element = (<HTMLInputElement>document.getElementById(id)).value;
		if (id == 'first_name' && element.length < 3) {
			$data_error.first_name.valid = false;
			return;
		}
		if (id == 'first_name' && element.length > 3) {
			$data_error.first_name.valid = true;
			return;
		}
		if (id == 'last_name' && element.length < 3) {
			$data_error.last_name.valid = false;
			return;
		}
		if (id == 'last_name' && element.length > 3) {
			$data_error.last_name.valid = true;
			return;
		}
		if (id == 'email' && !isEmail(element)) {
			$data_error.email.valid = false;
			return;
		}
		if (id == 'email' && isEmail(element)) {
			$data_error.email.valid = true;
			return;
		}
		if (id == 'password' && !isValidPassword(element)) {
			$data_error.password.valid = false;
			return;
		}
		if (id == 'password' && isValidPassword(element)) {
			$data_error.password.valid = true;
			return;
		}
		if (id == 'company_name' && element.length < 3) {
			$data_error.company_name.valid = false;
			return;
		}
		if (id == 'company_name' && element.length > 3) {
			$data_error.company_name.valid = true;
			return;
		}
		if (
			(id == 'phone_number' && !isNumeric(element) && element.length < 10) ||
			element.length > 12
		) {
			$data_error.phone_number.valid = false;
			return;
		}
		if (id == 'phone_number' && element.length > 3) {
			$data_error.phone_number.valid = true;
			return;
		}
	}
</script>

<div class="flex max-w-[calc(80rem+320px)] text-primary">
	<div
		class="w-1/2 bg-cover lg:block hidden"
		style="background-image:  url(images/background/sign_up.svg)"
	/>
	<div class="w-full flex flex-col  lg:w-1/2 p-3 mt-4">
		<div class="text-left">
			<h1 class=" text-gray-800 text-3xl font-medium intro_text">Create an account for free</h1>
			<h3 class="p-1  text-green-700 text-xl mt-2">Free forever. No payment needed.</h3>
		</div>
		<form class="pageWrapper bg-[rgb(243,243,246)] bg-opacity-50 gap-2 mt-2" on:submit|preventDefault={submit}>
			<div class="w-full flex flex-col   lg:items-start">
				<label for="first_name" class="label w-full sm:w-[400px]">First Name</label>
				<input
					class="w-full"
					type="text"
					name="first_name"
					placeholder="first name"
					id="first_name"
					bind:value={$data.first_name}
					aria-valuetext="first_name"
					on:change={() => onChange('first_name')}
					required
				/>
				{#if $data_error.first_name.valid != true}
					<h3 class="text-error">
						{$data_error.first_name.err_messsage}
					</h3>
				{/if}
			</div>
			<div class="w-full flex flex-col">
				<label for="last_name" class="label">Last Name</label>
				<input
					class="w-full"
					type="text"
					placeholder="last name"
					bind:value={$data.last_name}
					name="last_name"
					id="last_name"
					required
					on:change={() => onChange('last_name')}
				/>
				{#if $data_error.last_name.valid != true}
					<h3 class="text-error">
						{$data_error.last_name.err_messsage}
					</h3>
				{/if}
			</div>
			<div class="w-full flex flex-col">
				<label for="email" class="label">Email</label>
				<input
					class="w-full"
					type="email"
					placeholder="email"
					bind:value={$data.email}
					name="email"
					id="email"
					required
					on:change={() => onChange('email')}
				/>
				{#if $data_error.email.valid != true}
					<h3 class="text-error">
						{$data_error.email.err_messsage}
					</h3>
				{/if}
			</div>
			<div class="w-full flex flex-col">
				<label for="password" class="label">Password</label>
				<input
					class="w-full"
					type="password"
					placeholder="password"
					name="password"
					id="password"
					bind:value={$data.password}
					on:change={() => onChange('password')}
				/>
				{#if $data_error.password.valid != true}
					<h3 class="text-error">
						{$data_error.password.err_messsage}
					</h3>
				{/if}
			</div>
			<div class="w-full flex flex-col">
				<label for="company_name" class="label">Company Name</label>
				<input
					class="w-full"
					type="text"
					placeholder="company name"
					bind:value={$data.company_name}
					name="company_name"
					id="company_name"
					required
					on:change={() => onChange('company_name')}
				/>
				{#if $data_error.company_name.valid != true}
					<h3 class="text-error">
						{$data_error.company_name.err_messsage}
					</h3>
				{/if}
			</div>
			<div class="w-full flex flex-col">
				<label for="phone_number" class="label">Phone Number</label>
				<input
					class="w-full"
					type="tel"
					placeholder="phone number"
					bind:value={$data.phone_number}
					name="phone_number"
					id="phone_number"
					required
					on:change={() => onChange('phone_number')}
				/>
				{#if $data_error.phone_number.valid != true}
					<h3 class="text-error">
						{$data_error.phone_number.err_messsage}
					</h3>
				{/if}
			</div>
			<div class="mt-8 flex justify-between">
				<button
					type="submit"
					class="btn btn-primary py-3 w-full text-white rounded hover:bg-green-600{disabled == true
						? 'disabled'
						: ''}">Sign up</button
				>
			</div>
			<span class="flex flex-col text-primary  my-3"
				>Already have an Account?
				<a
					class="btn mt-3 text-orange-500 font-mono font-bold text-xl"
					style="background-color: #f88635; width: 50%;"
					href="/login"
					data-test="Link"
				>
					Login
				</a>
			</span>
		</form>
	</div>
</div>
