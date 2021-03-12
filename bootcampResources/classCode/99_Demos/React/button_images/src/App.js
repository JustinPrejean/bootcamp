import React, { Component } from 'react';
import Images from './components/Images'
import {slides} from './helpers.js';
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    let newNum = event.target.value === 'BACK' ? -1 : 1;
    
    this.setState((prevState) => {
      let testNum;
      if(prevState.num + newNum === 6 && newNum === 1){
        testNum = 0;
      } else if (prevState.num + newNum < 0 && newNum === -1){
        testNum = 5
      } else {
        testNum = prevState.num + newNum
      }
      return {num: testNum}
      }
    )
    console.log(this.state.num, event.target.value, newNum)
  }

  
  render(){
    const theStyles = {
      width: '500px',
      height: '500px',
      border: '5px red solid'
    }

    let foodImageSrc = slides[this.state.num];
    console.log(slides)
    console.log(foodImageSrc)
    

    return(
      <div>
        <h1>Click on a button to see the images</h1> 
        <div id="image_container" style={theStyles}>
            <Images data={foodImageSrc}/>
        </div>
        <div id='button_container'>
          <input id='left' type="button" value="BACK" onClick={this.handleClick}/>
          <input id='right' type="button" value="FORWARD" onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default App;
