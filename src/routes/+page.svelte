
<script>
    import './global.css'
    
    export let data;
    let upCome = data.datas
    // console.log(data.datas);
    import Popular from "../component/popular.svelte";
    import { fly } from "svelte/transition";
    import Trending from '../component/Trending.svelte';
    // console.log(data);
// let name ='yes'
   
</script>

 
<section in:fly={{y:50,duration:700,delay:700}} out:fly={{y:50,duration:700}}>
    <!-- <Input /> -->
    <!-- {@debug name} -->
    <Trending up={upCome}/>
    <Popular movies={data}/>
</section>

<style>
   *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   }
    
</style>