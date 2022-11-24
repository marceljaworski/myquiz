import {useState} from 'react';
import Data from '../data.json';
import Button from './Button';

const fragen = Data.Fragen;

export default function Questions({name, setQuestionNumber}) {
  const [count, setCount] = useState(0)
  const [ money, setMoney ] = useState(0)
  const antwort = (el) => {
    if (fragen[count].Antworten.indexOf(el) === fragen[count].korrekterIndex){
      setCount(count + 1)
      setMoney(money + 100)
      setQuestionNumber(count + 1)

    }else alert(`Falsche Antwort! du hast nun $`)
      
    }

  }
 
  return (
    <div>
    

      <div className='frageContainer' >
        <h2 className='quizUser'>{name ? `${name}, Du hast jetzt ${money}$` : `Du hast jetzt ${money}$`}</h2>
        <h1 className='quizFragen'>{fragen[count].Frage}</h1>
      </div>
      
      {fragen[count].Antworten.map((el, index) => {
        
        return <Button el={el} key={index} antwort={antwort}  />
      })}
      
    </div>
  )
}
