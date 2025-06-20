import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // We'll create this for navigation-specific styles

function Navigation() {
  return (
    <nav className='main-navigation'>
      <ul>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
        <li><NavLink to='/projects' className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink></li>
        <li><NavLink to='/experience' className={({ isActive }) => isActive ? 'active-link' : ''}>Experience</NavLink></li>
        <li><NavLink to='/skills' className={({ isActive }) => isActive ? 'active-link' : ''}>Skills</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
