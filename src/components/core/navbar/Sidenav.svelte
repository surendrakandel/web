<script lang="ts">
import { page } from "$app/stores";
import Claims from "$components/widgets/icons/claims.svelte";
import Dashboard from "$components/widgets/icons/dashboard.svelte";
import Documents from "$components/widgets/icons/documents.svelte";
import Feedback from "$components/widgets/icons/Feedback.svelte";
import Quote from "$components/widgets/icons/quote.svelte";
import Setting from "$components/widgets/icons/setting.svelte";
import Track from "$components/widgets/icons/track.svelte";
</script>
<nav class="hidden lg:flex">
  <ul class="flex flex-col items-center w-[160px]">
    <li class:active={$page.url.pathname=="/admin"} class="my-1">
      <a href="/admin" class="flex flex-col items-center">
        <span>
         <Dashboard color={$page.url.pathname == "/admin"? "#5CB971": "#161628"}/>
        </span>
        <span class:active={$page.url.pathname == "/admin"} class="font-bold py-1">dashboard</span>
      </a>
    </li>
    <li class:active={$page.url.pathname=="/admin/quote"} class="my-1">
      <a href="/admin/quote" class="flex flex-col items-center">
        <span>
         <Quote color={$page.url.pathname.includes("quote")? "#5CB971": "#161628"}/>
        </span>
        <span class:active={$page.url.pathname.includes("quote")} class="font-bold py-1">New Quote</span>
      </a>
    </li>
    <li class:active={$page.url.pathname=="/admin/track"} class="my-1">
      <a data-sveltekit-prefetch href="/admin/track" class="flex flex-col items-center">
        <span>
          <Track color={$page.url.pathname.includes("track")? "#5CB971": "#161628"}/>
        </span>
        <span class:active={$page.url.pathname.includes("track")}>Track</span>
      </a>
    </li>
    <li class:active={$page.url.pathname=="/admin/documents"} class="my-1">
      <a href="/admin/documents" class="flex flex-col items-center">
        <span>
          <Documents color={$page.url.pathname.includes("documents")? "#5CB971": "#161628"}/>
        </span>
        <span class:active={$page.url.pathname.includes("documents")}>Documents</span>
      </a>
    </li>
    <li class:active={$page.url.pathname=="/admin/claims"} class="my-1">
      <a href="/admin/claims" class="flex flex-col items-center">
        <span>
          <Claims color={$page.url.pathname.includes("claims")? "#5CB971": "#161628"}/>
        </span>
        <span class:active={$page.url.pathname.includes("claims")}>Claims</span>
      </a>
    </li>
    <li class:active={$page.url.pathname=="/admin/feedback"} class="my-1">
      <a href="/admin/feedback" class="flex flex-col items-center">
        <span>
          <Feedback color={$page.url.pathname.includes("feedback")? "#5CB971": "#161628"}/>
        </span>
        <span class:active={$page.url.pathname.includes("feedback")}>Feedback</span>
      </a>
    </li>
    <li class:active={$page.url.pathname=="/admin/settings"} class="my-1">
      <a href="/admin/settings" class="flex flex-col items-center">
        <span>
          <Setting color={$page.url.pathname.includes("settings")? "#5CB971": "#161628"}/>
        </span>
        <span class:active={$page.url.pathname.includes("settings")}>Settings</span>
      </a>
    </li>
  </ul>
</nav>
<style>
  a, a span {
    color: #1B2752;
    font-size: 14px;
    font-weight: bold;
  }
  ul{
    position: fixed;
    top:"70px";
    left: 0;
  }
  ul li{
    padding: 5px 0px;
  }
  .active{
    color: #5CB971;
  }
</style>