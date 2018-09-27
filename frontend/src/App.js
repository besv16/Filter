import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Landing from './components/Landing';
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
        {this.state.location == 'oversight' && (<Landing/>)}
        {this.state.location == 'extra' && (<Extra/>)}
        <div className="menuBar">
          <Menu name="ÖVERSIKT" navState={(e) => this.navState('oversight')}/>
          <Menu name="EXTRA MATERIAL" navState={(e) => this.navState('extra')}/>
          <Menu name="DISKUSSION" navState={(e) => this.navState('discussion')}/>
          <Menu name="RELATERADE ARTIKLAR" navState={(e) => this.navState('related')}/>
        </div>
      </div>
    );
  }
}

export default App;
