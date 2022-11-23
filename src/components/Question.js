import React from 'react'
// import React, {useState} from 'react'


function Question({index, el, setCount, count, setMoney, money}) {

  const handleClick = (event) => {
   
    setCount(count + 1)
    setMoney(money + 100)
  }
  console.log(index)
  return (
    <div>
        <button onClick={handleClick} key={index}>{el}</button>
    </div>
  )
}

export default Question