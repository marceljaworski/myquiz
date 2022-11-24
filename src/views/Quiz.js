import {React, useState} from 'react';
import Questions from '../components/Questions';
import Counter from "../components/Counter";


function Quiz({name}) {
  const [questionNumber, setQuestionNumber] = useState(1);
  

  return (
    <>
        <Counter questionNumber={questionNumber} />
        <Questions name={name}/>
    </>
  )
}

export default Quiz