import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import Logo from '../images/Logo.svg'
import { Link } from 'react-scroll';

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
          <Link to="/" spy={true} smooth={true} offset={0} duration={100}>
            <img src={Logo} alt="logo" />
          </Link>

          <ul className={active}>
            <li activeClass="active" onClick={navToggle}><Link  to="/" spy={true} smooth={true} offset={0} duration={100} onClick={navToggle}>{t("home")}</Link></li>
            <li activeClass="active" onClick={navToggle}><Link  to="Products" spy={true} smooth={true} offset={-90} duration={100} onClick={navToggle}>{t("products")}</Link></li>
            <li activeClass="active" onClick={navToggle}><Link  to="About" spy={true} smooth={true} offset={-90} duration={100} onClick={navToggle}>{t("aboutUs")}</Link></li>

            <li activeClass="active" onClick={navToggle}><Link  to="Contact" spy={true} smooth={true} offset={-60} duration={100} onClick={navToggle}>{t("contact")}</Link></li>
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
