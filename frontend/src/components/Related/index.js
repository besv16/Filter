import React, { Component } from 'react';
import SimpleSlider from '../SimpleSlider';
import './index.css'
class Related extends Component {
  render () {
    return (
      <div className="Related">
        <h1>Relaterade artiklar</h1>
        <SimpleSlider name="Related" sliderClassName="sliderContainer3" slidesToShow="3" slidesToScroll="1"/>
      </div>
    )
  }
}

export default Related;
