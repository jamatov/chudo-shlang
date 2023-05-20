import React from 'react'
import Logo from '../images/footer-logo.svg'
import icon1 from '../images/social-icons/footer-telegram.svg'
import icon2 from '../images/social-icons/footer-insta.svg'
import icon3 from '../images/social-icons/footer-youtube.svg'
import icon4 from '../images/social-icons/footer-facebook.svg'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-12 footer-logo">
            <img src={Logo} alt="" />
          </div>

          <div className="d-flex">
            <ul className='ul1'>
              <li><a className='footer-links' href="#HeaderCarusel">Asosiy</a></li>
              <li><a className='footer-links' href="#Products">Mahsulotlar</a></li>
              <li><a className='footer-links' href="#About">Biz haqimizda</a></li>
              <li><a className='footer-links' href="#Contact">Aloqa</a></li>
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
