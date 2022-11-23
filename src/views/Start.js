import React from 'react'
import {Link} from 'react-router-dom'

export default function Start() {
  
  const handleClick = () => {
 
  }
  return (
    <div className='Start'>
        <h1>Wer will eine Million Dollar</h1>
        <div className='inputQuiz'>
          <input className='input' type= "text" placeholder= "schreib dein Name"></input>
          <button className='button' onClick={handleClick}><Link className='quizLink' to="/quiz">Quiz</Link></button>
        </div>
    </div>
  )
}
