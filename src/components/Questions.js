import {useContext} from 'react';
import { QuizContext } from '../context/Context';
import Button from './Button';


export default function Questions() {
  const { name, fragen, count, money } = useContext(QuizContext);
 
  return (
    <div>
    
      <div className='frageContainer' >
        <h2 className='quizUser'>{name ? `${name}, du hast jetzt ${money}$` : `Du hast jetzt ${money}$`}</h2>
        <h1 className='quizFragen'>{fragen[count].Frage}</h1>
      </div>
      
      {fragen[count].Antworten.map((el, index) => {
        return <Button el={el} key={index} />
      })}
      
    </div>
  )
}
