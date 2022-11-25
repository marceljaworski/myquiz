import React, { useContext } from 'react';
import { QuizContext } from '../context/Context';


function Button({ el }) {
  const { antwort } = useContext(QuizContext);
  const handleClick = () => {
    antwort(el)
  }
  return (
    <div>
        <button className='questionButton' onClick={handleClick} >{el}</button>
    </div>
  )
}

export default Button