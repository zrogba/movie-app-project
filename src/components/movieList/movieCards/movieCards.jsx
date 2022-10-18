
import { Link } from "react-router-dom";
const MovieCard  = ({ movie }) => {
    const {id, Poster, Title, Year, Runtime} = movie;
    return (
        <div>
      <div>
      <img src={Poster} alt={Title}  />
        </div>
<div>
  <Link to={`/movies/${id}`}>
  <h5>{Title} </h5>
  </Link>

       <span>{Year} </span>
       <span>{Runtime} </span>
</div>
   
       </div>
    );
}

export default MovieCard;

//destructure props
// convert to functional component