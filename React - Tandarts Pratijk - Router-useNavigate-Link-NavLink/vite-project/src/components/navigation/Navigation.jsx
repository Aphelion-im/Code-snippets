import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <h4>De Tandenborstel</h4>

        <ul>
          <li><NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Home</NavLink></li>
          <li><NavLink to="/gaatjes" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Gaatjes</NavLink></li>
          <li><NavLink to="/afspraken" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Afspraak maken</NavLink></li>
          <li><NavLink to="/tanden-bleken" className={({ isActive}) => isActive ? 'active-link' : 'default-link'}>Tanden bleken</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
