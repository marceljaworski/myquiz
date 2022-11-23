import {useState} from 'react';
import Data from '../data.json';
import Button from './Button';
const fragen = Data.Fragen;

export default function Questions({name}) {
  const [count, setCount] = useState(0)
  const [ money, setMoney ] = useState(0)
  
  return (
    <div>
      <h2>{name} Du hast jetzt {money}$</h2>
      <h1>{fragen[count].Frage}</h1>

      
      {fragen[count].Antworten.map((el, index) => {
        
        return <Button el={el} key={index} setCount={setCount} count={count} money={money} setMoney={setMoney} />
      })}
      
    </div>
  )
}
