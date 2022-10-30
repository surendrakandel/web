<script lang="ts">
import { toggle_state_provider } from "$stores/nav_state_provider";
import Open from "./Open.svelte";
import Close from "./Close.svelte";
function toggle(){
  toggle_state_provider.update((value)=>{
    return !value
  })
}
</script>

<div class="flex md:hidden w-10 h-10">
  {#if $toggle_state_provider == true}
    <button on:click={toggle}>
      <Close/>
    </button>
  {:else}
    <button on:click={toggle}>
      <Open/>
    </button>

  {/if}
</div>