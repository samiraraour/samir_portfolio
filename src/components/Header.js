import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      
      <Link to="/" className="header-brand">Portfolio</Link>
      <nav className="header-nav">
        <Link to="/projet1" className="header-link">Projet 1</Link>
        <Link to="/projet2" className="header-link">Projet 2</Link>
        <Link to="/contact" className="header-link">Contact</Link>
        <div className="header-dropdown">
          <span className="header-link">Témoignages</span>
          <div className="header-dropdown-content">
            <Link to="/testimonials" className="header-dropdown-item">Voir</Link>
            <Link to="/add-testimonial" className="header-dropdown-item">Ajouter</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
