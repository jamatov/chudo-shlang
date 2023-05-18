import React from 'react'
import Headervidio from '../images/header-video.png'

export default function Header() {
  return (
    <header className='Header' id='Header'>
      <div className="container">
        <div className="header-body">
          <div className="row column-reverse align-items-center">
            <div className="col-lg-6 header-info">
              <div>
                <h2>Tezkor va ishonchli</h2>
                <p>Kengaytirilgan kuzatuv va monitoring vositalari korxonalarga oʻz joʻnatmalarini kuzatib borishda va mijozlarga real vaqtda yangilanishlarni taqdim etishda yordam beradi.</p>
                <button>Bepul kansultatsiya</button>
              </div>
            </div>

            <div className="col-lg-6">
              <img src={Headervidio} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
