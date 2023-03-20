<script>
    export let movie
    
</script>

<div class="moviecard">
    <a data-sveltekit-preload-data sapperPrefetch data-sveltekit-noscroll href={'/movies/'+movie.id}>
     <img src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="">
    </a>
    
    <div class="description">
        <h2 class="name">{movie.original_title}</h2>
        <h3>{movie.release_date}</h3>
    </div>
</div>


<style>
    .moviecard{
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px;
    }
    img{
        width: 100%;
        height: 60vh;
        object-fit: cover;
        object-position: center;
        border-radius: 1rem;
    }
</style>