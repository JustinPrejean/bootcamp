import React from 'react'
import './App.css'
import Child1 from './components/child1/Child1'
import Child2 from './components/child2/Child2'
import Child3 from './components/child3/Child3'
import Child4 from './components/child4/Child4'


class Parent extends React.Component {
    render(){
        return (
            <>
             <div className="card card--purple">
                 <p className="card__title">I am the Parent Component</p>
             </div>
             <Child1 />
             <Child2 />
             <Child3 />
             <Child4 />
            </>
        )
    }
}

export default Parent