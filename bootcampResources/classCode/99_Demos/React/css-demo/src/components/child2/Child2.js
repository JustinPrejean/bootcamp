import React from 'react'
import styles from './child2.module.css'


class Child2 extends React.Component {
    render(){
        console.log(styles)
        return (
             <div className={styles.divStyle}>
                 <p className={styles.pStyle}>I am the Child2 Component</p>
             </div>
        )
    }
}

export default Child2