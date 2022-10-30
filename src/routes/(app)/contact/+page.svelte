<script lang="ts">
import { toggle_state_provider } from "$stores/nav_state_provider";
import { onMount } from "svelte";
import Feedback from "$components/widgets/icons/Feedback.svelte";
onMount(()=>{
  toggle_state_provider.update((value)=>{
    if(value == true){
      return false
    }
    return value
  })
})
</script>

<div class="flex  justify-start  mt-2">
  <div class="hidden lg:flex flex-col min-h-[90vh]  bg-[#1B2752] w-[45%] m-[-.5rem] p-8">
    <h3 class="mt-[100px]  text-xl text-white intro" style="color: #5CB971;"> 
      MAKE EVERY LINK IN YOUR SUPPLY CHAIN STRONGER
     
    </h3>
    <h3 class=" mt-12 text-lg"> Ask us how</h3>
  </div>
  
  <div class="min-h-[500px] max-w-[1000px] w-[100%] lg:ml-6">
      <div class="flex flex-col py-5 md:p-5 cardWrapper">
          <Feedback color={"#5CB971"}/>
          <h3 class="pt-2 text-lg">
              FeedBack
          </h3>
      
          <h3 class="mt-4">
          Got a Feedback, or just want to say hello? <span class="block pt-4 text-md"> Please write to us.</span>
          </h3>
  
      </div>
      <form class="cardWrapper py-5 md:p-5 md:py-0 mt-4">
          <div class="flex flex-col sm:flex-row">
          <div class="w-full sm:mr-3 sm:w-1/2">
          <label class="block pb-3  font-medium dark:text-white" for="name">Your Name</label>
          <input type="text" id="name" placeholder="What should We call you?" class="w-full p-3">
          </div>
          <div class="w-full pt-8 sm:ml-3 sm:w-1/2 sm:pt-0">
          <label class="block pb-3  dark:text-white font-bold" for="email">Email Address</label>
          <input type="email" id="email" placeholder="Drop that email here…" class="w-full p-3">
          </div>
          </div>
          <div class="w-full pt-8 sm:pt-10">
          <label class="pb-3 " for="message">Comments</label>
          <textarea id="message" cols="30" rows="9" placeholder="Tell us how can we improve?" class="w-full p-3"></textarea>
          </div>
          <button class="btn btn-primary mt-4 rounded-md max-w-[200px] text-white">
              end FeedBack
          </button>
      </form>
  </div>
</div>



  