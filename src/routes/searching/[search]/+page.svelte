<script>
    export let data;
    import MovieCard from "../../../component/movieCard.svelte";
    let details = data.data.results;
    import { render } from "../../store";
    // console.log(data.data.results);
    import {fly} from "svelte/transition"
    console.log(render);
</script>

{#key $render}
<div class="searched" in:fly={{y:50,duration:700,delay:700}} out:fly={{y:50,duration:700}}>
    {#each details as results}
    
       <MovieCard movie={results}/>
     
    {/each}
</div>
{/key}  
<style>
    .searched{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-column-gap: 1rem;
        row-gap: 1rem;
    }
</style>
