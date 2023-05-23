import React, { Component } from "react";
import Slider from "react-slick";
import Img from '../images/slider-img.png'
import { useTranslation } from "react-i18next";
import img1 from '../images/carusel30.jpg'
import img2 from '../images/carusel37,5.jpg'
import img3 from '../images/carusel45.png'


export default function HeaderCarusel() {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true
  };
  return (
    <div className="HeaderCarusel container" id="/">
      <div>
      <Slider {...settings}>
        <div className="slider-body column-reverse">
          <div className="slider-body__img">
            <img src={img1} alt="" />
            {/* <div className="blue-info">Magic hose - 30M</div> */}
          </div>
          <div className="slider-body__info">
            <h2>Magic Hose ORIGINAL</h2>
            <p>{t("caruselInfo")}</p>

            <button>{t("consultation")}</button>

          </div>
        </div>

        <div className="slider-body">
          <div className="slider-body__img">
            <img src={img2} alt="" />
          </div>
          <div className="slider-body__info">
            <h2>Magic Hose ORIGINAL</h2>
            <p>{t("caruselInfo")}</p>


            <button>{t("consultation")}</button>


          </div>
        </div>

        <div className="slider-body">
          <div className="slider-body__img">
            <img src={img3} alt="" />
          </div>
          <div className="slider-body__info">
            <h2>Magic Hose ORIGINAL</h2>
            <p>{t("caruselInfo")}</p>


            <button>{t("consultation")}</button>


          </div>
        </div>
        
      </Slider>
    </div>
  </div>
  )
}





// export default class PauseOnHover extends Component {
  
//   render() {
    

//     return (

//     );
//   }
// }