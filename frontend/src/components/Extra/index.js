import React, { Component } from 'react';
import SimpleSlider from '../SimpleSlider';
import './index.css'
class Extra extends Component {
  render () {
    return (
      <div className="Extra">
        <h1>Extra material</h1>
        <div>
          <h2>Artiklar</h2>
          <SimpleSlider name="Articles" sliderClassName="sliderContainer0" slidesToShow="3" slidesToScroll="1"/>
        </div>
        <div>
          <h2>Infografik</h2>
          <SimpleSlider name="Infographic" sliderClassName="sliderContainer1" slidesToShow="1.1" slidesToScroll="1"/>
        </div>
        <div>
          <h2>Omtalat</h2>
          <SimpleSlider name="Discussed" sliderClassName="sliderContainer2" slidesToShow="2.2" slidesToScroll="1"/>
        </div>
      </div>
    )
  }
}

export default Extra;
