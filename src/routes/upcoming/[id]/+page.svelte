<script>
	import { fly } from 'svelte/transition';
    export let data
    console.log("data", data.data)
    let up = data.data;
    
</script>
     <section>
        <div class="cont">
            <div class="img-cont" in:fly={{y:50,duration:700,delay:700}} out:fly={{y:50,duration:700}}>
                <img src={"https://image.tmdb.org/t/p/original/"+up.backdrop_path} alt="">
            </div>
            <div class="up">
                <h1>{up.title}</h1> 
                <p>{up.overview}</p>
                <p><span>Release Date:</span>{up.release_date}</p><br>
                <p><span>Budget:</span>${up.budget}</p><br>
                <p><span>Rating:</span>{up.vote_average}</p><br>
                <p><span>Runtime:</span>{up.runtime}mins</p><br>
            </div>
        </div>
    </section>


    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            
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
        .up{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    </style>