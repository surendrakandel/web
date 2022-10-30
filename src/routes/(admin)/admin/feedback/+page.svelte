
<script lang="ts">
import Feedback from "$components/widgets/icons/Feedback.svelte";
</script>
<div class="flex mt-10">
    <div class="max-w-[calc(80rem+320px)] w-full">
        <div class="flex flex-col py-3 md:p-5 cardWrapper">
            <Feedback color={"#5CB971"}/>
            <h3 class="pt-2 text-lg">
                FeedBack
            </h3>
        
            <h3 class="mt-3">
            Got a Feedback, or just want to say hello? <span class="pt-4 text-lg"> Please write to us.</span>
            </h3>
    
        </div>
        <form class="cardWrapper py-5 md:p-5 md:py-0 mt-3">
            <div class="flex flex-col sm:flex-row">
                <div class="w-full sm:mr-3 sm:w-1/2">
                    <label class="pb-3  font-semibold" for="name">Your Name</label>
                    <input type="text" id="name" placeholder="What should We call you?" class="w-full p-3"/>
                </div>
                <div class="w-full pt-8 sm:ml-3 sm:w-1/2 sm:pt-0">
                    <label class="pb-3  font-semibold" for="email">Email Address</label>
                    <input type="email" id="email" placeholder="Drop that email here…" class="w-full p-3"/>
                </div>
            </div>
            <div class="w-full pt-8 sm:pt-10">
                <label class="pb-3 text-lg font-semibold" for="message">Comments</label>
                <textarea id="message" placeholder="Tell us how can we improve?" class="w-full p-3 h-[200px]"></textarea>
                </div>
            <button class="btn btn-primary mt-4 rounded-md max-w-[300px]">
                end FeedBack
            </button>
        </form>
    </div>
</div>
  