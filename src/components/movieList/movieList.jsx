import { Component } from "react";
import MovieCard from "./movieCards/movieCards";

class MovieList extends Component {
    render () {
        return (
            <div>
            { this.props.movies.map(( movie ) => {
             return < MovieCard movie ={ movie }/>
            })
              }    
           </div>
        )
    }
}
export default  MovieList;