export async function load({ params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=3ff864926796c7f856e73bb42d6b8bdf&language=en-US`
        );         
    const datame = await res.json();
    
    // if (res.ok) {
        return{ 
            data:{
                 params,
                 datame
              }
        }
    }
    
