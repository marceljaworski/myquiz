import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useContext} from "react";
import { QuizContext } from '../context/Context';

export default function Start() {
  const { setName, setTimer } = useContext(QuizContext);
  const [newName, setNewName] = useState("");

  const handleInput = event => {
    setNewName(event.target.value);
    // console.log('value is:', event.target.value);
  };

  const handleClick = () => {
    setName(newName)
    setTimer(30)
  }

  return (
    <div className='Start'>
        <h1>Wer will Millionär werden?</h1>
        <div className='inputQuiz'>
          <input className='input' type= "text" value={newName} onChange={handleInput} placeholder= "Name"></input>
          <button className='button' onClick={handleClick}><Link className='quizLink' to="/quiz">Quiz</Link></button>
        </div>
    </div>
  )
}
