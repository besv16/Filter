import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleSlider from '../SimpleSlider';
import './index.css'
class Related extends React.Component {
  render () {
    return (
      <div className="Related">
        <SimpleSlider name="Related" sliderClassName="sliderContainer3" slidesToShow="3" slidesToScroll="1"/>
      </div>
    )
  }
}

export default Related;
