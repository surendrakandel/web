<script lang="ts">
import { toggle_state_provider } from "$stores/nav_state_provider";

import { onMount } from "svelte";
onMount(()=>{
    toggle_state_provider.update((value)=>{
        if(value == true){
            return false
        }
        return value
    })
})
</script>
<div class="md:flex flex-col lg:flex-row min-h-[600px] text-[#1B2752]">
    <div class="flex flex-col lg:w-[45%] py-20 px-3 lg:py-16 leading-8">
        <h1 class="text-gray-900 font-bold text-4xl xl:text-3xl p-8 font-space">Brining Simplicity & Efficiency to LTL shipping in today's shipping industry.</h1>
        <span class="text-2xl  font-bold p-8 font-space text-[#5CB971]">Sign up to Save upto 90% on shipping Pallets.</span>
        <p class="mt-8 p-8 font-space text-md">FirstShipper has partnered with nationwide carriers to bring up the efficiency, fix scheduling issues and safety to long haul and short haul shipments by investing in emerging technology, so we can help our customer to provider best shipping pallets experience</p>
        <div class="md:-mr-32 max-w-[430px]">
            <form action="" class="w-full mt-12">
                <div class="flex items-center p-1 rounded-full bg-white border  shadow-md md:p-2">
                    <input placeholder="Your mail address" class="w-full p-2 rounded-full placeholder-gray-100" type="email"/>
                </div>
                <button type="button" title="Start buying" class="btn btn-primary text-white w-[300px] mt-10">
                    Get Started
                </button>
            </form>
        </div>
    </div>
    <div class="flex flex-col lg:w-[55%]" >
        <video
            autoplay
            loop
            muted
            class="w-full object-fill h-full"
        >
            <source
            src="/video/transport-1.mp4"
            type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    </div>
</div>

                                
 <style>
  /* .cont{
    background: url("https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
} */

 </style>