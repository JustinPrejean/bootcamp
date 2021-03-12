import React, {Component} from 'react';
import MovieComp from './Components/MovieComp';

import movieData from './data';

import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
       <MovieComp data={movieData}/>
      </div>
    );
  }
  
}

export default App;
