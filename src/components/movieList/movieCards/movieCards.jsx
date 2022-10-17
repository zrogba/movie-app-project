
 
const MovieCard  = ({ movie }) => {
    const {Poster, Title, Year, Runtime} = movie;
    return (
        <div>
       <img src={Poster} alt={Title}  />

       <h2>{Title} </h2>
       <span>{Year} </span>
       <span>{Runtime} </span>
       </div>
    );
}

export default MovieCard;

//destructure props
// convert to functional component