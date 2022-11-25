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
    
    

    if (count > 14) {

        return alert(`Millionärs-Quiz erfolgreich abgeschlossen! Sie haben ${money}$ gewonnen`) ; 
    } 


    const antwort = (el) => {
    
      if (fragen[count].Antworten.indexOf(el) === fragen[count].korrekterIndex){
        setCount(count + 1)
        setTimer(30)
        setMoney(money + 100)

      }else alert(`Falsche Antwort! ${name}, willst du noch eine Chance?`)
    
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
        setTimer,
       
    }}>
        {children}
    </QuizContext.Provider>
   
  )
}

export default Context