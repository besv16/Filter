import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Menu from './components/Menu';
import Extra from './components/Extra';

class App extends Component {
  state = {
    location: 'oversight',
  }
  navState(e) {
    this.setState({location: e})
    console.log(this.state.location);
  }
  render() {
    return (
      <div className="App">
        <Landing/>
        <div className="menuContainer">
          <Menu name="ÖVERSIKT" navState={(e) => this.navState('oversight')}/>
          <Menu name="EXTRA MATERIAL" navState={(e) => this.navState('extra')}/>
          <Menu name="DISKUSSION" navState={(e) => this.navState('discussion')}/>
          <Menu name="RELATERADE ARTIKLAR" navState={(e) => this.navState('related')}/>
        </div>
        <div className="dynamicContent"><a id="scrollSection"></a>
          {this.state.location == 'oversight' && (<Landing/>)}
          {this.state.location == 'extra' && (<Extra/>)}
        </div>
      </div>
    );
  }
}

export default App;
