import React from 'react';
import './index.css';

const Menu = ({navState, name}) => (
  <div className="menuBar" onClick={navState}>
    <a href="#scrollSection">
      <p>{name}</p>
    </a>
  </div>

)

export default Menu;
