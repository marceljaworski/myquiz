import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useContext} from "react";
import { QuizContext } from '../context/Context';

export default function Start() {
  const { setName } = useContext(QuizContext);
  const [newName, setNewName] = useState("");

  const handleInput = event => {
    setNewName(event.target.value);
    // console.log('value is:', event.target.value);
  };

  const handleClick = () => {
    setName(newName)
    
  }

  return (
    <div className='Start'>
        <h1>Wer will eine Million Dollar?</h1>
        <div className='inputQuiz'>
          <input className='input' type= "text" value={newName} onChange={handleInput} placeholder= "schreib dein Name"></input>
          <button className='button' onClick={handleClick}><Link className='quizLink' to="/quiz">Quiz</Link></button>
        </div>
    </div>
  )
}
