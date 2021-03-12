import React from 'react'

const styledDiv = {
   border: 'red solid 5px' 
}

const styledP = {
    color: 'red'
}

class Child1 extends React.Component {
    render(){
        return (
             <div style={styledDiv}>
                 <p style={styledP}>I am the Child1 Component</p>
             </div>
        )
    }
}

export default Child1