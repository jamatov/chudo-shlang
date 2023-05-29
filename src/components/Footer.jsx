import React from 'react'
import Logo from '../images/Logo.svg'
import icon1 from '../images/social-icons/footer-telegram.svg'
import icon2 from '../images/social-icons/footer-insta.svg'
import icon3 from '../images/social-icons/footer-youtube.svg'
import icon4 from '../images/social-icons/footer-facebook.svg'
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';


export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-12 footer-logo">
            <img src={Logo} alt="" />
          </div>

          <div className="d-flex">
            <ul className='ul1'>
              <li><Link to='/' spy={true} smooth={true} offset={0} duration={100} className='footer-links' href="#HeaderCarusel">{t("home")}</Link></li>
              <li><Link to='Products' spy={true} smooth={true} offset={-90} duration={100} className='footer-links' href="#Products">{t("products")}</Link></li>
              <li><Link to='About' spy={true} smooth={true} offset={-90} duration={100} className='footer-links' href="#About">{t("aboutUs")}</Link></li>
              <li><Link to='Contact'  spy={true} smooth={true} offset={-60} duration={100} className='footer-links' href="#Contact">{t("contact")}</Link></li>
            </ul>

            <ul>
              <li><a href="https://t.me/chudoshlangmagic" target='_blank'><img src={icon1} alt="" /></a></li>
              <li><a href="https://www.instagram.com/magichose.uz/" target='_blank'><img src={icon2} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
