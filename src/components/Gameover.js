import React from 'react';
import {useContext} from 'react';
import { QuizContext } from '../context/Context';

function Gameover() {
    const { name, money } = useContext(QuizContext);
  return (
    <div>
        <div className='frageContainer' >
        <h2 className='quizUser'>{name ? `${name}, du hast jetzt ${money}$` : `Du hast jetzt ${money}$`}</h2>
        <h1 className='quizFragen'>Die Zeit ist um</h1>
      </div>
    </div>
  )
}

export default Gameover