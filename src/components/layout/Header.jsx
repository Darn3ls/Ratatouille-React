import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        
        {/* Logo */}
        <div className="header__logo">
          <span className="logo-text">Ratatouille</span>
        </div>

        {/* Navigation */}
        <nav className="header__nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/explore" className="nav-link">Explore</a>
          <a href="/favorites" className="nav-link">Favorites</a>
          <a href="/profile" className="nav-link">Profile</a>
        </nav>

      </div>
    </header>
  );
}
