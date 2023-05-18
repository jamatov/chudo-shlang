import React from 'react'
import buttonIcon from '../images/contact-button.svg'

export default function Contact() {
  return (
    <section className='Contact' id='Contact'>
      <div className="container">
        <h2>Biz bilan bog'lanish</h2>
        <div className="row">
          <form className='col-md-6 contact-form'>
            <label className='col-12' htmlFor="tel">Номер телефона</label>
            <input className='col-12' type="number" placeholder='Номер телефона' />

            <label className='col-12' htmlFor="message">Сообщение</label>
            <textarea className='col-12' type="text" placeholder='Сообщение' />

            <button>Jo'natish <img src={buttonIcon} alt="arrow icon" /></button>
          </form>

          <div className="col-md-6 socials">
            <a href="tel:+998338678767"><img src="" alt="" /> +998 33 867 87 67</a>
          </div>
        </div>
      </div>
    </section>
  )
}
