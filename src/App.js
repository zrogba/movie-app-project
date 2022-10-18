import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import MovieList from './components/movieList/movieList';
import About from './components/movieList/pages/About';
import MovieDetails from './components/movieList/pages/MovieDetails';

const App  = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState("");


  useEffect (() => {
    fetch (
      "http://localhost:8000/movies"
     )
     .then((response) => response.json())
     .then((apiMovies) => {
     setMovies((apiMovies));
     setShowMovies((true));    
     })
    
  }, []);

  const searchMoviesHandler = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchInput(search);
    
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(searchInput)
   });
   let renderMovies = "Loading Movies.....";

   if ( showMovies ) {
    renderMovies = <MovieList movies = { filteredMovies }/>
   }
   
  return (
    <div className="App">
       
       <h1>Welcome to moviescape</h1>

       <div>
       <input type="search"
      placeholder="Search movies"  
      
      onChange={searchMoviesHandler} />
    
        
       </div>
      <Routes>
      
        <Route path="/" element={ renderMovies } />
      <Route path="about" element={<About />} />
      <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
      
    </div>

  );

};

export default App;

/*

class App extends Component {
  constructor(){
    super();
//single value as {}
    this.state = {
      movies: [],
      showMovies: false,
      searchInput: ""
    }
  };
    //1multiple value an array[with objeects of values {}]
    
       //2setState to event listner onclick buttons
//3get array by number0,1,2..
  
// the get movie from api then it changes state and react with component didmount
//the render is called before componentDidMount
//use the fetch method which is a promise, then a response. console.log -- json of
//.then((response) => console.log(response.json()));

componentDidMount()  {
 fetch (
  "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
 )
 .then((response) => response.json())
 .then((apiMovies) => 
 this.setState(() => {
  return { movies: apiMovies, showMovies: true };
 })
 );
}

searchMoviesHandler = (e) => {
  const search = e.target.value;
  this.setState(() => {
    return { searchInput: search}
  });
};
  render() {
     let { showMovies, searchInput, movies } = this.state;

     const filteredMovies = movies.filter((movie) => {
      return movie.Title.toLocaleLowerCase().includes(searchInput)
     })
     let renderMovies = "Loading Movies.....";

     if ( showMovies ) {
      renderMovies = <MovieList movies = { filteredMovies }/>
     }
     
    return (
      <div className="App">
         
         <h1>Welcome to moviescape</h1>
        <input type="search"
        placeholder="Search movies"  
        
        onChange={this.searchMoviesHandler} />
        <MovieList movies={filteredMovies}/>
        { renderMovies }
      </div>
       //Method set this.state to trigger 
       // 4button, change the dom and the key value of this.state
       //5.create  another method changeName to handle multiple states
       //6.in input change value  by seting event target value
       //7.using the map method create and return an array list of movies 
       /* <button onClick={()=> {
          this.setState({showMovies: !showMovies})
         }}> show Movies
         </button>*/

         //SEARCH INPUT
         //ADD HANDLER SEARCHMMOVIESHANDLER, replace   
         //const search = e.target.value;
       // this.setState(() => { 
         // return { searchInput: search}})
         //12.remove this,state and include filtered to filter movies
         //14. add movielist componet with props. create folder and files. 
         //15. list of arrays in componet view 
         //adding props in parent componnet to use in children
         //conver to functional component 
   /* );
  }
  
}
*/
//export default App;
