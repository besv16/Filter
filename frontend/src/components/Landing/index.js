import React, { Component } from 'react';
import leftarrow from '../../images/left-arrow.svg';
import './index.css';

class Landing extends Component {
  render () {
    return (
      <div className="landingContainer">
        <div className="oversightContainer">
          <div className="goBack">
            <a><img src={leftarrow} alt="Go back"></img>GÅ TILLBAKA</a>
          </div>
          <div className="oversightTextContainer">
            <h1>Palmemordet: Den osannolika mördaren</h1>
            <div className="descriptionContainer">
              <p>Efter tolv års efterforskningar om denna gåtfulla person
              fann journalisten Thomas Pettersson vad andra tidigare gått
              bet på: Engströms motiv, och att han hade tillgång till samma
              slags vapen som Palme sköts med.</p>
            </div>
            <div className="metaContainer">
              <p className="metaRow">Text: <span className="borderBottomUppercase">Madelene Pollnow</span></p>
              <p className="metaRow">Fotografi: <span className="borderBottomUppercase">Fredrik Tjernström</span></p>
              <p className="metaRow">Artikel i: <span className="borderBottomUppercase">Juni/Juli numret 2018</span></p>
            </div>
            <div className="ctaContainer">
              <div className="readlistenContainer">
                <div className="ctaButton"><a href="https://magasinetfilter.se/reportage/59-minuter-som-forandrade-sverige/">BÖRJA LÄS</a></div>
                <div className="ctaButton">BÖRJA LYSSNA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
