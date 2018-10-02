import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
class Discussion extends React.Component {
  navState(e) {
    this.setState({location: e})
  }
  render () {
    return (
      <div className="Discussion">
      </div>
    )
  }
}

export default Discussion;
