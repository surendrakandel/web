<script lang="ts">
import { page } from "$app/stores";
import { right_menu_provider } from "$stores/nav_state_provider";

// $: height = writable("100px")
// onMount((value)=>{  
//     height.update((value)=>{
//         return document.documentElement.scrollHeight.toString() +"px"
//     })
// })
function toggleRightMenu(){
    //document.body.scrollIntoView();
    right_menu_provider.update((value)=>{
        return !value
    })
}
</script>
<footer class="lg:hidden h-16 z-50">
    <ul class="flex w-full h-full  justify-around items-center bg-gray-100">
        <li class="h-full w-1/4 flex items-center justify-center" color={$page.url.pathname.includes("quote")? "#5CB971": "#161628"}>
        <a href="/admin/quote" class="flex flex-col justify-center items-center">
                <img src="/images/icons/package.svg"  alt="get quote" height="26px" width="26px"/>
                <span class="font-bold text-[#5CB971]" color={$page.url.pathname.includes("quote")? "#5CB971": "#161628"}>New Quote</span>
        </a>
        </li>
        <li class="h-full w-1/4 flex items-center justify-center" color={$page.url.pathname.includes("track")? "#5CB971": "#161628"}>
            <a href="/admin/track" class="flex flex-col justify-center items-center">
                <img src="/images/icons/track.svg"  alt="track shipment" height="26px" width="26px"/>
                <span>Track</span>
            </a>
        </li>
        <li class="h-full w-1/4 flex items-center justify-center" color={$page.url.pathname.includes("settings")? "#5CB971": "#161628"}>
            <a href="/admin/settings" class="flex flex-col justify-center items-center">
                <img src="/images/icons/setting.svg" height="26px" width="26px" alt="settings"/>
                <span>Settings</span>
            </a>
        </li>
        <li class="h-full w-1/4 flex items-center justify-center" color={$page.url.pathname.includes("more")? "#5CB971": "#161628"}>
            <button 
                on:click={toggleRightMenu}
                class="flex flex-col justify-center items-center">
                    <img src="/images/icons/burger.svg"  alt="more options" height="26px" width="26px"/>
                    <span>More</span>
            </button>
        </li>
    </ul>
</footer>
<style>
    a,img{
      cursor: pointer;
      font-size: 10px;
    }
    li {
      cursor: pointer;
    }
    li button img, li button span, li button{
        cursor: pointer;
    }
    li, a, span{
        font-size: 12px;
    }
    footer{
        box-shadow: 0 0 8px rgb(0 0 0 / 20%);
        position: fixed;
        right:0;
        bottom: 0;
        left:0;
        z-index: 5000;
        transition: box-shadow 350ms ease-out;
        width: 100% !important;
  }
</style>