import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;