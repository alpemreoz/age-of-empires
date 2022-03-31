import React from 'react';
import "../styles/Navbar.css"
import {Link} from "react-router-dom" ;


function navbar() {
  return (
    <div className='Navbar'>
        <div className='heading child'>
            <h1>Age Of Empires</h1>
            <h3>Unit Guidline</h3>
        
        <div className='links child'>
            <ul>
                <li className='home'><Link to="/">Home</Link></li>
                <li className='unit'><Link to="/units">Unit</Link></li>
            </ul>
             
             
        </div>
        </div>
    </div> 
  )
}

export default navbar


