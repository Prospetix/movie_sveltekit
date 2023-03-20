<script>
    export let data;
    import '../../global.css'
    let details = data.data.datame;
    console.log(data.data.datame);
    import {fly} from "svelte/transition"
</script>

<section>
    <div class="cont">
        <div class="img-cont" in:fly={{y:50,duration:700,delay:700}} out:fly={{y:50,duration:700}}>
            <img src={"https://image.tmdb.org/t/p/original/"+details.backdrop_path} alt="">
        </div>
        <div class="details">
            <h1>{details.title}</h1> 
            <p>{details.overview}</p>
            <p><span>Release Date:</span>{details.release_date}</p><br>
            <p><span>Budget:</span>${details.budget}</p><br>
            <p><span>Rating:</span>{details.vote_average}</p><br>
            <p><span>Runtime:</span>{details.runtime}mins</p><br>
        </div>
    </div>
</section>
<style>
    *{
        padding: 0;
        
    }
    section{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        height: 100%;
    }
    .cont{
        width: 70%;
        display: flex;
        flex-direction: column;
    }
    .img-cont{
        width: 100%;
        
    }
    span{
        font-weight: 700;
    }
    img{
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    .details{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>