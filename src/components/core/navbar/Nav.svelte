
<script lang="ts">
import Toggler from "$components/core/navbar/NavToggler/index.svelte"
import Whitelogo from "$components/widgets/Whitelogo.svelte";
import { fly } from 'svelte/transition';

</script>
<div class="nav flex h-[70px] w-full">
  <nav  class="flex  w-full justify-between items-center  px-4 mx-auto 2xl:rounded-xl max-w-[calc(80rem+320px)]" in:fly={{ y: -20, duration: 1000 }}>
    <a href="/" class="flex">
      <div alt="first shipper company logo"  class="flex flex-col items-center justify-center">
          <Whitelogo/>
      </div>
    </a>
    <ul class="hidden md:flex items-center justify-center pl-12">
      <li class="min-w-[200px]"><a href="/track">Track Shipment</a></li>
      <li>
        <a href="/admin/quote">
          New Quote 
        </a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
    <a href="/login" class="hidden md:flex login justify-center items-center text-white">
      Login
    </a>
    <Toggler/>
  </nav>
</div>
<style>
  .nav{
    background: rgba(82, 48, 219, 0.1);
  }
  a.login{
    width: 170px;
    height: 40px;
    font-weight: 600;
    font-family: 'Space Grotesk', 'Courier New', Courier, monospace;
    --tw-text-opacity: 1;
    color: rgb(251 146 60 / var(--tw-text-opacity)) !important;
  }
  a.login:hover{
    color: #ffffff !important;
  }
  a.login:hover, ul li a:hover{
    background-color: #5CB971;
    color: "#ffffff"
  }
  a{
    cursor: pointer;
    font-size: 14px;
    max-width: 170px;
  } 
  ul > li > a{
    min-width: 100px;
    margin: 10px;
    padding: 10px;
    color: #ffffff;
    font-weight: 600;
    text-align: center;
    font-family: 'Space Grotesk', 'Courier New', Courier, monospace;
  }
 
  li {
    padding: 0 20px;
  }
</style>


