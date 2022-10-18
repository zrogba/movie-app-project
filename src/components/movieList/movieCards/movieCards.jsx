
 
const MovieCard  = ({ movie }) => {
    const {Poster, Title, Year, Runtime} = movie;
    return (
        <div>
      <div>
      <img src={Poster} alt={Title}  />
        </div>

       <h5>{Title} </h5>
       <span>{Year} </span>
       <span>{Runtime} </span>
       </div>
    );
}

export default MovieCard;

//destructure props
// convert to functional component