<script>
    export let movies;
    console.log(movies);
    import { pageStore } from '../../../movies/src/routes/store';
    import MovieCard from "./movieCard.svelte";
    import {fly} from "svelte/transition"

    function next() {
        $pageStore++
    }
    // console.log(movies);
</script>
<div>
    <h1>popular movies</h1>
    <div in:fly={{y:50,duration:700}} out:fly={{y:50,duration:700}} class="popular-movies">
        
            {#each movies.data as movie (movie.id)}
                <MovieCard {movie}/>
                
            {/each}
    </div>
    <a class="pages" data-sveltekit-preload-data on:click={next} href={"/pages/"+$pageStore}>{'next page'+" "+$pageStore}</a>
</div>



<style>
    div{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    div h1{
        margin: auto;
    }
    .pages{
        color: rgb(245, 235, 235);
        margin: auto;
        border: 1px solid green;
        margin-bottom: 10px;
        padding: 10px;
        font-weight: 600;
        font-size: 1.1rem;
        background-color: rgb(8, 8, 8);
        text-decoration: none;
   }
    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-column-gap: 1rem;
        row-gap: 1rem;
        
        /* gap: 40px; */
        
        /* grid-template-columns: 1fr 1fr 1fr; */
    }
    
</style>