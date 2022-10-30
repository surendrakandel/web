<script lang="ts">
	import { addStaff } from '$src/api/business/add_staff';
	import type { add_staff } from '$src/gen/add_staff';
	import { ErrorToastOptions, InfoToastOptions } from '$src/libs/utils/toast_options';
	import { isEmail } from '$src/libs/utils/valid_email';
	import { isValidPassword } from '$src/libs/utils/valid_password';
	import { business_store } from '$src/stores/basic_provider';
	import { user_store_derived } from '$src/stores/user_store';
	import { toast } from '@zerodevx/svelte-toast';
	import { Icon, UserAdd } from 'svelte-hero-icons';
	let add_user_data: add_staff = {
		token: $user_store_derived?.token || "",
		roles: [],
		new_staff_email: '',
		password: '',
		first_name: '',
		last_name: '',
		phone_number: "",
		business_id: $business_store?.business_id
	};

	function AddUser() {
		if (isEmail(add_user_data.new_staff_email) && isValidPassword(add_user_data.password)) {
			addStaff(add_user_data)
				.then((res) => {
					if (res?.success) {
						toast?.push(res.message, InfoToastOptions);
						add_user_data.new_staff_email = '';
						add_user_data.password = '';
					}
				}).catch((error) => {
					toast?.push(error?.response?.data || 'please try later', ErrorToastOptions);
				});
		} else {
			toast?.push('Add Staff data is not valid?.', ErrorToastOptions);
			return;
		}
	}
</script>

<div class="cardWrapper gap-3 pb-5 mb-10">
	<div class="flex flex-col md:flex-row gap-3">
		<div class="flex flex-col md:min-w-[300px]">
			<label class="label" for="first_name">First Name</label>
			<input
				type="text"
				id="first_name"
				placeholder="first name"
				class=""
				bind:value={add_user_data.first_name}
			/>
		</div>
		<div class="flex flex-col md:min-w-[300px]">
			<label class="label" for="last_name">Last Name</label>
			<input
				type="text"
				id="last_name"
				placeholder="last name"
				class=""
				bind:value={add_user_data.last_name}
			/>
		</div>
	</div>
	<div class="flex flex-col md:flex-row gap-3">
		<div class="flex flex-col md:min-w-[300px]">
			<label class="label" for="email">Email</label>
			<input
				type="email"
				id="email"
				class=""
				placeholder="email"
				bind:value={add_user_data.new_staff_email}
			/>
		</div>
		<div class="flex flex-col md:min-w-[300px]">
			<label class="label" for="password">Password</label>
			<input
				type="password"
				id="password"
				class=""
				placeholder="password"
				bind:value={add_user_data.password}
			/>
		</div>
	</div>
	<button
		class="btn btn-primary rounded-md text-sm text-white w-[100px] mt-3"
		style="padding:0;"
		title="add a new user to your company"
		on:click={AddUser}
	>
		<Icon src={UserAdd} class="h-6 w-6" />
	</button>
</div>
