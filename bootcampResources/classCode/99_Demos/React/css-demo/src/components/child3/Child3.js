import React from 'react'
import styled from 'styled-components'

class Child3 extends React.Component {
    render(){
        return (
             <Wrapper>
                 <div className="app">
                    <p className="app_title">I am the child3 component</p>
                 </div>
             </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    .app {
        border: solid yellow 5px;
        &_title {
            color: yellow
        }
    }
`

export default Child3
