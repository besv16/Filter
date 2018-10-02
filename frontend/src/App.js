import React, { Component } from 'react';
import './App.css';
import ReallySmoothScroll from 'really-smooth-scroll';
import Landing from './components/Landing';
import Oversight from './components/Oversight';
import Menu from './components/Menu';
import Extra from './components/Extra';
import Discussion from './components/Discussion';
import Related from './components/Related';


class App extends Component {
  state = {
    location: 'oversight',
  }

  navState(e) {
    this.setState({location: e})
  }

  render() {
    return (
      <div className="App">
        <Landing/>
        <div className="menuContainer">
          <Menu name="Översikt" navState={(e) => this.navState('oversight')} />
          <Menu name="Extra material" navState={(e) => this.navState('extra')} />
          <Menu name="Diskussion" navState={(e) => this.navState('discussion')} />
          <Menu name="Relaterade artiklar" navState={(e) => this.navState('related')} />
        </div>
        <div className="dynamicContent"><a id="scrollSection"></a>
          {this.state.location == 'oversight' && (<Oversight/>)}
          {this.state.location == 'extra' && (<Extra/>)}
          {this.state.location == 'discussion' && (<Discussion/>)}
          {this.state.location == 'related' && (<Related/>)}
        </div>
      </div>
    );
  }
}

document.querySelector('#scrollSection').scrollIntoView({ behavior: 'smooth' });

export default App;
