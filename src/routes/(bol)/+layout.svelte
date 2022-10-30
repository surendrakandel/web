<script>
	import { afterNavigate } from "$app/navigation";
    import "$src/css/app.css";
	import { toggle_state_provider } from "$stores/nav_state_provider";
    export const prerender = true;
    afterNavigate((value)=>{
		console.log("in afternavigate: ", value)
		toggle_state_provider.update((value)=>{
			if(value){
				return !value
			}
            return value
		})
	})
</script>
<slot/>