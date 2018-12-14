import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
      <h1>Genetics</h1>
      <h3><Link to="/">Home</Link> | <Link to="/data">Data</Link></h3>
    </div>
  );
}

export default Header;