import React from 'react'
import Video from '../assets/Ocean-69949.mp4'
import './Background.css'

const PianoBackground = () => {
  return (
   
     <div className='BackgroundContainer'>
       <video className="BackgroundVideo" autoPlay loop muted >
        <source src={Video} type={"video/mp4"}/> 
        </video>
   </div>
  
  )
}

export default PianoBackground;
