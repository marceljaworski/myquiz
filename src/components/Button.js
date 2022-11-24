import React from 'react'

function Button({index, el, setCount, count, setMoney, money}) {

  const handleClick = () => {
   
    setCount(count + 1)
    setMoney(money + 100)
  }

  return (
    <div>
        <button className='questionButton' onClick={handleClick} key={index}>{el}</button>
    </div>
  )
}

export default Button