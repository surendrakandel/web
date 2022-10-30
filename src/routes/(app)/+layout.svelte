
<script lang="ts">
    import { toggle_state_provider } from '$src/stores/nav_state_provider';
    import { adjustScreenWitdth } from '$src/libs/utils/adjust_screen_width';
    import { afterNavigate, beforeNavigate } from '$app/navigation';
    import Nav from '$src/components/core/navbar/Index.svelte';
    import Footer from '$src/components/core/footer/Footer.svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';
    $: outerWidth = 0
    $: outerWidth > 767 ? adjustScreenWitdth(): ""
    afterNavigate((value)=>{
		console.log("in afternavigate: ", value)
		toggle_state_provider.update((value)=>{
			if(value){
				return !value
			}
            return value
		})
        document.body.scrollTop = 0
	})
    beforeNavigate(()=>{
        document.body.scrollTop = 0
    })
    export const prerender = true;  
</script>
<Nav/>
<SvelteToast />
{#if $toggle_state_provider == false}
    <div class="mt-[60px]">
        <slot/>
    </div>
{/if}
<Footer/>
<svelte:window bind:outerWidth={outerWidth}/>