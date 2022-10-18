import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const params = useParams();

    useEffect(() => {
        const getMovie = async ()=> { 
            const result = await fetch(`http://localhost:8000/movies/${params.id}`);
            const data = await result.json();

            setMovie(data);
        };
        getMovie();
    }, []);

    const {id, Poster, Title, Year, Runtime} = movie;
    return (
        <div>
      <div>
      <img src={Poster} alt={Title}  />
        </div>
<div>
  <h5>{Title}</h5>

       <span>{Year} </span>
       <span>{Runtime} </span>
</div>
   
       </div>
    );
    
    };
    
    export default MovieDetails;