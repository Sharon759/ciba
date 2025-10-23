import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <img src="/lo.png" alt="CIBA Mumbai Logo" className="nav__logo-image" />
        </a>
        
        <div className={`nav__menu ${menuOpen ? 'nav__menu--open' : ''}`}>
          <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#support" onClick={() => setMenuOpen(false)}>Support Offered</a>
          <a href="#startups" onClick={() => setMenuOpen(false)}>Startups</a>
          <a href="#mentors" onClick={() => setMenuOpen(false)}>Mentors</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="nav__actions">
        </div>

        <button 
          className={`nav__toggle ${menuOpen ? 'nav__toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}