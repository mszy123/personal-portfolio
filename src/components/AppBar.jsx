import React from 'react';
import './AppBar.css';
import OutlinedButton from './OutlinedButton';
import PrimaryButton from './PrimaryButton';

const AppBar = () => {
  return (
    <header className="app-bar">
      <div className="app-bar-container">
        <div className="app-bar-brand">
          <h1 className="app-bar-title">Matt <span className="app-bar-title-highlight">Szypula</span></h1>
        </div>
        <nav className="app-bar-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="app-bar-actions">
          <OutlinedButton>Contact</OutlinedButton>
          <PrimaryButton>Download Resume</PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default AppBar; 