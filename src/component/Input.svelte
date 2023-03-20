<script>
// @ts-nocheck

	import { render } from "../routes/store";
    // import {goto} from "$app/navigator"
    import {fly} from "svelte/transition"
 // @ts-ignore
	
    
    
 let inputValue = '';
 let active = false;
  let focus=()=>{
    active=true
  }
  let check=()=>{
    if (inputValue) {
        active=true
    }else{
        active=false
    }
  }
  function submit() {
    $render++
    console.log($render);
  }
</script>




<div class="cont">
    <form class="search" on:submit|preventDefault>
        {#if active===false}
        <label in:fly={{y:-10,duration:500}} out:fly={{y:-10,duration:500}} for="search movies">search movies</label>
        {/if}
        
        <input on:blur={check} on:focus={focus} bind:value={inputValue} type="text">
        {#if inputValue}
           <a data-sveltekit-preload-data sapperPrefetch data-sveltekit-noscroll target="_parent" on:click={submit} in:fly={{x:60,duration:800}} out:fly={{x:60,duration:800}} href={"/searching/"+inputValue}>search</a>
        {/if}
        
    </form>
</div>


<style>
   
    .cont{
        width: 100%;
        display: flex;
        justify-content: center;
    }
form{
    position: relative;
    width: 80%;
    height: 50px;
    background-color: red;
    display: flex;
    flex-wrap: nowrap;
    background-color: rgb(29, 24, 24);
    border-radius: 10px;
    align-items: center;
    overflow: hidden;
}
input{
    border: none;
    background-color: rgb(29, 24, 24);
    color: white;
    width: 100%;
    height: 90%;
    outline: none;
    border-radius: 10px;
    font-size: 1.2rem;
    padding-left: 10px;
}
a{
    position: absolute;
    right: 0;
    width: 80px;
    height: 100%;
    border: none;
    border-radius: 10px;
    background-color: blue;
    color: white;
    font-size: 19px;
    pointer-events: all;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}
label{
    position: absolute;
    left: 4px;
    user-select: none;
    pointer-events: none;
    color: white;
    font-size: 1.1rem;
    padding-left: 10px;
    font-family: Arial, Helvetica, sans-serif;
   }
   /* @media (max-width:600px) {
        .cont{
            display: none;
        }
    } */
</style>