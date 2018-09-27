import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Landing extends React.Component {
  render () {
    return (
      <div className="landingContainer">
        <div className="oversightContainer">
          <div className="goBack">
            <a>GÅ TILLBAKA</a>
          </div>
          <div className="oversightTextContainer">
            <h1>Palmemordet: Den osannolika mördaren</h1>
            <p>Efter tolv års efterforskningar om denna gåtfulla person
            fann journalisten Thomas Pettersson vad andra tidigare gått
            bet på: Engströms motiv, och att han hade tillgång till samma
            slags vapen som Palme sköts med.</p>
            <p>Text: MADELENE POLLNOW</p>
            <p>Fotografi: FREDRIK TJERNSTRÖM</p>
            <p>Artikel i: Juni/Juli numret 2018</p>
            <div className="ctaContainer">
              <div className="readlistenContainer">
                <div className="ctaButton">BÖRJA LÄS</div>
                <div className="ctaButton">BÖRJA LYSSNA</div>
              </div>
              <div className="ctaButton bottom">DELA & GILLA</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
