import React from 'react'
import  Image  from '../assets/age-of-empires.jpg';
import "../styles/Home.css"

function Home() {
  return (
    <div className='main'>
        <img src={Image} alt="aoe"/>
    </div>
  )
}

export default Home;