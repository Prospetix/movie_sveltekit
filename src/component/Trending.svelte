<script>
	// import { onMount } from 'svelte';
  export let up;
  let upcome = up;
  // let upComes = upCome
  console.log(up);
  console.log("upCome", up)

  // import "swiper/css";
  // import "swiper/css/pagination";
  // onMount(()=>{
  //   register()
  // })

  
</script>


<div class="cont">
  <h1>upcoming movies</h1>
  <swiper-container class="mySwiper resize" slides-per-view={1} loop={true} space-between="50" navigation="true" autoplay={true}>
    
    {#each upcome as movie (movie.id)}
        <swiper-slide class="swipe">

        <a href={'/upcoming/'+movie.id}>

            <div class="imgDiv">
              <img src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="">
            </div>

            <div class="details">

              <h2>{movie.original_title}</h2>
              <h5>RELEASE DATE: {movie.release_date}</h5>

              <div class="round"
               style={`background: conic-gradient(${movie.vote_average <= 4 ? 'red' : movie.vote_average <7.7 ? 'orange' : 'rgb(102, 236, 76)'} ${Math.round(movie.vote_average) * 10}%,  white ${movie.vote_average}%);`}>
                <h3 style={movie.vote_average <= 4 ? 'color: red' : movie.vote_average <7.7 ? 'color : orange' : 'color : rgb(102, 236, 76)'}  >{movie.vote_average}</h3>
              </div>

            </div>

        </a>
        </swiper-slide>

        
    {/each}
  
  </swiper-container>
</div>


<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .cont{
    /* width: 40rem; */
    /* height: 400px; */
    padding: 20px;
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .cont h1{
    margin: 20px auto;
  }
  /* .cont h2{
    margin: auto;
    text-transform: upComepercase;
    margin-bottom: 20px;
  } */
  .details{
    position: absolute;
    bottom: 5px;
    width: 100%;
    /* padding: 10px; */
    display: flex;
    justify-content: center;
    height: 29%;
    top: 70%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .details h2{
    color: white;
    font-size: 2.5rem;
    /* border: 1px solid red; */
    text-align: start;
    position: absolute;
    left: 10px;
    /* top: 10%;
    width: 18rem; */
  }
  .details h5{
    position: absolute;
    /* bottom: 10px; */
    top: 70px;
    color: whitesmoke;
    left: 10px;
    font-size: 1rem;
    font-family: 'Times New Roman', Times, serif;
  }
  .round{
    /* border: 5px solid white; */
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 10px;
    /* background: conic-gradient(red 100%,  black); */
  }
  .details .round h3{
    color: rgb(102, 236, 76);
    font-weight: 700;
    font-size: 24px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgb(59, 58, 58);
    border-radius: 50%;
    
  }
  .mySwiper{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 20px;
    border-radius: 1rem;
  }
  .swipe{
    position: relative;
    overflow: hidden;
  }
  .swipe .imgDiv{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
  }
  .swipe .imgDiv img{
    width: 100%;
    border-radius: 1rem;
    object-fit: contain;
    object-position: center;
   
  }
  
  @media (max-width:600px){

    .details{
      position: absolute;
      bottom: 5px;
      width: 100%;
      /* padding: 10px; */
      top: 50% !important;
      display: flex;
      justify-content: center;
      height: 48%;
      
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .details h2{
      color: white;
      font-size: 1.5rem;
      /* border: 1px solid red; */
      text-align: start;
      position: absolute;
      left: 10px;
      top: 10%;
      width: 18rem;
    }

    .details h5{
      position: absolute;
      bottom: 10px;
      color: whitesmoke;
      left: 10px;
      font-size: 1rem;
      font-family: 'Times New Roman', Times, serif;
    }
  }
</style>