
export async function load({ params }) {
    // console.log(params);
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=3ff864926796c7f856e73bb42d6b8bdf&language=en-US&query=${params.search}&page=1&include_adult=false`
        );         
    const data = await res.json();
    

    // if (res.ok) {
        if (res.results === []) {
           console.log('no');
        }else{
            return{ 
                data : data
            }
        }
        
       
        
              
        
        
    }
    
    
