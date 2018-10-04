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
        </div>
        <div>
          <h2>Infografik</h2>
          <SimpleSlider/>
        </div>
        <div>
          <h2>Omtalat</h2>
        </div>
      </div>
    )
  }
}

export default Extra;
