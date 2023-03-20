      // import API_KEY from 'dotenv';
      // dotenv.config();
      import { env } from "$env/dynamic/private";
    export async function load() {

      async function movies () {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=3ff864926796c7f856e73bb42d6b8bdf&language=en-US&page=1"
            );
        const datame = await res.json();
         return datame.results
       }
           
        
      async function up() {
        const ress = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${env.API_KEY}&language=en-US&page=1`);
             const dataUp = await ress.json();
            return dataUp.results
        // console.log(dataUp.results);
    
       }
      
           console.log(env.API_KEY);
        
        
        // if (res.ok) {
            return{ data: movies(), datas: up()}   
          
    }
    

   
        
    
    
    
