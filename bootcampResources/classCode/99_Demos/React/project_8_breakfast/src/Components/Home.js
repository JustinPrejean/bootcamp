import React from 'react'
import {Link} from 'react-router-dom'

import Food from '../assets/images/food.jpg'

function Home(){
    return (
        <div>
            <h1>The Breakfast Restaurant</h1>
            <img src={Food} alt="food" width="44%"/>
        
            <br/>
            
            <h3>We serve the most delicious breakfast food you will ever find!</h3>
        
            <p>Established in 2002, The Breakfst Restaurant is a comtemporary cafe that appeals even to the pickiest
            of eaters (that means you!). Whether you want eggs benedict, sausage, bacon, cereal or just a regular cup
            of coffee, we've got it all.
            <br/><br/>We are passionate about excellence, and we have a desire to serve you with consistent quality that
            you won't find anywhere else.
            <br/><br/>We want you to feel at home. You can expect to feel a level of comfort and warmth from our nicely
            decorated dining room. We have comfortable chairs, old fashioned wooden tables, and other wonderful aspects
            that are simply unmatched anywhere else. We even have a ptio area for our guests who need a little sunshine in their lives.
            <br/><br/>To see our menu, click <Link to='/menu'>here</Link>.
            <br/><br/>Are you interested in catering or ordering to go? If so, click <Link to='/catering'>here</Link>.
            </p>
        </div>
        
    )
}

export default Home;