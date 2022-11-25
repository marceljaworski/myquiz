import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='Header' >
      <Link className='startLink' to="/">Start</Link>
      <Link className='startLink' to="/info">Info</Link>
    </div>
  )
}
