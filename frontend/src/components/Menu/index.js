import React from 'react';

const Menu = ({navState, name}) => (
  <div onClick={navState}>
    <p>{name}</p>
  </div>

)

export default Menu;
