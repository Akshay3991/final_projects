import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
           <header>
            <nav>
                <ul>
                   <Link to='/'>
                   <li>Home</li>
                   </Link> 
                   <Link to='/orders'>
                   <li>Orders</li>
                   </Link> 
                   <Link to='/cart'>
                   <li>Cart</li>
                   </Link> 
                    
                </ul>
            </nav>
           </header>
        </div>
    )
}

export default Header
