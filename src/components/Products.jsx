import React from 'react'
import img from '../images/red-shlang.png'
import cardbutton from '../images/card-button.png'
import CountTimer from './CountTimer/CountTimer'

export default function Products() {
  return (
    <main className='Products'>
      <div className="container">
        <h2 className='products-tittle'>Barcha maxsulotlar</h2>
        <div className="row">

          <div className="col-md-3">
            <div className="card">
              <img src={img} alt="" />
              <div className="card-body">
                <h3 className='card-info'>LEOMAX tomonidan Miracle Hose Ultra</h3>
                
                <CountTimer countdwonTimestampMs={164367360000}/>
                <p className='skidka'>250 000 UZS</p>
                <p className='proce'>220 000 UZS</p>

                <a href="tel:+998338678767">
                  <button className='card-button'>
                    <img src={cardbutton} alt="" />
                    +998 33 867 87 67
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                wadh'oi
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                wadh'oi
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                wadh'oi
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
