import React, { Component } from 'react'

class Boxes2 extends Component {

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

        return (
            <div style={theStyles}>
                Boxes2
            </div>
        )
    }
}

export default Boxes2;