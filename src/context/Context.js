import React, { createContext, useState, useEffect } from 'react';

import Data from '../data.json';

export const QuizContext = createContext();
const fragen = Data.Fragen;

function Context({ children }) {
    const [ name, setName ] = useState("")
    const [ count, setCount] = useState(0)
    const [ money, setMoney ] = useState(0)
    // const [timerOn, setTimerOn ] = useState(false)
    const [ timer, setTimer ] = useState(30)
    

    useEffect(() => {
        const interval = setInterval(() => {
             
            setTimer((prev) => prev - 1);

            if (timer < 0){
                clearInterval(interval);
            }
        }, 1000);
    }, []);
    

    const antwort = (el) => {
    
      if (fragen[count].Antworten.indexOf(el) === fragen[count].korrekterIndex){
        setCount(count + 1)
        setTimer(30)
        setMoney(money + 100)

      }else alert(`Falsche Antwort. Willst du es nochmal versuchen?`)
    
    }
   
  return (
    <QuizContext.Provider value={{
        name,
        setName,
        fragen,
        antwort,
        money,
        count,
        setCount,
        timer,
        setTimer,
      }}>
        {children}
    </QuizContext.Provider>
   
  )
}

export default Context