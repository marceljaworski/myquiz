import {useState} from 'react';
import Data from '../data.json';
import Button from './Button';
const fragen = Data.Fragen;

export default function Questions({name}) {
  const [count, setCount] = useState(0)
  const [ money, setMoney ] = useState(0)
  
  return (
    <div>

      <div className='frageContainer' >
        <h2 className='quizUser'>{name} Du hast jetzt {money}$</h2>
        <h1 className='quizFragen'>{fragen[count].Frage}</h1>
      </div>
      
      {fragen[count].Antworten.map((el, index) => {
        
        return <Button el={el} key={index} setCount={setCount} count={count} money={money} setMoney={setMoney} />
      })}
      
    </div>
  )
}
