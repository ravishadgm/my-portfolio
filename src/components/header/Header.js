import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Hamburger icon on the left */}
        <div
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </div>

        {/* Logo */}
        <div className={styles.logo}>
          R<span className={styles.highlight}>V</span>.
        </div>

        {/* Navigation */}
        <nav className={`${styles.navMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
        <a href="tel:+919327574166" className={styles.ctaBtn}>
          Let&apos;s Connect
        </a>
      </div>
    </header>
  );
};

export default Header;
