import React from 'react'
import buttonIcon from '../images/contact-button.svg'
// icons
import telegram from '../images/social-icons/telegram.svg'
import instagram from '../images/social-icons/Instagram.svg'
import youtube from '../images/social-icons/YouTube.svg'
import facebook from '../images/social-icons/Facebook.svg'
import call from '../images/social-icons/call.svg'
import mail from '../images/social-icons/mail.svg'
import locaton from '../images/social-icons/location_on.svg'



export default function Contact() {
  return (
    <section className='Contact' id='Contact'>
      <div className="container">
        <h2>Biz bilan bog'lanish</h2>
        <div className="row align-items-center">
          <form data-aos="fade-right" data-aos-duration="1500" className='col-md-6 contact-form'>
            <label className='col-12' htmlFor="tel">Номер телефона</label>
            <input className='col-12' type="number" placeholder='Номер телефона' />

            <label className='col-12' htmlFor="message">Сообщение</label>
            <textarea className='col-12' type="text" placeholder='Сообщение' />

            <button>Jo'natish <img src={buttonIcon} alt="arrow icon" /></button>
          </form>

          <div data-aos="fade-left" data-aos-duration="1500" className="col-md-6 socials">
            <a href="tel:+998338678767"><img className='mr' src={call} alt="" /> +998 33 867 87 67</a>
            <a href="mail"><img className='mr' src={mail} alt="" />HosUltra@gmail.com</a>
            <a href=""><img className='mr' src={locaton} alt="" />86GJ+8GM, Saqichmon ko'chasi, Tashkent, Oʻzbekiston</a>
          </div>
        </div>
      </div>
    </section>
  )
}
