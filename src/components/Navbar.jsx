import React from 'react'
import Logo from '../images/Logo.png'

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className='nav-body'>
          <img src={Logo} alt="logo" />

          <ul>
            <li><a href="#">Asosiy </a></li>
            <li><a href="#">Mahsulotlar</a></li>
            <li><a href="#">Aloqa</a></li>
          </ul>

          <select name="language" id="">
            <option value="uz">O’zbekcha</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </nav>
  )
}
