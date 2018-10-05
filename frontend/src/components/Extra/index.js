import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleSlider from '../SimpleSlider';
import './index.css'
class Extra extends React.Component {
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
        </div>
      </div>
    )
  }
}

export default Extra;
