import React, {useState} from 'react'
import Data from '../data.json'



export default function Questions() {
  const [fragen] = useState(Data.Fragen)
  const [count, setCount] = useState(0)
  const [ money, setMoney ] = useState(100)
  console.log(count)
  const handleClick = () => {
    setCount(count + 1)
    setMoney(money + 100)
  }
  return (
    <div>
      <h2>{money}$</h2>
      <h1>{fragen[count].Frage}</h1>

      
      {fragen[count].Antworten.map((el, index) => {
        
        return <button onClick={handleClick} key={index}>{el}</button>
      })}
      
    </div>
  )
}
