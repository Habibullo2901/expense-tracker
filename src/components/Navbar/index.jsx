import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { IoMdAddCircle } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { LuHistory } from "react-icons/lu";


const index = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink activeclassName='active' to='/'>{<GoHomeFill className='icon' size={50} color="rgba(71, 71, 71, 0.734)"  />}</NavLink></li>
        <li><NavLink activeclassName='active' to='/addexpense'><IoMdAddCircle  className='icon' size={50} color="rgba(71, 71, 71, 0.734)" /></NavLink></li>
        <li><NavLink activeclassName='active' to='/history'><LuHistory  className='icon'  size={50} color="rgba(71, 71, 71, 0.734)" /></NavLink></li>
      </ul>
    </nav>
  )
}

export default index