import React, { createContext, useState } from 'react';
import Data from '../data.json';

export const QuizContext = createContext();
const fragen = Data.Fragen;

function Context({ children }) {
    const [ name, setName ] = useState("")
    const [count, setCount] = useState(0)
    const [ money, setMoney ] = useState(0)
    const antwort = (el) => {
      if (fragen[count].Antworten.indexOf(el) === fragen[count].korrekterIndex){
        setCount(count + 1)
        setMoney(money + 100)
        // setQuestionNumber(count + 1)
  
      }else alert(`Falsche Antwort! du hast nun $`)
    
    }
   
  return (
    <QuizContext.Provider value={{
        fragen,
        setName,
        name,
        money,
        count,
        antwort,
    }}>
        {children}
    </QuizContext.Provider>
   
  )
}

export default Context