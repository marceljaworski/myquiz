import React from 'react'

function Button({ el, antwort }) {
  const handleClick = () => {
    antwort(el)
  }
  return (
    <div>
        <button className='questionButton' onClick={handleClick} >{el}</button>
    </div>
  )
}

export default Button