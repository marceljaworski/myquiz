import React, { createContext, useState, useEffect } from 'react';
import Data from '../data.json';

export const QuizContext = createContext();
const fragen = Data.Fragen;

function Context({ children }) {
    const [ name, setName ] = useState("")
    const [ count, setCount] = useState(0)
    const [ money, setMoney ] = useState(0)
    const [timerOn, setTimerOn ] = useState(false)
    const [ timer, setTimer ] = useState(30);

    useEffect(() => {
        if (timer === 0) return alert(`Zeit is vorbei!`) ;  
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timerOn]);
        

    const antwort = (el) => {
      if (fragen[count].Antworten.indexOf(el) === fragen[count].korrekterIndex){
        setCount(count + 1)
        setTimer(30)
        setMoney(money + 100)

      }else alert(`Falsche Antwort! ${name} du hast nun ${money}$ Noch ein versuch?`)
    
    }
   
  return (
    <QuizContext.Provider value={{
        fragen,
        name,
        setName,
        money,
        count,
        setCount,
        antwort,
        timer,
    }}>
        {children}
    </QuizContext.Provider>
   
  )
}

export default Context