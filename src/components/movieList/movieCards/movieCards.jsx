import { Component } from "react";
 
class MovieCard extends Component {

    render () {
        return (
            <div>
           <img src={this.props.movie.Poster} alt={this.props.movie.Title}  />

           <h2>{this.props.movie.Title} </h2>
           <span>{this.props.movie.Year} </span>
           <span>{this.props.movie.Runtime} </span>
           </div>
        );
    }
}

export default MovieCard;