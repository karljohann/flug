import React from 'react';
import Pill from './Pill';
import logo from '../logo.svg';

function Header() {
  return (
    <header className="flugleidir-header">
      <div className="flugleidir-header-content">
        <img
          src={logo}
          className="flugleidir-no-url-horiz-cmyk"
          alt="Icelandair logo"
        />
        <div className="flugleidir-header-right">
          <Pill title="Ask question" />
        </div>
      </div>
    </header>
  );
}

export default Header;
