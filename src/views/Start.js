import React from 'react'
import {Link} from 'react-router-dom'

export default function Start() {
  
  const handleClick = () => {
 
  }
  return (
    <div className='Start'>
        
        <input type= "text" placeholder= "schreib dein Name"></input>
        <button onClick={handleClick}><Link to="/quiz">Quiz</Link></button>
    </div>
  )
}
