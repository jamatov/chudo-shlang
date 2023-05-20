import React from 'react'
import icon1 from '../images/card-icon1.svg'
import icon2 from '../images/card-icon2.svg'
import icon3 from '../images/card-icon3.svg'

export default function Cards() {
  return (
    <section className='Cards'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <div className="card">
              <img src={icon1} alt="" />
              <h3>Sifatli maxsilotlar</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="card">
              <img src={icon2} alt="" />
              <h3>Yetkazib berish xizmati</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="card">
              <img src={icon3} alt="" />
              <h3>Arzon va tez</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
