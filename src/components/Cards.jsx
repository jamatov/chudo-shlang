import React from 'react'
import icon1 from '../images/card-icon1.svg'
import icon2 from '../images/card-icon2.svg'
import icon3 from '../images/card-icon3.svg'
import { useTranslation } from "react-i18next";





export default function Cards() {
  const { t } = useTranslation();

  return (
    <section className='Cards'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <div  className="card">
              <img src={icon1} alt="" />
              <h3>{t("card1Tittle")}</h3>
              <p>{t("card1Info1")}</p>
              <p>{t("card1Info2")}</p>
              <p>{t("card1Info3")}</p>
              <p>{t("card1Info4")}</p>
              <p>{t("card1Info5")}</p>
            </div>
          </div>

          <div className="col-lg-4 ">
            <div  className="card">
              <img src={icon2} alt="" />
              <h3>Yetkazib berish xizmati</h3>
              <p> O'zbekiston bo'ylab 50.000 so'm
              Toshkent shahri bo'ylab - 25.000 so'm</p>
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="card">
              <img src={icon3} alt="" />
              <h3>{t("card3Tittle")}</h3>
              <p>{t("card3Info1")}</p>
              <p>{t("card3Info2")}</p>
              <p>{t("card3Info3")}</p>
              <p>{t("card3Info4")}</p>
              <p>{t("card3Info5")}</p>
              <p>{t("card3Info6")}</p>
              <p>{t("card3Info7")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
