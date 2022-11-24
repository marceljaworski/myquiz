import { useEffect, useState } from "react";

export default function Counter({ setTimeOut, questionNumber , timer , setTimer}) {
    

    useEffect(() => {
        if (timer === 0) return setTimeOut(true);
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
      console.log("kiki");
        setTimer(30);
    }, []);

    //useEffect(() => {
    //   setTimer(30);
    //}, [questionNumber]);

    return (<div>{timer}</div>);
}
