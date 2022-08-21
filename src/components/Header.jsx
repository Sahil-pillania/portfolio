import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact Me</NavLink>
      </li>
      <li>
        <NavLink to="about">About Me</NavLink>
      </li>
    </ul>



    </>
  )
}

export default Header