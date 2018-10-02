import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
class Related extends React.Component {
  navState(e) {
    this.setState({location: e})
  }
  render () {
    return (
      <div className="Related">
      </div>
    )
  }
}

export default Related;
