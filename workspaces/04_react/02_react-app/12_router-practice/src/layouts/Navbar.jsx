import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li><NavLink to="/">홈</NavLink></li>
            <li><NavLink to="/about">소개</NavLink></li>
            <li><NavLink to="/menus">메뉴 목록</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
