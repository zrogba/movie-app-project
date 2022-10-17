
import MovieCard from "./movieCards/movieCards";

const MovieList = ({movies}) =>  {
    return (
        <div>
        { movies.map(( movie ) => {
         return < MovieCard movie ={ movie }/>
        })
          }    
       </div>
    )
}
export default  MovieList;