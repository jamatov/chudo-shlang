import React from 'react'
import Logo from '../images/Logo.png'

export default function Navbar() {
  return (
    <nav className='Navbar' id="HeaderCarusel">
      <div className="container">
        <div className='nav-body'>
          <img src={Logo} alt="logo" />

          <ul className='nav-list'>
            <li><a href="#HeaderCarusel">Asosiy </a></li>
            <li><a href="#Products">Mahsulotlar</a></li>
            <li><a href="#About">Biz haqimizda</a></li>

            <li><a href="#Contact">Aloqa</a></li>
            <li>
              <select name="language" id="">
                <option value="uz">O’zbekcha</option>
                <option value="ru">Русский</option>
              </select>
            </li>
          </ul>

          <div className="nav__toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

        </div>
      </div>
    </nav>
  )
}
