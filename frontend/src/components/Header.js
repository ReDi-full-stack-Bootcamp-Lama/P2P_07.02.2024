import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link className="App-link " to="/">
          <img src="/logo192.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
