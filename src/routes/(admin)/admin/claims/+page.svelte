<script lang="ts">
</script>

<div class="flex flex-col mt-10 text-[#1B2752] ">
  <h1 class="text-lg font-bold">Submit a Claim</h1>
  <div class="flex flex-col cardWrapper  py-5 px-3">
    <h3 class="p-2 mb-2">Disclaimers</h3>
    <div class="flex flex-col gap-2 p-2">
        <div class="flex w-full gap-2 items-center pb-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#5CB971">
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="11.5"
              fill="white"
              stroke="#5CB971"
              /><path
              d="M18 8L9.0625 17L5 12.9091"
              stroke="#5CB971"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
          </svg>
          <h3 class="text-lg">This form allows the presentation of a cargo claim.</h3>
        </div>
        <div class="flex w-full gap-2 items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" color="#5CB971">
              <rect
                x="0.5"
                y="0.5"
                width="23"
                height="23"
                rx="11.5"
                fill="white"
                stroke="#5CB971"
                /><path
                d="M18 8L9.0625 17L5 12.9091"
                stroke="#5CB971"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
            <h3 class="">To get updates about previously filled claims, Please email at <a
              class="text-sm text-blue-600"
              href="mailto:cargoclaims@firstshipper.com">cargoclaims@firstshipper.com</a>
            </h3>
        </div>
    </div>
  </div>
  <div class="flex flex-col">
    <label class="label text-lg font-semibold" for="orderSearchText">Search for an Order to start the Claim. This is required!</label>
    <div class="flex gap-3 pt-3 w-full">
        <div class="cardWrapper gap-4 w-full py-5 px-3">
            <label for="orderSearchText" class="font-semibold text-lg">Find Order</label>
            <input
                id="orderSearchText"
                placeholder="Find order"
                type="text"
                aria-label="find order"
                class="max-w-[300px]"
            />
            <button type="submit" class="btn btn-primary h-[70px] w-[200px] my-3 text-white">Search <i class="fas fa-search ml-4"></i></button>
        </div>
        
    </div>
  </div>
 </div>