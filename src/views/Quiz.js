import React from 'react'
import Questions from '../components/Questions'
import Counter from "../components/Counter"


function Quiz({name}) {
  return (
    <>
        <Counter />
        <Questions name={name}/>
    </>
  )
}

export default Quiz