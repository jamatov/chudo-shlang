import React from 'react'
import img from '../images/card-images/1,1.png'
import cardbutton from '../images/card-button.svg'
import timericon from '../images/timer.svg'
import img2 from '../images/shlang2.png'
import img3 from '../images/shlang3.png'
import img4 from '../images/shlang4.png'
import img5 from '../images/shlang5.png'
import img6 from '../images/shlang6.png'

import blue15m from '../images/card-images/15m-blue-removebg-preview.png'
import green15m from '../images/card-images/15m-green-removebg-preview.png'
import green22_5 from '../images/card-images/22_5m-green-removebg-preview.png'
import blue30m from '../images/card-images/30m-blue-removebg-preview.png'
import green37_5 from '../images/card-images/4,1.png'

export default function Products() {
  return (
    <main className='Products' id='Products'>
      <div className="container">
        <h2 className='products-tittle'>Barcha maxsulotlar</h2>
        <div className="row">

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue15m} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 15м</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>189 000 UZS</p>
                <p className='price'>159 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={green15m} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 15м</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>189 000 UZS</p>
                <p className='price'>159 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={green22_5} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 22,5m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>209 000 UZS</p>
                <p className='price'>179 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue30m} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 22,5m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>209 000 UZS</p>
                <p className='price'>179 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={img5} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 30m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>229 000 UZS</p>
                <p className='price'>199 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={img6} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 30m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>229 000 UZS</p>
                <p className='price'>199 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={img} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 37,5m</h3>

                <p className='skidka'>239 000 UZS</p>
                <p className='price'>209 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={green37_5} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 37,5m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>239 000 UZS</p>
                <p className='price'>209 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={img4} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 45m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>259 000 UZS</p>
                <p className='price'>229 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={img2} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 45m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>259 000 UZS</p>
                <p className='price'>229 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={img5} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 60m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>279 000 UZS</p>
                <p className='price'>249 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={img6} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 60m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>279 000 UZS</p>
                <p className='price'>249 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

      

        </div>
      </div>
    </main>
  )
}
