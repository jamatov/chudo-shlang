import React from 'react'
import cardbutton from '../images/card-button.svg'
import timericon from '../images/timer.svg'
import img2 from '../images/shlang2.png'
import img3 from '../images/shlang3.png'
import img4 from '../images/shlang4.png'
import img5 from '../images/shlang5.png'
import img6 from '../images/shlang6.png'

// Products svg
import blue15 from '../images/card-images/blue15.svg'
import green15 from '../images/card-images/green15.svg'
import blue22_5 from '../images/card-images/blue22.5.svg'
import green22_5 from '../images/card-images/green22.5.svg'
import blue30 from '../images/card-images/blue30.svg'
import green30 from '../images/card-images/green30.svg'
import blue37_5 from '../images/card-images/blue37.5.svg'
import green37_5 from '../images/card-images/green37.5.svg'
import blue45 from '../images/card-images/blue45.svg'
import green45 from '../images/card-images/green45.svg'
import blue60 from '../images/card-images/blue60.svg'
import green60 from '../images/card-images/green60.svg'

import { useTranslation } from "react-i18next";





export default function Products() {
  const { t } = useTranslation();

  return (
    <main className='Products' id='Products'>
      <div className="container">
        <h2 className='products-tittle'>{t("allproducts")}</h2>
        <div className="row">

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue15} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 15м</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>222 600 UZS</p>
                <p className='price'>159 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={green15} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 15м</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>222 600 UZS</p>
                <p className='price'>159 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue22_5} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 22,5m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>250 600 UZS</p>
                <p className='price'>179 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
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
                <p className='skidka'>250 600 UZS</p>
                <p className='price'>179 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue30} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 30m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>278 600 UZS</p>
                <p className='price'>199 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={green30} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 30m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>278 600 UZS</p>
                <p className='price'>199 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue37_5} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 37,5m</h3>

                <p className='skidka'>292 600 UZS</p>
                <p className='price'>209 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
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
                <p className='skidka'>292 600 UZS</p>
                <p className='price'>209 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue45} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 45m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>320 600 UZS</p>
                <p className='price'>229 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={green45} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 45m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>320 600 UZS</p>
                <p className='price'>229 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={blue60} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 60m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>348 600 UZS</p>
                <p className='price'>249 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="card">
              <img src={green60} alt="" />
              <div className="card-body">
                <h3 className='card-info'>Magic hose - 60m</h3>

                {/* <div className="card-countdown">
                  <img className='card-icon' src={timericon} alt="" />
                </div> */}
                <p className='skidka'>348 600 UZS</p>
                <p className='price'>249 000 UZS</p>

                <a href="tel:+998998441114">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 99 844 11 14
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
