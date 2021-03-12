import React, {Component} from 'react';

class Images extends Component {
    render(){
        return(
            <img src={this.props.data} alt="food" width='100%' height='100%'/>
        )
    }
}

export default Images;