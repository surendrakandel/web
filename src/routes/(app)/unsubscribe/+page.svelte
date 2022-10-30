<script lang="ts">
import { goto } from "$app/navigation";
import { isEmail } from "$libs/utils/valid_email";
type banner_data = {
  email: string;
};
let data: banner_data = {
  email: "",
};
function Unsuscribe() {
  if(isEmail(data.email)){
    alert("Thank you. Hope to see you again. You have been unsubscribed from future email communication")
    goto("/");
  }

}
</script>
  
<div
  class="h-[120vh] lg:h-[calc(100vh-60px)] mainContainer"
>
    <div
      class="flex flex-col lg:flex-row gap-4 w-full h-full justify-around lg:justify-center max-w-screen-2xl  mx-auto"
    >
      <div class="flex flex-col w-full lg:w-1/2 pt-16 lg:h-full px-8 justify-center">
        <h1 class="text-white text-left text-5xl py-12">
          Sorry to See you Go.
        </h1>
        <div
          class="flex flex-col  lg:flex-row gap-3 items-center justify-center pt-8"
        >
          <div class="flex flex-col w-[100%] justify-center items-center py-2">
            <label for="email" class="text-white py-3 self-start">Plese enter email address to unsubscribe from future email.</label>
            <input
              type="email"
              id="email"
              class="min-w-[100%] text-xs placeholder:font-space"
              placeholder="email address"
              bind:value={data.email}
            />
          </div>
        </div>
        <button
          on:click={Unsuscribe}
          id="get_quote"
          class="btn-primary flex flex-col w-[100%] p-[16px] rounded-md text-white font-space justify-center font-semibold items-center mt-10 mb-4"
          style="background-color: #5CB971;">UNSUSCRIBE</button
        >
      </div>
      <div class="flex flex-col  w-full lg:w-1/2 py-4 lg:h-full px-8 justify-center sidePallet">
        <!-- <img src="" alt="pallet"/> -->
      </div>
    </div>
</div>

<style>
  div {
    font-family: "Goldman", "courier";
  }
  button {
    font-family: "Space Grotesk";
    color: #fff;
  }
  .sidePallet{
    background-image: url("/images/banner/banner_img.png"); /* The image used */
    height: 100%; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: contain; /* Resize the background image to cover the entire container */
  }
  .mainContainer{
    background-image: linear-gradient(260.3deg, #1B2752 -7.47%, #111126 134.71%);
  }
</style>
