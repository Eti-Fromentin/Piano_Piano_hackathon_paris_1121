import React from 'react'
import Video from '../assets/Ocean-69949.mp4'

function Background() {
  return (
    <div className="Video" autoPlay loop muted style={{zIndex:"-1"}}>
      <video>
        <source src={Video} type={"video/mp4"}/>
      </video>
      
    </div>
  )
}

export default Background
