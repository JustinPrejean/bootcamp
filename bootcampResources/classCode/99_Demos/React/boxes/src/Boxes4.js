import React, { Component } from 'react'

class Boxes4 extends Component {
    
    render() {
        let size = Math.floor(Math.random()*200)+150;
        let randNum = Math.floor(Math.random()*8);
        let backgroundColor = ['green', 'red', 'blue', 'purple', 'magenta', 'yellow', 'pink', 'orange'][randNum];
        randNum = randNum === 0 ? 7 : randNum - 1;
        let borderColor = ['green', 'red', 'blue', 'purple', 'magenta', 'yellow', 'pink', 'orange'][randNum];
        
        const theStyles = {
            width: `${size}px`,
            height: `${size}px`,
            margin: `25px`,
            display: 'inline-block',
            backgroundColor,
            border: `10px ridge ${borderColor}`
        }
        return (
            <div style={theStyles}>
            BOXES 4
            </div>
        )
    }
}

export default Boxes4;