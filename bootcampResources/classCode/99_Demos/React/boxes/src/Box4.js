import React, { Component } from 'react'
import Boxes4 from './Boxes4'
const boxNum = 4;

class Box4 extends Component {
    render() {
        
        
        let boxes = []
        for(let i = 0; i < boxNum; i++) {
            boxes.push(
                <Boxes4 />
            )
        }

        return (
            <div>
                {boxes}
            </div>
            
        )
    }
}

export default Box4;