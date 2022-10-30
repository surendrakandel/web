<script lang="ts">
import { onMount } from "svelte";
onMount(async()=>{

})
</script>
<div class="mt-10 mb-20">
    <div class="flex flex-col">
      <h3 class="text-lg font-bold mb-4">Track Freight Status</h3>
      <div class="flex flex-col mb-4 gap-4">
        <div class="flex flex-col">
          <h3 class="text-lg font-bold underline underline-offset-4">
            Track Shipments
          </h3>
        </div>
        <form action="#">
          <div class="tab-content cardWrapper">
              <div class="flex flex-col gap-5 py-4">
                <input class="max-w-[400px]" type="search" name="search" placeholder="BOL Number / Pro Number"/>
                <button type="submit" class="btn btn-primary h-[70px] w-[200px] text-white">Search <i class="fas fa-search ml-4"></i></button>
              </div>
          </div>
    
        </form>
      </div>
      <h3 class="text-lg font-bold my-3">Status results</h3>
      <!-- <div class="flex flex-col p-2 cardWrapper">
        <div class="track_id">12535123656162</div>
        <h3 class="text-lg font-bold mb-4">DHL shipment</h3>
        <ul class="results_list ul_li_block ml-4">
          <li>
            <h3 class="text-lg font-bold mb-2">Brooklyn, United States</h3>
            <ul class="time_date ul_li">
              <li>13:45</li>
              <li>12-02-22</li>
            </ul>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla
            </p>
          </li>
          <li>
            <h3 class="text-lg font-bold mb-2">Brooklyn, United States</h3>
            <ul class="time_date ul_li">
              <li>13:45</li>
              <li>12-02-22</li>
            </ul>
            <p class="mb-0">
              Your shipment has arrived in the destination country / destination area.
            </p>
          </li>
          <li>
            <h3 class="text-lg font-bold mb-2">Brooklyn, United States</h3>
            <ul class="time_date ul_li">
              <li>13:45</li>
              <li>12-02-22</li>
            </ul>
            <p class="mb-0">
              Your shipment has arrived in the destination country / destination area.
            </p>
          </li>
          <li>
            <h3 class="state_name">Brooklyn, United States</h3>
            <ul class="time_date ul_li">
              <li>13:45</li>
              <li>12-02-22</li>
            </ul>
            <p class="mb-0">
              Your shipment has arrived in the destination country / destination area.
            </p>
          </li>
        </ul>
      </div> -->
    </div>
</div>