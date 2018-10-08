import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
class Discussion extends React.Component {
  render () {
    return (
      <div className="Discussion">
      <h1>Diskussion</h1>
      <div className="containerPadding">
        <h3>Omtalat</h3>

        <div className="mailboxContainer">
          <div className="inboxContainer">
            <div className="questionContainer">
              <div>
                <p>Varför tog det så lång tid att skriva artikeln?</p>
              </div>
              <div>
              <p>Hur mycket hjälp av polisen fick ni?</p>
              </div>
            </div>
            <div className="postContainer">
              <p>Skicka in en fråga</p>
            </div>
          </div>


          <div className="openedContainer">
            <div className="opened">
              <div className="headlineContainer">

                <h3>Varför tog det så lång tid att skriva artikeln?</h3>

                <div className="QuestionMetaRow">
                  <p>Insänt av: <span>Kalle Holmqvist, Karlskrona</span></p>
                  <p>Publicerad den 2 okt 2018</p>
                </div>


            </div>

            <p className="q">Ja, som rubrikten antyder. Kommer tidningen någonsin
            komma tillbaks? Jag gillar websidan väldigt mycket och
            det är kul att läsa allting här men det var något magiskt
            med att sitta med en papperstidning och bläddra. Nåt sånt
            går liksom aldrig att uppnå digitalt. Hoppas att tidningen
            återvänder nån gång.</p>

            <div className="answerContainer">
              <p><span>Svar</span></p>

              <p>Samma för oss som arbetar med siten. Vi driver
              på här, tro mig. Tack för ditt tålamid.</p>

              <p><span>Thomas Pettersson</span></p>
            </div>

            </div>

          </div>


        </div>


        <h3>Diskussion på sociala medier</h3>
        <div>
          <a className="twitter-timeline" data-width="613" data-height="550" data-theme="dark" data-link-color="#F5F8FA" href="https://twitter.com/magasinetfilter?ref_src=twsrc%5Etfw">Tweets by magasinetfilter</a>
        </div>
      </div>
      </div>
    )
  }
}

export default Discussion;
