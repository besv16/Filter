import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Extra from './components/Extra';
import Discussion from './components/Discussion';
import Related from './components/Related';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import heartimageunliked from './images/heart-image-unliked.svg';
import heartimageliked from './images/heart-image-liked.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {

  state = {
    location: 'oversight',
    like: false,
    percentage: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
     document.removeEventListener('scroll', this.handleScroll);
   };

  handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector(".indicator").style.width = scrolled + "%";
  }

  likeF(e) {
    this.setState({
      like: e
    })
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
          <div className="indicatorContainer">
          <div className="indicator"></div>
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
          <div className="likeShare">
            <div className="likeTopBottom">
              <p className="bold">Gillade du läsningen?</p>
              <p className="light">Rösta upp reportaget med ett tryck på hjärtat!</p>
            </div>
            {!this.state.like && (<img src={heartimageunliked} alt="Black heart" onClick={(e) => this.likeF(true)}></img>)}
            {this.state.like && (<img src={heartimageliked} alt="Redorange heart" onClick={(e) => this.likeF(false)}></img>)}
            <div className="likeTopBottom">
              <p className="bold">Sprid ordet!</p>
              <p className="light">Hjälp fler att upptäcka det här reportaget.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
