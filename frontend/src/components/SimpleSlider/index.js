import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: 'sliderContainer',
      centerMode: true,
      centerPadding: '70px',
      focusOnSelect: true,
      arrows: false,
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 1.2,
      slidesToScroll: 1
    };
    return (
      <div className="noPadding">
        <Slider {...settings}>
          <div>
            <div className="slider1">
              <h2>Preskriberingstid</h2>
              <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
              <p className="dataHeading">Innan 2010</p>
              <div className="dataRow">
                <p>25 år</p>
              </div>
              <p className="dataHeading">Efter 2010</p>
              <div className="dataRow">
                <p>40 år</p>
              </div>
              <p className="dataHeading">Palmemordet</p>
              <div className="dataRow">
                <p>32 år</p>
              </div>
            </div>
          </div>
          <div>
            <div className="slider2">2</div>
          </div>
        </Slider>
      </div>
    );
  }
}
