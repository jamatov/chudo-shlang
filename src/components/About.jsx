import React from 'react'
import Img from '../images/about-img.jpg'

export default function About() {
  return (
    <section className='About' id='About'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={Img} alt="" />
          </div>
          <div className="col-lg-6">
            <h3>Biz haqimizda</h3>
            <p>Sug'orish shlangi - cho'zilgan
              Mavsum oldidan eng foydali narxlar
              MAGIC HOSE (sehrli shlang) zamonaviy bog'bonlar va boshqalar uchun inqilobiy echimdir. Ushbu shlangning asosiy afzalligi uning yengilligi, ixchamligi, kuchliligi. Shlang bukilmaydi yoki burilmaydi. Suv yoqilganda shlang avtomatik ravishda kengayadi, shuningdek sug'orish ishlari tugagandan so'ng qisqaradi, bu esa uni saqlash uchun iloji boricha ixcham va oddiy shlanglardan farqli o'laroq ishlatish uchun qulay qiladi. To'plamga ettita ish rejimiga ega sug'orish moslamasi, shuningdek, foydalanish paytida maksimal qulaylikni ta'minlaydigan suv ta'minoti uchun mahkamlash moslamasi kiradi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
