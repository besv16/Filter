import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  state = {
    location: '',
  }
  navState(e) {
    this.setState({location: e})
    console.log(this.state.location);
  }
  render() {
    return (
      <div className="App">
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
