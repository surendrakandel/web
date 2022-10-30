<script lang="ts">

	import type { remove_staff } from '$src/gen/remove_staff';
	import { editRole } from '$src/libs/utils/edit_role';
	import { toast } from '@zerodevx/svelte-toast';
	import { ErrorToastOptions } from '$src/libs/utils/toast_options';
	import { Icon, Pencil, Trash } from 'svelte-hero-icons';
	import { changeStaffRole } from '$src/libs/utils/change_role';
	import { basic_provider, business_store, staff_store } from '$src/stores/basic_provider';
	import { deleteUser } from '$src/api/business/delete_user';
	function RemoveUser(event: any) {
		if ($staff_store?.length < 2) {
			toast?.push('can not remove only user in your organization?.', ErrorToastOptions);
			return;
		}

		let index = event.target.id.split('_')[1];
		let emailElement = document?.getElementById('useremail_' + index);
		if (emailElement == null) {
			return;
		}
		remove_user_data.remove_staff_email = emailElement?.innerHTML;
		deleteUser(remove_user_data)
			.then((res) => {
				console.log(res)
			})
			?.catch((error) => {
				console?.log(error);
			});
	}
	let remove_user_data: remove_staff = {
		token: $basic_provider.token,
		remove_staff_email: '',
		business_id: $business_store?.business_id
	};
</script>

<div class="hidden 2xl:flex  w-full mb-2 pl-2">
	<h3 class="w-[50%] 2xl:w-[33%] text-xl">Email</h3>
	<h3 class="w-[50%] 2xl:w-[66%] pl-2 text-xl">Role</h3>
</div>
<div class="cardWrapper">
	{#if $staff_store?.length != undefined && $staff_store?.length > 0}
		{#each $staff_store as user, index}
			<div class="w-full flex flex-col 2xl:flex-row gap-2 mb-4">
				<div class="flex flex-col gap-2 sm:gap-0 sm:flex-row w-[100%] 2xl:w-[66%]">
					<h3 class="w-full  md:w-[40%] 2xl:w-[50%]" id="useremail_{index}">
						{user?.email}
					</h3>
					<select
						required
						id={'userrole_' + index}
						name={'userrole_' + index}
						type="text"
						class="w-full md:w-[40%] 2xl:w-[50%]"
						style="opacity: ?.7;"
						value="0"
						disabled
						on:change={changeStaffRole}
					>
						<option value="0" label="Admin"> Admin </option>
						<option value="1" label="Manager"> Manager </option>
					</select>
				</div>
				<div class="flex flex-col sm:flex-row 2xl:w-[33%] gap-2 mt-2">
					<button
						id="edit_{index}"
						title="edit the role of selected user"
						on:click|preventDefault={() => editRole(index)}
						class="btn w-[70px]"
						style="background-color: #5CB971; padding:0;"
					>
						<Icon src={Pencil} class="h-6" />
					</button>
					<button
						class="btn w-[70px]"
						title="delete the selected user"
						style="background-color: rgba(250,32,32,.6);padding:0;"
						id="delete_{index}"
						on:click|preventDefault={RemoveUser}
					>
						<Icon src={Trash} class="h-6" />
					</button>
				</div>
			</div>
		{/each}
	{/if}
</div>
