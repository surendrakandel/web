<script lang="ts">
import { page } from "$app/stores";
import "$src/css/app.css";
import DashNav from "./DashNav.svelte";
import DropDown from "./DropDown.svelte";
import Nav from "./Nav.svelte";
import Sidenav from "./Sidenav.svelte";
let admin = $page.url.pathname.includes("admin")

</script>
<DropDown/>
<header>
    {#if admin}
    <DashNav/>
    <Sidenav/>
    {:else}
    <Nav/>
    {/if}
</header>

<style>
header{
    z-index: 1000;
    transition: background-image 2s ease-in-out;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    transition: box-shadow 350ms ease-out;
    font-weight: 400;
    width: 100% !important;
    position: fixed;
    top:0;
    left:0;
    background-image: linear-gradient(260.3deg, #1B2752 -7.47%, #111126 134.71%);
    color: #ffffff;  
}

</style>