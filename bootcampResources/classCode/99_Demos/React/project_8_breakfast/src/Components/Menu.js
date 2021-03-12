import React from 'react'
import {Link} from 'react-router-dom'

import Breakfast1 from '../assets/images/breakfast1.jpg'
import Breakfast2 from '../assets/images/breakfast2.jpg'
import Breakfast3 from '../assets/images/breakfast3.jpg'
import Breakfast4 from '../assets/images/breakfast4.jpg'

function Menu(){
    return (
        <div>
            <h1>The Menu</h1>
            <h3>The Ultimate Breakfast</h3>
            <img src={Breakfast1} alt="breakfast platters"/>
            <p>Are you hungry? I am <em>really</em> hungry? If so, we recommened you pick this dish!
            Fluffy pancakes, eggs over easy, crispy bacon, refried beans, a heapin' moutain of refried
            potatoes, and a omelette with green and red bell peppers. Comes with a side of tomato and
            avocado (bleh).
            </p>

            <h3>Bacon and Egs</h3>
            <img src={Breakfast2} alt="bacon and eggs"/>
            <p>You can't go wrong with the classics. Two eggs served over easy and two slices of crispy bacon.
            </p>

            <h3>Plain and Simple Eggs</h3>
            <img src={Breakfast3} alt="cooked eggs"/>
            <p>Looking for something filled with protein? Two eggs, served any way you like.
            </p>

            <h3>The Pancake Feast</h3>
            <img src={Breakfast4} alt="pankcake platters"/>
            <p>Talk about carb overload! Seven stacks of mini pancakes shaped like hearts. Comes with a side
            of maple syrup and butter.
            <br/><br/>To go back to the home page, click <Link to='/'>here</Link>.
            <br/><br/>Are you interested in catering or ordering to go? If so, click <Link to='/catering'>here</Link>.
            </p>
        </div>
    )
}

export default Menu;