import React, { Component } from "react";
import Slider from "react-slick";
import Img from '../images/slider-img.png'

export default class PauseOnHover extends Component {
  render() {
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
        <div className="HeaderCarusel container" >
          <div>
          <Slider {...settings}>
            <div className="slider-body column-reverse">
              <div className="slider-body__img">
                <img src={Img} alt="" />
              </div>
              <div className="slider-body__info">
                <h2>MAGIC HOSE</h2>
                <p>Sug'orish shlangi cho'zilgan
                  Mavsum oldidan eng foydali narxlar MAGIC HOSE (sehrli shlang) zamonaviy bog'bonlar va boshqalar uchun inqilobiy echimdir. 
                </p>

                <button>Bepul kansultatsiya</button>

              </div>
            </div>

            <div className="slider-body">
              <div className="slider-body__img">
                <img src={Img} alt="" />
              </div>
              <div className="slider-body__info">
                <h2>MAGIC HOSE 2</h2>
                <p>Sug'orish shlangi cho'zilgan
                  Mavsum oldidan eng foydali narxlar MAGIC HOSE (sehrli shlang) zamonaviy bog'bonlar va boshqalar uchun inqilobiy echimdir. 
                </p>

                <button>Bepul kansultatsiya</button>

              </div>
            </div>

            <div className="slider-body">
              <div className="slider-body__img">
                <img src={Img} alt="" />
              </div>
              <div className="slider-body__info">
                <h2>MAGIC HOSE 3</h2>
                <p>Sug'orish shlangi cho'zilgan
                  Mavsum oldidan eng foydali narxlar MAGIC HOSE (sehrli shlang) zamonaviy bog'bonlar va boshqalar uchun inqilobiy echimdir. 
                </p>

                <button>Bepul kansultatsiya</button>

              </div>
            </div>
            
          </Slider>
        </div>
        </div>
    );
  }
}