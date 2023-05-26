import React from 'react'
import Img from '../images/about-img.jpg'
import { useTranslation } from "react-i18next";
import Cards from './Cards';


export default function About() {
  const { t } = useTranslation();
  return (
    <section className='About' id='About'>
      <div className="container">
        <div className="row about-body align-items-center">
          <div  className="col-lg-6">
            <img src={Img} alt="" />
          </div>
          <div className="col-lg-6">
            <h3>{t("about")}</h3>
            <p>{t("about1")}</p>
            <p>{t("about2")}</p>
            <p>{t("about3")}</p>
            <p>{t("about4")}</p>
            <p>{t("about5")}</p>
            <p>{t("about6")}</p>
            <p>{t("about7")}</p>

          </div>
        </div>
      </div>
      <Cards/>
    </section>
  )
}
