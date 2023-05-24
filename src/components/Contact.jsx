import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import buttonIcon from '../images/contact-button.svg'
// icons
import telegram from '../images/social-icons/telegram.svg'
import instagram from '../images/social-icons/Instagram.svg'
import youtube from '../images/social-icons/YouTube.svg'
import facebook from '../images/social-icons/Facebook.svg'
import call from '../images/social-icons/call.svg'
import mail from '../images/social-icons/mail.svg'
import locaton from '../images/social-icons/location_on.svg'
import toast from 'react-hot-toast';

import { useTranslation } from "react-i18next";



export default function Contact() {
  const { t } = useTranslation();


  const BOT_TOKEN = "6101556606:AAHiHxUJxnaibanSVqPXuXHYLDaD9ipfBkY";
  const CHAT_ID = "-1001760528705"

  function formValidationChacking(name, number, message) {
    let isBoolean = false;

    if (!name) {
      setError(p => ({ ...p, name: [true, 'F.I.O. kiritilmadi!'] }))
      isBoolean = true

    } else if (name?.length < 6) {
      setError(p => ({ ...p, name: [true, "Bunchalik qisqa F.I.O. bo'lmaydi"] }))
      isBoolean = true
    }

    if (!number) {
      setError(p => ({ ...p, phone: [true, 'Telefon raqam kiritilmadi!'] }))
      isBoolean = true
    }

    if (!message) {
      setError(p => ({ ...p, text: [true, "Habar yozish majburiy!"] }))
      isBoolean = true

    } else if (message?.length < 12) {
      setError(p => ({ ...p, text: [true, "Habaringiz juda qisqa. Kamida 12ta belgi kerak!"] }))
      isBoolean = true
    }


    return isBoolean;
  }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value
    let message = e.target[2].value

    if (formValidationChacking(name, number, message)) return
    setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n<b>Xabar:</b> ${message}`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        toast.success("Habaringiz muvofaqqiyatli yuborildi!")
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error("Habar yuborilmadi! Qayta urinib ko'ring")
        setDisbl(false)
      })

    let style = {}
    if (inputValue === '') {
      style = {
        border: '2px solid red'
      }
    }
    else {
      style = {
        border: '2px solid green'
      }
    }
    setStyled(style)
  }

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '2px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""],
    text: [false, ""],
  })

  return (
    <section className='Contact' id='Contact'>
      <div className="container">
        <h2>Biz bilan bog'lanish</h2>
        <div className="row align-items-center">

          {/* <form onSubmit={sendForm} data-aos="fade-right" data-aos-duration="1500" className='col-md-6 contact-form'>
            <label className='col-12' htmlFor="tel">Номер телефона</label>
            <input className='col-12' type="number" placeholder='Номер телефона' />

            <label className='col-12' htmlFor="message">Сообщение</label>
            <textarea className='col-12' type="text" placeholder='Сообщение' />

            <button >Jo'natish <img src={buttonIcon} alt="arrow icon" /></button>
          </form> */}

          <form onSubmit={sendForm} data-aos="fade-right" data-aos-duration="500" className='col-md-6 contact-form'>

              <div className='position-relative'>

                <label>{t("numberlabel")}</label>
                <input className='col-12 ' onChange={(e) => {
                  e.target.setCustomValidity("");

                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Raqam noto'g'ri kiritilgan ! Misol: +998971050505"
                    );
                  }
                  setError(p => ({ ...p, phone: [false, ''] }))
                }} style={error.phone[0] ? styled : null} type="tel" pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" placeholder={t("numberplaceholder")} />
                {error.phone[0] && <p style={{ color: 'red' }} className='position-absolute bottom-0 mb-3'>{error.phone[1]}</p>}
              </div>

              <div className='position-relative'>

                <label>{t("massagelabel")}</label>
                <textarea className='col-12 textarea' onChange={() => setError(p => ({ ...p, text: [false, ''] }))} style={error.text[0] ? styled : null} placeholder={t("massageplaceholder")}></textarea>
                {error.text[0] && <p style={{ color: 'red' }} className='position-absolute bottom-0 mb-3'>{error.text[1]}</p>}
              </div>

               <button disabled={disbl}>Jo'natish <img src={buttonIcon} alt="arrow icon" /></button>
                
            </form>

          {/* <form className='contactForm' onSubmit={sendForm}>
            <div className='inputContent' onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} >
              <i class='bx bx-user' ></i>
              <input type="text" placeholder='John Doe' />
              <br />
            </div>
              {error.name[0] && <p style={{ color: 'red' }}>{error.name[1]}</p>}
            <div className='inputContent' onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null}>
              <i class='bx bx-phone-call'></i>
              <input autocomplete="off" maxlength="13" minlength="4" type="tel" data-intl-tel-input-id="1" placeholder='+998 (__)___-__-__' 
                onChange={(e) => {
                  e.target.setCustomValidity("");
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Raqamni noto'g'ri kiritdingiz! Misol: +998977770777"
                    );
                  }
                  setError(p => ({ ...p, phone: [false, ''] }))
                }} pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
              />
            </div>
              {error.phone[0] && <p style={{ color: 'red' }}>{error.phone[1]}</p>}
            <p>Tugmani bosish orqali siz bizning ma’lumotlaringizni ishlatish bo’yicha ofertamizga rozi bo’lgan bo’lasiz.</p>

            <button disabled={disbl}>BEPUL KONSULTATSIYA</button>
          </form> */}

          <div data-aos="fade-left" data-aos-duration="500" className="col-md-6 socials">
            <a href="tel:+998338678767"><img className='mr' src={call} alt="" /> +998 33 867 87 67</a>
            <a href="mail"><img className='mr' src={mail} alt="" />HosUltra@gmail.com</a>
            <a href=""><img className='mr' src={locaton} alt="" />86GJ+8GM, Saqichmon ko'chasi, Tashkent, Oʻzbekiston</a>
          </div>
        </div>
      </div>
    </section>
  )
}
