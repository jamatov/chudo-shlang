import React from 'react'
import Logo from '../images/Logo.svg'
import icon1 from '../images/social-icons/footer-telegram.svg'
import icon2 from '../images/social-icons/footer-insta.svg'
import icon3 from '../images/social-icons/footer-youtube.svg'
import icon4 from '../images/social-icons/footer-facebook.svg'
import { useTranslation } from "react-i18next";

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
              <li><a className='footer-links' href="#HeaderCarusel">{t("home")}</a></li>
              <li><a className='footer-links' href="#Products">{t("products")}</a></li>
              <li><a className='footer-links' href="#About">{t("aboutUs")}</a></li>
              <li><a className='footer-links' href="#Contact">{t("contact")}</a></li>
            </ul>

            <ul>
              <li><a href=""><img src={icon1} alt="" /></a></li>
              <li><a href=""><img src={icon2} alt="" /></a></li>
              <li><a href=""><img src={icon3} alt="" /></a></li>
              <li><a href=""><img src={icon4} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
