import {useState} from 'react';
import Data from '../data.json';
import Question from '../components/Question';
const fragen = Data.Fragen;

export default function Questions({name}) {
  const [count, setCount] = useState(0)
  const [ money, setMoney ] = useState(0)
  
  return (
    <div>
      <div className='frageContainer' >
        <h2 className='quizUser'>{name} Du hast jetzt {money}$</h2>
        <h1 className='quizFragen'>{fragen[0].Frage}</h1>
      </div>
      
      {fragen[0].Antworten.map((el, index) => {
        
        return <Question el={el} key={index} setCount={setCount} count={count} money={money} setMoney={setMoney} />
      })}
      
    </div>
  )
}
