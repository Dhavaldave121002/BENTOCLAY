import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Header becomes solid/blurred when scrolled down more than 20px
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When changing route, close mobile menu and guarantee header starts transparent at top of page
  useEffect(() => {
    setIsOpen(false);

    if (!location.hash) {
      window.scrollTo(0, 0);
      setIsScrolled(false);
    }

    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    checkScroll();
    const rafId = requestAnimationFrame(checkScroll);
    const timer1 = setTimeout(checkScroll, 50);
    const timer2 = setTimeout(checkScroll, 150);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname, location.hash]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`site-header ${isScrolled ? 'scrolled' : 'header-transparent'} ${isOpen ? 'menu-open' : ''}`}
        id="top"
      >
        <div className="container nav-wrap">
          <Link to="/" className="brand" aria-label="Bentoclay Claytech home" onClick={closeMenu}>
            <img
              src="/assets/bentoclay-logo.png"
              alt="Bentoclay Claytech"
              width="110"
              height="auto"
              style={{ height: 'auto' }}
            />
          </Link>

          <button
            className={`menu-btn ${isOpen ? 'active' : ''}`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            type="button"
          >
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
          </button>

          <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? 'active-page' : '')}
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/why-us"
              className={({ isActive }) => (isActive ? 'active-page' : '')}
              onClick={closeMenu}
            >
              Why us
            </NavLink>
            <NavLink
              to="/applications"
              className={({ isActive }) => (isActive ? 'active-page' : '')}
              onClick={closeMenu}
            >
              Applications
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active-page' : '')}
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-cta"
              onClick={closeMenu}
            >
              Request a quote <span>↗</span>
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Backdrop overlay for smooth outside-click closing on mobile */}
      <div
        className={`mobile-backdrop ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}
