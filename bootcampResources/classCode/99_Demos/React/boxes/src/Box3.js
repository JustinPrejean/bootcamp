import React, { Component } from 'react'
import Boxes3 from './Boxes3'
const boxNum = 4;

class Box3 extends Component {
    render() {
        let randNum = Math.floor(Math.random()*8);
        let backgroundColor = ['green', 'red', 'blue', 'purple', 'magenta', 'yellow', 'pink', 'orange'][randNum];
        randNum = randNum === 0 ? 7 : randNum - 1;
        let borderColor = ['green', 'red', 'blue', 'purple', 'magenta', 'yellow', 'pink', 'orange'][randNum];
        const theStyles = {
            width: `250px`,
            height: `250px`,
            margin: `25px`,
            display: 'inline-block',
            backgroundColor,
            border: `10px ridge ${borderColor}`
        }
        
        let boxes = []
        for(let i = 0; i < boxNum; i++) {
            boxes.push(
                <Boxes3 newStyles={theStyles}/>
            )
        }

        return (
            <div>
                {boxes}
            </div>
            
        )
    }
}

export default Box3;