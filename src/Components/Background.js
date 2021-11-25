import React from 'react'
import Video from '../assets/Ocean-69949.mp4'
import './Background.css'

const PianoBackground = () => {
  return (
    <div className='App'>
     <div className='NavBar'></div>
       <video className="BackgroundVideo" autoPlay loop muted>
        <source src={Video} type={"video/mp4"}/> 
        </video>
      <div className="Piano"></div>
    </div>
  )
}

export default PianoBackground;
