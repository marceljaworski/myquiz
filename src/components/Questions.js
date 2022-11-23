import React, {useState} from 'react'
import Data from '../data.json'



export default function Questions() {
  const [fragen] = useState(Data.Fragen)
  const handleClick = () => {
    
  }
  return (
    <div>
      <h1>{fragen[0].Frage}</h1>
      
      {fragen[0].Antworten.map((el, index) => {
        
        return <button onClick={handleClick} key={index}>{el}</button>
      })}
      
    </div>
  )
}
