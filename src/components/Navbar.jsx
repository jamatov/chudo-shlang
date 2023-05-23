import React, {useState} from 'react'
import Logo from '../images/Logo.png'
import { useTranslation } from "react-i18next";

export default function Navbar({changeLang}) {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  const [active, setActive] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const navToggle = () =>{
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu")

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

  return (
    <nav className='Navbar' id="HeaderCarusel">
      <div className="container">
        <div className='nav-body'>
          <img src={Logo} alt="logo" />

          <ul className={active}>
            <li onClick={navToggle}><a href="#/">{t("home")}</a></li>
            <li onClick={navToggle}><a href="#Products">{t("products")}</a></li>
            <li onClick={navToggle}><a href="#About">{t("aboutUs")}</a></li>

            <li onClick={navToggle}><a href="#Contact">{t("contact")}</a></li>
            <li>
              <select onChange={changeLanguage} name="language">
                <option value="uz">O’zbekcha</option>
                <option value="ru">Русский</option>
              </select>
            </li>
          </ul>

          <div  onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

        </div>
      </div>
    </nav>
  )
}
