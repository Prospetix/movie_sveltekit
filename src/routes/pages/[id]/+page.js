export async function load({params}) {
    let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3ff864926796c7f856e73bb42d6b8bdf&language=en-US&page=${params.id}`);
    let data = await res.json()

    return {
        data: data.results
    }
    
    
}