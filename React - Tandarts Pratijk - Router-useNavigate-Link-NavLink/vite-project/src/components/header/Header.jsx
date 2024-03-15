import React from 'react';
import './Header.css';

function Header({  icon, title }) {
  return (
    <header className="title-container">
      <img src={icon} alt={title} />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;