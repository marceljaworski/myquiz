import React from 'react'
import {Link} from 'react-router-dom'

export default function Start() {
  
  const handleClick = () => {
 
  }
  return (
    <div className='Start'>
        <h1>Wer will eine Million Dollar</h1>
        <input type= "text" placeholder= "schreib dein Name"></input>
        <button onClick={handleClick}><Link to="/quiz">Quiz</Link></button>
    </div>
  )
}
