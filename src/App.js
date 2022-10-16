import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(){
    super();
//single value as {}
    this.state = {
      movies: [],
    }
  };
    //1multiple value an array[with objeects of values {}]
    
       //2setState to event listner onclick buttons
//3get array by number0,1,2..
  
// the get movie from api then it changes state and react with component didmount
//use the fetch method which is a promise, then a response. console.log -- json

componentDidMount()  {
  console.log("componentDidMount");
 
}
  render() {
    console.log("render");
    return (
      <div className="App">
         
         <h1>Welcome to moviescape</h1>
         {this.state.movies.map((movie) => {
          return (
          <h2 key={movie.id}>
            my best movie is {movie.name} {movie.year}</h2>
        );
         })}
        
      
      
       
      

      </div>
       //Method set this.state to trigger 
       // 4button, change the dom and the key value of this.state
       //5.create  another method changeName to handle multiple states
       //6.in input change value  by seting event target value
       //7.using the map method create and return an array list of movies 
    );
  }
  
}

export default App;
