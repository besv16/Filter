import React, { Component } from "react";
import Slider from "react-slick";
import './index.css'

export default class SimpleSlider extends Component {
  render() {
    console.log(this.props.name + ', ' + this.props.slidesToShow + ', ' + this.props.slidesToScroll);
    const settings = {
      className: this.props.sliderClassName,
      centerMode: true,
      centerPadding: '70px',
      focusOnSelect: true,
      arrows: false,
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll
    };


    if (this.props.name == 'Articles') {
      console.log("NAMNET ÄR Articles");
      return (
        <div className="noPadding">
          <Slider {...settings}>
            <div className="slider0">
              <h2>Test</h2>
              <div className="dataDescription">
                <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
                </div>
            </div>
            <div className="slider0">
              <h2>Test</h2>
              <div className="dataDescription">
                <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
                </div>
            </div>
            <div className="slider0">
              <h2>Test</h2>
              <div className="dataDescription">
                <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
                </div>
            </div>
          </Slider>
        </div>
      );
    }

    if (this.props.name == 'Infographic') {
      console.log("NAMNET ÄR INFOGRAPHIC");
      return (
        <div className="noPadding">
          <Slider {...settings}>
            <div>
            <div className="slider1">
            <h2>Preskriberingstid</h2>
            <div className="dataDescription">
            <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Innan 2010</h3>
            <div className="dataRow1">
            <p>25 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Efter 2010</h3>
            <div className="dataRow2">
            <p>40 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Palmemordet</h3>
            <div className="dataRow3">
            <p>32 år</p>
            </div>
            </div>
            </div>
            </div>
            <div>
            <div className="slider1">
            <h2>Preskriberingstid</h2>
            <div className="dataDescription">
            <p>Efter tolv års efterforskningar om denna gåtfulla person fann journalisten Thomas Pettersson vad andra tidigare gått bet på.</p>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Innan 2010</h3>
            <div className="dataRow1">
            <p>25 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Efter 2010</h3>
            <div className="dataRow2">
            <p>40 år</p>
            </div>
            </div>
            <div className="dataContainer">
            <h3 className="dataHeading">Palmemordet</h3>
            <div className="dataRow3">
            <p>32 år</p>
            </div>
            </div>
            </div>
            </div>
          </Slider>
        </div>
      );
    }
  }
}
