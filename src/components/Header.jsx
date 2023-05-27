import React from 'react'
import Headervidio from '../images/header-video.png'
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className='Header' id='Header'>
      <div className="container">
        <div className="header-body">
          <div className="row column-reverse align-items-center">
            <div className="col-lg-6 header-info">
              <div>
                <h2>{t("headTittle")}</h2>
                <p>{t("headInfo")}</p>
                <a href="https://t.me/magichoseadmin" target='_blank'>
                  <button>{t("consultation")}</button>
                </a>
              </div>
            </div>

            <div className="col-lg-6 video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Ifpe0rzoGuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
