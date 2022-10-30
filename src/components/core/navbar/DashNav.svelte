<script lang="ts">
import { goto } from "$app/navigation";
import Whitelogo from "$components/widgets/Whitelogo.svelte";

let show = false
function ShowDropDown(){
  show = !show
  console.log('dropdown called', show)
}

</script>
<nav  class="flex items-center justify-between  lg:max-w-[calc(80rem+475px)] h-full px-3 mx-auto py-2">
  <a href="/">
      <Whitelogo/>
  </a>
  <div class="flex justify-between items-center">
    <button class="text-md  text-error bg-[rgba(231,231,231)] rounded-sm h-[50px] flex items-center justify-center min-w-[150px] absolute right-24 top-2" class:hide={!show} on:click={()=>goto("/log-out")}>
      <i class="fas fa-power-off px-2  text-error">
      </i>
      <span class="text-sm items-center">
        Log Out
      </span>
    </button>
    <button 
      on:click={ShowDropDown}
      class="flex flex-col bg-white rounded-full h-[50px] min-w-[50px] justify-center items-center ml-2" 
      type="button" 
      style="background-color: #fff;"
      aria-expanded="false">
      <img src="/images/icons/profile.svg"  alt="user" width="18px" />
      <img src="/images/icons/drop_down.svg" alt="drop down" width="18px" />
    </button>
  </div>
</nav> 

<style>
  .hide{
    display: none;
  }
 
</style>