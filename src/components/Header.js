import {Link} from 'react-router';
import React from 'react';

function Header() {
  return (
    <header>
      <h1>
        <Link to='/'>Header</Link>
      </h1>
    </header>
  );
}

export default Header;