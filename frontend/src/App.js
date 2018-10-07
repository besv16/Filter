import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Extra from './components/Extra';
import Discussion from './components/Discussion';
import Related from './components/Related';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import heartimage from './images/heart-image.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
  state = {
    location: 'oversight'
  }

  render() {
    return (
      <div className="App">
        <div><a id="scrollSection1"></a>
          <Landing/>
        </div>
        <div className="menuContainer">
          <div className="menu">
            <AnchorLink href='#scrollSection1'>
              <Menu name="Översikt" />
            </AnchorLink>
            <AnchorLink href='#scrollSection2'>
              <Menu name="Extra material" />
            </AnchorLink>
            <AnchorLink href='#scrollSection3'>
              <Menu name="Diskussion" />
            </AnchorLink>
            <AnchorLink href='#scrollSection4'>
              <Menu name="Relaterade artiklar" />
            </AnchorLink>
          </div>
        </div>
        <div className="dynamicContent"><a id="scrollSection2"></a>
          <Extra/>
        </div>
        <div className="dynamicContent"><a id="scrollSection3"></a>
          <Discussion/>
        </div>
        <div className="dynamicContent"><a id="scrollSection4"></a>
          <Related/>
        </div>
        <div className="likeShareContainer">
          <img src={heartimage}></img>
      </div>
      </div>
    );
  }
}

export default App;
