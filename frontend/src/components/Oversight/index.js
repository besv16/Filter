import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
class Oversight extends React.Component {
  navState(e) {
    this.setState({location: e})
  }
  render () {
    return (
      <div className="Oversight">
        Oversight!!!!!!!!!!!!!!!
      </div>
    )
  }
}

export default Oversight;
